# Advance Product Search (React + Vite)

A modern, responsive product search and filter application built with React and Vite.  
Users can search, filter by brand, category, color, and price range, and view products in a visually appealing card layout.

## Features

- 🔍 **Live Search:** Instantly filter products by name.
- 🏷️ **Advanced Filters:** Filter by brand, category, color, and price range.
- ⭐ **Product Ratings:** Visual star ratings for each product.
- 🖼️ **Responsive Design:** Works great on desktop and mobile.
- 🧭 **Sidebar Toggle:** Sidebar filter menu for mobile and desktop.
- 🎨 **Custom Scroll:** Smooth scroll with optional hidden scrollbar.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
  ├── component/         # Search bar and shared components
  ├── db/                # Product data
  ├── Navigation/        # Top navigation bar
  ├── product/           # Product card grid
  ├── sidebar/           # Sidebar filters
  ├── index.css          # Tailwind and custom styles
  └── App.jsx            # Main app logic
```

## Customization

- **Add Products:** Edit `src/db/data.jsx` to add or modify products.
- **Adjust Filters:** Update filter logic in `App.jsx` and sidebar options in `Sidebar.jsx`.

## License

MIT

---

*Built with ❤️ using React and Vite.*
