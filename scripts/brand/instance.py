"""Static Archivo instances and glyph outlines for the brand renderer.

Usage: python3 instance.py <variable.ttf> <out-dir>

Writes static TTFs that resvg can use (it cannot pick variable-font
axes) and prints JSON with the "JR" outline for the favicon, so the
SVG icon carries paths instead of depending on an installed font.
"""

import json
import sys
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

# family name -> axis location
INSTANCES = {
    "Archivo Paint": {"wdth": 62, "wght": 900},
    "Archivo Text": {"wdth": 100, "wght": 500},
    "Archivo Text Bold": {"wdth": 100, "wght": 700},
}


def rename(font, family):
    for record in font["name"].names:
        if record.nameID in (1, 16):
            record.string = family
        elif record.nameID in (2, 17):
            record.string = "Regular"
        elif record.nameID in (4, 6):
            record.string = family if record.nameID == 4 else family.replace(" ", "")


def outline(font, text):
    """SVG path for `text` in font units, y pointing down, no kerning."""
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    pen = SVGPathPen(glyph_set)
    x = 0
    for ch in text:
        name = cmap[ord(ch)]
        glyph = glyph_set[name]
        glyph.draw(TransformPen(pen, (1, 0, 0, -1, x, 0)))
        x += glyph.width
    return {"d": pen.getCommands(), "advance": x}


def main():
    src, out_dir = Path(sys.argv[1]), Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    result = {}
    for family, location in INSTANCES.items():
        font = instantiateVariableFont(TTFont(src), location)
        rename(font, family)
        path = out_dir / (family.lower().replace(" ", "-") + ".ttf")
        font.save(path)
        if family == "Archivo Paint":
            os2 = font["OS/2"]
            result["jr"] = outline(font, "JR")
            result["unitsPerEm"] = font["head"].unitsPerEm
            result["capHeight"] = os2.sCapHeight
        result.setdefault("fonts", []).append(str(path))
    json.dump(result, sys.stdout)


if __name__ == "__main__":
    main()
