# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, smooth animations, and all the essential sections for a professional developer portfolio.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Proper meta tags and structured data
- **Performance Focused**: Optimized images and code splitting
- **Accessible**: Follows WCAG guidelines for accessibility

## 🚀 Sections

- **Hero Section**: Eye-catching introduction with profile image and social links
- **About**: Detailed professional background and interests
- **Skills**: Technology stack with categorized skill cards
- **Experience**: Professional work history with timeline
- **Education**: Academic background and achievements
- **Projects**: Showcase of featured and other projects
- **Contact**: Contact form with validation and social media links

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [Zod](https://zod.dev/) - TypeScript-first schema validation

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

1. **Update personal details** in the following components:
   - `src/components/Hero.tsx` - Name, title, description, social links
   - `src/components/About.tsx` - Professional background
   - `src/components/Experience.tsx` - Work experience
   - `src/components/Education.tsx` - Academic background
   - `src/components/Contact.tsx` - Contact information

2. **Replace placeholder images**:
   - Add your profile photo as `public/images/avatar.jpg`
   - Add project screenshots in `public/images/` directory
   - Update image references in components

3. **Update metadata** in `src/app/layout.tsx`:
   - Title, description, keywords
   - OpenGraph and Twitter card data
   - Author information

### Content

1. **Skills Section**: Modify the `skills` array in `src/components/Skills.tsx`
2. **Projects Section**: Update the `projects` array in `src/components/Projects.tsx`
3. **Social Links**: Update URLs in `src/components/Hero.tsx` and `src/components/Contact.tsx`

### Styling

- **Colors**: Modify the color scheme in `src/app/globals.css`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Animations**: Customize animations in component files using Framer Motion

## 📁 Project Structure

```
├── public/
│   ├── images/           # Image assets
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── lib/
│       └── utils.ts      # Utility functions
├── .github/
│   └── copilot-instructions.md
└── ...
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**:
   ```bash
   npm run build
   ```

2. **Connect your GitHub repository** to Vercel for automatic deployments

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [arifszn.com](https://arifszn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations from [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
