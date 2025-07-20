# 🚀 Quick Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## 🏃‍♂️ Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎮 Game Controls

- **Arrow Keys**: Move the player
- **Pause Button**: Pause/resume game
- **Konami Code**: ↑↑↓↓←→←→BA (try it!)

## 🎨 Customization

### Update Personal Information
- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Modify `src/components/About.jsx`
- **Projects**: Update `src/components/Projects.jsx`
- **Contact**: Change `src/components/Contact.jsx`

### Theme Colors
Edit `tailwind.config.js` to change the color scheme:
- Primary: Blue gradient
- Secondary: Purple gradient
- Accent: Orange gradient



## 🚀 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Option 2: Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Option 3: GitHub Pages
```bash
npm run build
# Copy 'dist' contents to gh-pages branch
```

### Option 4: Use the deployment script
```bash
./deploy.sh
```

## 🐛 Troubleshooting

### Common Issues

1. **Game not loading**
   - Check browser console for errors
   - Ensure all dependencies are installed
   - Try refreshing the page

2. **Animations not working**
   - Check if JavaScript is enabled
   - Clear browser cache
   - Update to latest browser version

3. **Build errors**
   - Update Node.js to latest LTS
   - Clear node_modules and reinstall
   - Check for conflicting dependencies

### Performance Tips
- Use a modern browser for best performance
- Disable browser extensions if experiencing issues
- Check network tab for failed requests

## 📞 Support

- **Email**: raj.kunwar.singh@gmail.com
- **GitHub**: [@rajkunwar](https://github.com/rajkunwar)
- **LinkedIn**: [Raj Kunwar Singh](https://linkedin.com/in/rajkunwarsingh)

---

**Happy coding! 🎉** 