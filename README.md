# 🚀 Raj Kunwar Singh - Portfolio Website

A stunning, interactive portfolio website showcasing my skills as a backend engineer with playful, engaging elements and a custom game experience.

## ✨ Features

### 🎨 Design & UX
- **Modern, Responsive Design** - Beautiful UI that works on all devices
- **Dark/Light Mode Toggle** - Seamless theme switching
- **Smooth Animations** - Framer Motion powered micro-interactions
- **Parallax Effects** - Engaging scroll-triggered animations
- **Interactive Elements** - Hover effects and motion feedback

### 🎮 Interactive Game Zone
- **"Infra Runner" Game** - Custom 2D game built with Phaser.js
- **Backend-Themed Gameplay** - Dodge latency walls, collect Redis caches
- **Score Tracking** - Local storage for high scores
- **Konami Code Easter Egg** - Hidden surprise for tech enthusiasts

### 📱 Sections
- **Hero Section** - Animated introduction with parallax effects
- **About** - Timeline of experience with animated skill bars
- **Projects** - Interactive project cards with modal details
- **Game Zone** - Custom backend-themed game
- **Resume** - Downloadable PDF and interactive HTML view
- **Contact** - Animated contact form with social links

### 🛠 Technical Features
- **React 18** with Vite for fast development
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for smooth animations
- **Phaser.js** for game development
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured data
- **Performance Optimized** - Lazy loading and code splitting

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajkunwar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎮 Game Features

### Infra Runner Game
- **Objective**: Navigate through backend infrastructure
- **Controls**: Arrow keys for movement
- **Powerups**: Blue circles (Redis caches) for score boost
- **Obstacles**: Red squares (latency walls) to avoid
- **Scoring**: Points for survival time and powerup collection
- **Easter Egg**: Konami code (↑↑↓↓←→←→BA) for surprise

### Game Elements
- **Player**: Green circle representing the engineer
- **Powerups**: Blue circles (Redis caches, performance boosts)
- **Obstacles**: Red squares (latency walls, system failures)
- **Progressive Difficulty**: Speed increases with score

## 🎨 Customization

### Colors & Theme
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Purple gradient (#d946ef to #c026d3)
- **Accent**: Orange gradient (#f97316 to #ea580c)

### Content Updates
- **Personal Info**: Update `src/components/Hero.jsx`
- **Experience**: Modify `src/components/About.jsx`
- **Projects**: Edit `src/components/Projects.jsx`
- **Contact**: Update `src/components/Contact.jsx`



## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard

### GitHub Pages
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Set source to `/docs` or `gh-pages` branch

### Netlify
1. **Connect Repository**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 🎯 Performance Optimizations

- **Code Splitting**: React.lazy() for component loading
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Intersection Observer for animations
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Service worker for offline support

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase

│   ├── Resume.jsx      # Resume section
│   ├── Contact.jsx     # Contact form
│   ├── Navbar.jsx      # Navigation
│   └── Footer.jsx      # Footer
├── context/            # React context
│   └── ThemeContext.jsx
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

### Key Technologies
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Phaser.js** - Game development framework
- **Lucide React** - Icon library

## 🎨 Design System

### Typography
- **Headings**: Inter font family
- **Code**: JetBrains Mono for technical content
- **Body**: Inter for readability

### Spacing
- **Consistent**: 4px base unit system
- **Responsive**: Mobile-first approach
- **Scalable**: Tailwind's spacing scale

### Animations
- **Micro-interactions**: Hover effects and transitions
- **Page Transitions**: Smooth section changes
- **Scroll Animations**: Intersection Observer triggers
- **Game Animations**: Phaser.js powered

## 🐛 Troubleshooting

### Common Issues

1. **Game not loading**
   - Check browser console for errors
   - Ensure Phaser.js is properly installed
   - Verify canvas element exists

2. **Animations not working**
   - Check Framer Motion installation
   - Verify intersection observer support
   - Clear browser cache

3. **Build errors**
   - Update Node.js to latest LTS
   - Clear node_modules and reinstall
   - Check for conflicting dependencies

### Performance Issues
- **Slow loading**: Optimize images and bundle size
- **Animation lag**: Reduce motion for accessibility
- **Game performance**: Lower canvas resolution if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Inspiration**: [Arthur G Portfolio](https://finethought.com.au/project/arthur-g)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Game Engine**: [Phaser.js](https://phaser.io/)

## 📞 Contact

- **Email**: raj.kunwar.singh@gmail.com
- **LinkedIn**: [Raj Kunwar Singh](https://linkedin.com/in/rajkunwarsingh)
- **GitHub**: [@rajkunwar](https://github.com/rajkunwar)

---

Made with ❤️ by Raj Kunwar Singh 