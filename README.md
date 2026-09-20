# PRAJE CLOSET — Fashion E-Commerce Demo

A premium, editorial-style demo storefront for a fictional women's fashion
brand, built as a client prototype.

## Stack
- React 18 + Vite
- React Router v6 (client-side routing)
- Plain CSS (CSS variables for design tokens, no Tailwind)
- react-icons
- Cart state via React Context + localStorage

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   Reusable UI: Navbar, Footer, ProductCard, CategoryCard, etc.
  pages/        Home, Collection, ProductDetails, Cart, About, Contact
  context/      CartContext (global cart state, persisted to localStorage)
  data/         Mock product catalogue
```

## Notes
- This is a front-end-only demo: there is no backend or payment gateway.
  "Buy Now" / checkout leads to a simple demo confirmation state.
- Product photography uses placeholder images (picsum.photos) standing in
  for real editorial photography — swap the URLs in `src/data/products.js`
  and component files for real brand assets.
