# IKAYA (GitHub Pages-ready)

This zip contains a **static multi-page demo website** for IKAYA Jewellery using Unsplash placeholder images.
Replace Unsplash links with your own uploaded images later if you prefer.

## Files
- `index.html` - Home with hero and featured items
- `shop.html` - Shop page (Rings / Necklaces / Earrings) — 12 demo products
- `about.html` - About + Instagram link
- `contact.html` - Contact form + WhatsApp + email
- `style.css` - Shared styles
- `js/main.js` - Simple hero slideshow
- `images/` - empty folder for your product photos (optional)

## How to deploy to GitHub Pages
1. Create a new repository on GitHub (e.g. `ikaya-jewellery`).
2. Upload all files from this ZIP to the **root** of the repository.
3. In GitHub → Settings → Pages → Source: `main` branch, root `/` → Save.
4. Wait ~1 minute and visit `https://<your-username>.github.io/<repo-name>/`

## Replacing placeholder images with your own
- Upload your photos into `images/rings/`, `images/necklaces/`, `images/earrings/`, `images/hero/`.
- Edit the HTML files and change `<img src="https://source.unsplash.com/...">` to `images/rings/yourfile.jpg` etc.
- Commit and push; GitHub Pages will serve these images automatically.

## Notes
- WhatsApp number is set to +91 8851521729.
- Contact form uses Formspree placeholder. Replace `your-form-id` with your Formspree endpoint if you want form submissions via email.
