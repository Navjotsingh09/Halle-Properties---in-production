# Halle Properties - React + Tailwind Implementation

This directory contains both implementations of the Halle Properties website:

## 📁 Project Structure

### HTML/CSS Version
- `index.html` - Standalone HTML website
- `styles.css` - Custom CSS styling
- `script.js` - Vanilla JavaScript

### React + Tailwind Version

- `src/App.jsx` - React component with Tailwind CSS
- `src/main.jsx` - React entry point
- `src/index.css` - Tailwind directives
- `index-react.html` - React app HTML template
- `tailwind.config.js` - Tailwind configuration
- `vite.config.js` - Vite bundler configuration
- `package.json` - Node dependencies

## 🚀 Getting Started with React Version

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Tailwind Custom Colors

The Figma design colors are configured in `tailwind.config.js`:

```javascript
colors: {
  'Brand-Colours-Blue': '#82c7be',
  'Brand-Colours-Black': '#2a363a',
  'Brand-Colours-White': '#ffffff',
  'Brand-Colours-Grey': '#dadddc',
}
```

### Fonts

- **Poppins**: Primary font (400, 500, 600, 700)
- **Plus Jakarta Sans**: Secondary font (400, 600)

Both loaded from Google Fonts in `src/index.css`

## 📦 Technologies

### React Version
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Automatic vendor prefixes

## 🔧 Configuration Files

### `tailwind.config.js`
Configures Tailwind with custom colors and fonts from the Figma design.

### `vite.config.js`
Configures Vite for React development.

### `postcss.config.js`
Enables Tailwind CSS and Autoprefixer.

## 🌐 Which Version to Use?

### HTML/CSS Version (`index.html`)
**Use if you:**
- Want a simple, standalone website
- Don't need a build process
- Prefer vanilla JavaScript
- Need to deploy quickly without dependencies

**To use:**
- Open `index.html` directly in a browser
- Or use a simple server: `python -m http.server 8000`

### React + Tailwind Version (`src/App.jsx`)
**Use if you:**
- Want a modern React application
- Prefer component-based architecture
- Need to scale the application
- Want Tailwind CSS utility classes
- Plan to add more interactivity

**To use:**
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`

## 📝 Key Differences

| Feature | HTML/CSS | React + Tailwind |
|---------|----------|------------------|
| Setup | None | `npm install` required |
| Dev Server | Any HTTP server | `npm run dev` |
| Build Process | None | Vite bundler |
| CSS Approach | Custom CSS classes | Tailwind utilities |
| JavaScript | Vanilla JS | React components |
| File Size | Larger CSS | Purged Tailwind |
| Browser Compat | All browsers | Modern browsers |

## 🎯 Sections Implemented

Both versions include:
- ✅ Navigation Bar
- ✅ Hero Section with Search
- ✅ Featured Properties
- ✅ About Us
- ✅ Services
- ✅ Testimonials
- ✅ CTA Section
- ✅ Blog Section
- ✅ FAQ Section
- ✅ Footer

## 🖼️ Images

All images use Figma CDN URLs (valid for 7 days). See `ASSETS.md` for:
- Full list of image URLs
- Download instructions
- Optimization guidelines

## 📱 Responsive Design

The React + Tailwind version uses Tailwind's responsive utilities. The HTML/CSS version has custom media queries.

Both support:
- Desktop (1440px+)
- Laptop (1024px-1440px)
- Tablet (768px-1024px)
- Mobile (<768px)

## 🐛 Development Tips

### Hot Reload
Vite provides instant hot module replacement. Changes appear immediately in the browser.

### Tailwind IntelliSense
Install the "Tailwind CSS IntelliSense" VS Code extension for autocompletion.

### Component Structure
The App.jsx is currently one large component. Consider splitting into:
- `components/Navigation.jsx`
- `components/Hero.jsx`
- `components/FeaturedProperties.jsx`
- etc.

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

Both implementations are functional. Choose based on your project requirements and team preferences.

---

**Need help?** Check the original `README.md` for general project information.
