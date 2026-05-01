"""
Processes public/me.jpg into public/portrait.png — a dark, silhouette
treatment to match the reference video aesthetic. The animated red
drips are layered on top via SVG at runtime (see HeroPortrait.jsx).
"""
import os
import sys
import numpy as np
import cv2

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'public', 'me.jpg')
DST = os.path.join(ROOT, 'public', 'portrait.png')

if not os.path.exists(SRC):
    print(f'Missing source: {SRC}', file=sys.stderr)
    sys.exit(1)

img = cv2.imread(SRC, cv2.IMREAD_COLOR)
h, w = img.shape[:2]

# Crop to portrait ratio centered on subject (heuristic — assumes face roughly center-top)
target_aspect = 3 / 4  # w / h
cur_aspect = w / h
if cur_aspect > target_aspect:
    new_w = int(h * target_aspect)
    x0 = (w - new_w) // 2
    img = img[:, x0:x0 + new_w]
else:
    new_h = int(w / target_aspect)
    y0 = max(0, int(h * 0.05))
    y1 = min(h, y0 + new_h)
    img = img[y0:y1, :]
h, w = img.shape[:2]

# Resize to a sensible width
TARGET_W = 900
scale = TARGET_W / w
img = cv2.resize(img, (TARGET_W, int(h * scale)), interpolation=cv2.INTER_AREA)
h, w = img.shape[:2]

# Convert to grayscale + boost contrast hard for silhouette
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).astype(np.float32) / 255.0

# Strong S-curve toward dark — push subject deep
gray = np.clip((gray - 0.50) * 2.4 + 0.10, 0.0, 1.0)
gray = np.power(gray, 2.2)  # gamma — push midtones to black

# Radial vignette — bright behind head, falling off at edges (the spotlight)
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
cx, cy = w * 0.5, h * 0.32
dx = (xx - cx) / (w * 0.60)
dy = (yy - cy) / (h * 0.60)
r = np.sqrt(dx * dx + dy * dy)
backlight = np.clip(1.0 - r * 0.95, 0.0, 1.0) ** 2.0  # bright disc

# Composite: subject (very dark silhouette) + backlight (rim/glow)
# Multiply silhouette into backlight so subject blocks the glow
silhouette = gray ** 1.1
out = backlight * (0.25 + silhouette * 0.75) * 0.85
out = np.clip(out, 0.0, 1.0)

# Slight warm tint
b = np.clip(out * 0.92, 0, 1)
g = np.clip(out * 0.95, 0, 1)
r_ch = np.clip(out * 1.0, 0, 1)
rgb = np.stack([b, g, r_ch], axis=-1)

# Film grain
rng = np.random.default_rng(1)
grain = rng.normal(0.0, 0.045, (h, w, 1)).astype(np.float32)
rgb = np.clip(rgb + grain, 0.0, 1.0)

# Add an alpha channel — fully opaque image (we'll let CSS handle masking the edges)
alpha = np.ones((h, w, 1), dtype=np.float32)

# Soft edge fade so portrait blends into the dark hero bg
edge_x = np.minimum(xx / (w * 0.18), (w - xx) / (w * 0.18))
edge_y = np.minimum(yy / (h * 0.10), (h - yy) / (h * 0.18))
edge = np.clip(np.minimum(edge_x, edge_y), 0.0, 1.0)
alpha[..., 0] = edge ** 0.9

bgra = np.concatenate([rgb, alpha], axis=-1)
bgra = (bgra * 255).astype(np.uint8)

cv2.imwrite(DST, bgra)
print(f'Wrote {DST} ({w}x{h})')
