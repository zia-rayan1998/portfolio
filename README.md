# Portfolio Website

A modern, dark-themed developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Loading Animation** - Cool animated loading screen with typing effect
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **Dark Bluish Theme** - Sleek dark blue/black color palette
- **Responsive Design** - Works perfectly on all devices
- **Terminal Aesthetic** - Code-inspired design elements
- **Modern UI** - Glass morphism, gradients, and glow effects

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build Tool
- **Lucide Icons** - Icon Library
- **Shadcn/UI** - Component Library

## 📁 Project Structure

```
src/
├── assets/           # Static assets (images, icons)
├── components/
│   ├── ui/           # Reusable UI components (shadcn)
│   ├── layout/       # Layout components (Navbar, Footer)
│   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   └── LoadingScreen.tsx
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles & design system
```

## 🎨 Design System

### Colors
- **Background**: Dark bluish-black (`hsl(222, 47%, 5%)`)
- **Primary**: Bright blue (`hsl(217, 91%, 60%)`)
- **Accent**: Cyan highlights
- **Terminal Green**: For code aesthetics

### Typography
- **Headings**: Space Grotesk
- **Code**: JetBrains Mono

### Effects
- Glow effects on interactive elements
- Glass morphism cards
- Gradient text
- Smooth hover transitions

## 🚀 Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Customization

### Personal Information
Update your details in the respective section components:
- `src/components/sections/Hero.tsx` - Name, title, intro
- `src/components/sections/About.tsx` - Bio and skills
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Experience.tsx` - Work history
- `src/components/sections/Contact.tsx` - Contact info

### Colors
Modify the CSS variables in `src/index.css` to change the color scheme.

## 📄 License

MIT License - Feel free to use this template for your own portfolio!
