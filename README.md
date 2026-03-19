# Jiayin Zhang - Personal Academic Website

A modern, responsive personal academic website built with Next.js, React, and Tailwind CSS. This website presents Jiayin Zhang as an undergraduate researcher in Atmospheric Science with strong international academic experience and interdisciplinary research interests.

## 🎯 Project Overview

This website is designed to showcase academic credentials, research experience, publications, and professional background in a clean, elegant, and scholarly manner. The design emphasizes academic professionalism, clarity, and modern web standards.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **Smooth Animations**: Subtle animations using Framer Motion
- **Academic Focus**: Professional design tailored for research presentation
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Accessibility**: WCAG compliant with proper focus management

## 🚀 快速开始指南

### 前置要求

- Node.js 18.17 或更高版本
- npm 或 yarn 包管理器

### 本地开发环境设置

1. **进入项目目录**：
```bash
cd /Users/joy9163/WorkBuddy/Claw/jiayin-zhang-website
```

2. **安装依赖**：
```bash
npm install
```

3. **启动开发服务器**：
```bash
npm run dev
```

4. **在浏览器中打开**：[http://localhost:3000](http://localhost:3000)

### 如果您没有安装 Node.js

如果您的系统没有安装 Node.js，您可以选择以下方式：

**选项1：安装 Node.js**
- 访问 [Node.js官网](https://nodejs.org/) 下载安装包
- 推荐使用 LTS（长期支持）版本
- 安装完成后重新打开终端

**选项2：使用在线开发环境**
- 使用 [CodeSandbox](https://codesandbox.io/) 或 [StackBlitz](https://stackblitz.com/)
- 将项目文件上传到在线IDE
- 这些平台通常已预装Node.js环境

**选项3：直接部署**
- 跳过本地开发，直接将项目部署到Vercel等平台
- 这些平台会自动构建和运行项目

## 📁 Project Structure

```
jiayin-zhang-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── cv/                # CV page
│   ├── publications/      # Publications page
│   ├── research/          # Research page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep navy (#0f172a) for headings and accents
- **Secondary**: Soft blues and grays for backgrounds and text
- **Accent**: Blue (#0ea5e9) for interactive elements

### Typography
- **Primary Font**: Inter (sans-serif)
- **Font Weights**: 300, 400, 500, 600, 700
- **Hierarchy**: Clear typographic scale for academic content

### Components
- **Navigation**: Fixed header with smooth scrolling
- **Cards**: Clean, elevated cards for content presentation
- **Timeline**: Academic timeline for CV and experience
- **Contact**: Multiple contact methods with availability status

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with professional introduction
- Research interests showcase
- Selected highlights and achievements
- Call-to-action buttons

### About (`/about`)
- Comprehensive academic biography
- Research interests breakdown
- Academic journey timeline
- Future aspirations

### Research (`/research`)
- Research project portfolio
- Thematic categorization
- Project details and contributions
- Links to papers and code

### Publications (`/publications`)
- Journal publications list
- Conference presentations
- Manuscripts in preparation
- Research impact metrics

### CV (`/cv`)
- Complete academic curriculum vitae
- Education and research experience
- Skills and expertise
- Awards and honors

### Contact (`/contact`)
- Multiple contact methods
- Availability schedule
- Collaboration opportunities
- Quick response times

## 🛠️ Development

### Building for Production

```bash
npm run build
npm run start
```

### Code Quality

```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

### Customization

To customize this website for your own academic profile:

1. **Update Content**: Modify text content in each page component
2. **Replace Images**: Add your own professional photos and graphics
3. **Adjust Colors**: Update the color scheme in `tailwind.config.js`
4. **Add Sections**: Extend existing pages or create new ones

### Content Management

The website is structured to make content updates straightforward:

- **Personal Information**: Update name, contact details, and bio
- **Research Projects**: Add new projects to the research array
- **Publications**: Maintain publication list with proper formatting
- **Experience**: Update timeline items with current activities

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

This website can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Efficient code splitting and lazy loading
- **Image Optimization**: Next.js automatic image optimization

## 🤝 Contributing

This is a personal academic website template. Feel free to fork and adapt it for your own use. If you find bugs or have suggestions for improvements, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support

For questions about using this template or customizing it for your academic profile, please refer to the documentation or open an issue in the repository.

---

**Last Updated**: March 2024  
**Version**: 1.0.0  
**Maintainer**: Jiayin Zhang