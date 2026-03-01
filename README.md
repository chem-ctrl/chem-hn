# org.search

org.search is an Organic & Ayurvedic product transparency demo. It showcases ingredient-level information, Ayurvedic dosha guidance, and product discovery features.

## Features
- Browse categories: Hair Care, Skincare, Herbal, Ayurveda, Wellness Tools, Cosmetics
- Ingredient database with Ayurvedic benefits, side effects, and dosage guidance
- Product search, filtering, and ingredient details modal

## Run locally
Start a simple HTTP server from the project root and open http://localhost:8000:

```bash
# Python 3
python -m http.server 8000

# Or using Node.js (if http-server installed)
# npx http-server -p 8000
```

## Files
- `index.html` — main page (site title and header updated to `org.search`)
- `style.css` — styling
- `script.js` — product data and UI logic

## Notes
- Two Ayurvedic oils are included: `Nalpamarathi Thailam` and `Kumkumadi Thailam`.
- Product images are emoji placeholders. To use real images, add files to an `assets/` folder and update `script.js` product `image` fields.

If you want, I can add an `assets/` folder with sample SVG/PNG images and wire them into the UI.
