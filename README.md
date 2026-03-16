# 🌿 MehendiHub

**A beautifully crafted Mehendi design gallery built for Eid celebrations.**

MehendiHub is a front-end web project that lets users explore, save, and download curated henna designs across four categories — Simple, Arabic, Bridal, and Kids. Built with vanilla HTML, CSS, and JavaScript, no frameworks, no dependencies, just clean code.

---

## ✨ Live Demo

🔗 🔗 [mehendihub.netlify.app](https://mehendihub.netlify.app/)

---

## 📸 Preview

![MehendiHub Homepage](https://images.pexels.com/photos/2643556/pexels-photo-2643556.jpeg?w=800)

---

## 🚀 Features

- 🔍 **Live Search** — type anything, results filter instantly
- 🗂️ **Category Filter** — Simple, Arabic, Bridal, Kids
- ❤️ **Save Favorites** — stored in browser localStorage, persists between visits
- ⬇️ **Download Designs** — one click image download
- 👁️ **Quick View Modal** — full image popup with save and download
- 📲 **WhatsApp Share** — share any design directly to WhatsApp
- 🔗 **Copy Link** — copy design reference to clipboard
- 🎲 **Surprise Me** — random design picker with floating button
- 🌙 **Dark Mode** — full dark theme toggle, saves preference
- ⭐ **Design of the Day** — daily featured design on homepage
- 🔢 **Counter Animation** — animated stats on homepage hero
- ↑ **Back to Top** — smooth scroll button appears on scroll
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop
- 🔎 **SEO Ready** — meta tags, Open Graph, Twitter Card, sitemap, robots.txt

---

## 🗂️ Project Structure

```
mehenidihub/
│
├── index.html                  ← Homepage
├── sitemap.xml                 ← SEO sitemap
├── robots.txt                  ← Google crawler config
│
├── pages/
│   ├── gallery.html            ← Full design gallery
│   ├── favorites.html          ← Saved designs
│   ├── design-detail.html      ← Single design view
│   └── about.html              ← About & contact
│
├── css/
│   ├── variables.css           ← Design system (colors, fonts, spacing)
│   ├── reset.css               ← Browser normalization
│   ├── animations.css          ← Keyframe animations
│   ├── layout.css              ← Navbar, footer, page wrapper
│   ├── components.css          ← Buttons, cards, badges, modals
│   ├── home.css                ← Homepage-specific styles
│   ├── gallery.css             ← Gallery page styles
│   ├── detail.css              ← Design detail page
│   ├── favorites.css           ← Favorites page
│   └── dark-mode.css           ← Dark theme overrides
│
├── js/
│   ├── data.js                 ← All 42 design entries (id, name, category, image)
│   ├── app.js                  ← Homepage logic
│   ├── gallery.js              ← Filter, search, quick view, share
│   ├── darkmode.js             ← Dark/light mode toggle
│   ├── favorites.js            ← Favorites page logic
│   ├── download.js             ← Download handler
│   └── share.js                ← WhatsApp and copy link
│
└── images/
    └── designs/
        ├── simple/
        ├── arabic/
        ├── bridal/
        └── kids/
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES5 compatible) |
| Storage | Browser localStorage |
| Fonts | Google Fonts — Playfair Display + Poppins |
| Images | Pexels, WedMeGood (free use) |
| Hosting | Netlify |

> No frameworks. No build tools. No npm. Just open `index.html` and it works.

---

## ⚙️ Run Locally

```bash
# Clone the repository
git clone https://github.com/Mozahid-AIUB/mehenidihub.git

# Open the project
cd mehenidihub

# Open index.html in your browser
# OR use VS Code Live Server extension
```

No installation needed. No `npm install`. Just open the file.

---

## 🎨 Design System

The entire visual identity is controlled through `css/variables.css`.

```css
--color-primary:       #b5451b;   /* Deep henna red */
--color-primary-dark:  #7a2b10;   /* Navbar, footer */
--color-gold:          #f5c518;   /* Buttons, accents */
--bg-page:             #fdf6ef;   /* Warm cream background */
--font-heading:        'Playfair Display', serif;
--font-body:           'Poppins', sans-serif;
```

Want to change the entire color scheme? Edit 3 lines in `variables.css`.

---

## 📦 Adding New Designs

Open `js/data.js` and add a new entry inside the `designs` array:

```js
{
  id: "arabic-14",
  name: "Golden Crescent",
  category: "arabic",        // simple | arabic | bridal | kids
  featured: false,           // true = shows on homepage
  image: "https://your-image-url.jpg"
}
```

That's it. The design will automatically appear in the gallery and all filters.

---

## 🌐 SEO

This project is built with search visibility in mind:

- ✅ Semantic HTML structure
- ✅ Unique `<title>` and `<meta description>` on every page
- ✅ Open Graph tags for WhatsApp and Facebook previews
- ✅ Twitter Card meta tags
- ✅ `sitemap.xml` for Google indexing
- ✅ `robots.txt` configured for crawling

After deploying, submit your sitemap at:
**[Google Search Console](https://search.google.com/search-console)**

---

## 📁 Design Decisions

**Why no framework?**
This project was built as a portfolio piece to demonstrate core web fundamentals — DOM manipulation, event handling, localStorage, responsive CSS — without hiding them behind abstractions.

**Why `var` instead of `const/let`?**
Intentional choice for maximum browser compatibility and beginner readability. The codebase is written to be understandable by someone learning JavaScript.

**Why separate CSS files?**
Each file has a single responsibility. `variables.css` owns the design tokens, `components.css` owns the UI pieces, `home.css` owns only the homepage. This makes the codebase easy to navigate and modify.

---

## 🙋 About the Developer

Built by **Mozahid** — B.Sc. CSE student at AIUB (American International University-Bangladesh).

Focused on software engineering, web development, and building real projects that go beyond coursework.

- 🐙 GitHub: [@Mozahid-AIUB](https://github.com/Mozahid-AIUB)
- 🌐 Portfolio: *coming soon*

---

## 📄 License

This project is open source and free to use for personal and educational purposes.
Images sourced from Pexels and WedMeGood under their respective free-use licenses.
---
*Built with ❤️ for Eid 2026*