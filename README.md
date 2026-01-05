# SafeRoute Website

A modern, animated website for the SafeRoute school bus tracking mobile app.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Two main pages: Landing page and Contact page
- 🚀 Built with Vite, React, and Tailwind CSS
- ✨ Smooth animations powered by Framer Motion
- 📧 Contact form integration
- 🎯 Optimized for GitHub Pages deployment

## Tech Stack

- **Vite** - Build tool and dev server
- **React** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Deploy to GitHub Pages

**Quick Start:**
1. Push your code to GitHub (repository must be named `SafeRouteWebsite`)
2. Enable GitHub Pages in repository Settings → Pages
3. Set source to `gh-pages` branch
4. GitHub Actions will automatically deploy on push to `main`

**Detailed instructions:** See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

**Your website will be available at:**
```
https://YOUR_USERNAME.github.io/SafeRouteWebsite/
```

## Project Structure

```
SafeRouteWebsite/
├── public/              # Static assets
│   ├── Screenshots/     # App screenshots
│   └── SafeRouteTransparent512.svg
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── AppShowcase.jsx
│   │   └── ContactForm.jsx
│   ├── pages/          # Page components
│   │   ├── LandingPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors

The primary color (orange) is defined in `tailwind.config.js`. You can modify it there:

```js
colors: {
  primary: {
    DEFAULT: '#FF9100',
    dark: '#E68200',
    light: '#FFA533',
  },
}
```

### Content

- Update app information in the component files
- Modify contact information in `src/components/Footer.jsx` and `src/pages/ContactPage.jsx`
- Update Google Play link in multiple components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 SafeRoute. All rights reserved.

