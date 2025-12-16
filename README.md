# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/).

## 🚀 Features

- **Modern Design** - Clean, minimal aesthetic with smooth animations
- **Responsive** - Fully responsive design that works on all devices
- **Dark Theme** - Beautiful dark theme with accent colors
- **Smooth Animations** - Powered by Framer Motion
- **Blog Section** - Integrated blog functionality
- **SEO Optimized** - Meta tags and semantic HTML

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **VS Code** (recommended) - [Download](https://code.visualstudio.com/)

## 🛠️ Local Setup

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Step 4: Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Step 5: Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Hero, About, Skills, etc.
│   │   └── ui/          # Reusable UI components (shadcn/ui)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   ├── App.css          # Global styles
│   ├── index.css        # Tailwind imports & CSS variables
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## 🎨 Customization

### Personal Information

Update these files with your information:

1. **src/components/sections/Hero.tsx** - Name, title, intro text
2. **src/components/sections/About.tsx** - Bio and background
3. **src/components/sections/Experience.tsx** - Work history
4. **src/components/sections/Projects.tsx** - Your projects
5. **src/components/sections/Skills.tsx** - Technical skills
6. **src/components/sections/Contact.tsx** - Email and social links
7. **src/components/layout/Footer.tsx** - Footer links

### Social Links

Update social media links in:
- `src/components/sections/Contact.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`

### Colors & Theme

Modify the design system in:
- `src/index.css` - CSS variables for colors
- `tailwind.config.ts` - Tailwind theme configuration

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/pages/Index.tsx`
3. Add navigation link in `src/components/layout/Navbar.tsx`

## 🔧 VS Code Extensions (Recommended)

Install these extensions for the best development experience:

- **ES7+ React/Redux/React-Native snippets** - React snippets
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Prettier - Code formatter** - Code formatting
- **ESLint** - Linting
- **Auto Rename Tag** - HTML/JSX tag renaming
- **Path Intellisense** - Path autocomplete

### VS Code Settings

Create `.vscode/settings.json` in your project:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## 🚢 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run build && npm run deploy`

## ⚠️ Potential Issues & Solutions

### Common Issues

#### 1. Port Already in Use
```bash
# Error: Port 5173 is already in use
# Solution: Kill the process or use a different port
npm run dev -- --port 3000
```

#### 2. Node Version Mismatch
```bash
# Use nvm to switch Node versions
nvm use 18
```

#### 3. Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

#### 4. TypeScript Errors
```bash
# Check for type errors
npm run build
```

#### 5. Tailwind Classes Not Working
- Ensure the class is in `content` paths in `tailwind.config.ts`
- Restart the dev server after config changes

### Performance Tips

1. **Optimize Images** - Use WebP format, compress images
2. **Lazy Loading** - Images are lazy loaded by default
3. **Code Splitting** - React Router handles this automatically
4. **Bundle Analysis** - Run `npm run build` to see bundle size

## 📝 Future Improvements

Consider adding:

- [ ] Blog CMS integration (Contentful, Sanity, MDX)
- [ ] Contact form with email service (Formspree, EmailJS)
- [ ] Analytics (Google Analytics, Plausible)
- [ ] PWA support
- [ ] Internationalization (i18n)
- [ ] Light/Dark mode toggle
- [ ] Resume/CV download
- [ ] Project filtering/search

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using [Lovable](https://lovable.dev)
