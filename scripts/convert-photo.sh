#!/bin/bash

# Photo Conversion Script for Portfolio
# This script converts HEIC to JPG and optimizes it for web

echo "🖼️  Portfolio Photo Converter"
echo "================================"
echo ""

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found!"
    echo ""
    echo "Install with:"
    echo "  brew install imagemagick"
    echo ""
    echo "Or convert manually:"
    echo "  1. Open the HEIC file in Preview"
    echo "  2. File → Export → Choose JPEG"
    echo "  3. Save as profile.jpg in public/images/"
    exit 1
fi

# Create images directory if it doesn't exist
mkdir -p ../public/images

# Source file
SOURCE="../IMG_3512 2.heic"
DEST="../public/images/profile.jpg"

if [ ! -f "$SOURCE" ]; then
    echo "❌ Source file not found: $SOURCE"
    echo ""
    echo "Make sure 'IMG_3512 2.heic' is in the Desktop/ALL folder"
    exit 1
fi

echo "📸 Converting HEIC to JPG..."

# Convert with ImageMagick
if command -v magick &> /dev/null; then
    magick convert "$SOURCE" -quality 85 -resize 800x800^ -gravity center -extent 800x800 "$DEST"
else
    convert "$SOURCE" -quality 85 -resize 800x800^ -gravity center -extent 800x800 "$DEST"
fi

if [ $? -eq 0 ]; then
    echo "✅ Success! Photo saved to: public/images/profile.jpg"
    echo ""
    echo "🎨 Next steps:"
    echo "  1. Check the converted image"
    echo "  2. Follow SETUP-GUIDE.md to integrate it"
    echo "  3. Restart dev server to see changes"
else
    echo "❌ Conversion failed"
    echo ""
    echo "Try manual conversion:"
    echo "  1. Open 'IMG_3512 2.heic' in Preview (macOS)"
    echo "  2. File → Export"
    echo "  3. Format: JPEG, Quality: Best"
    echo "  4. Save as 'profile.jpg' in portfolio/public/images/"
fi
