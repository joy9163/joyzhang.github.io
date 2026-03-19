# Deployment Guide - Jiayin Zhang Academic Website

This guide provides comprehensive instructions for deploying the personal academic website to various hosting platforms.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the optimal platform for Next.js applications with zero-configuration deployment.

**Steps:**
1. Push your code to a GitHub repository
2. Visit [vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure everything
5. Deploy with one click

**Benefits:**
- Automatic SSL certificates
- Global CDN
- Automatic deployments from Git
- Custom domains
- Environment variables management

### Option 2: Netlify

Netlify provides excellent performance and developer experience.

**Steps:**
1. Build the project locally: `npm run build`
2. Upload the `out` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

**Netlify Configuration:**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: AWS Amplify

AWS Amplify offers enterprise-grade hosting with AWS integration.

**Steps:**
1. Connect your repository to AWS Amplify Console
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `out`
3. Deploy and configure custom domain

## 🔧 Local Development Setup

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation Steps

1. **Clone and Install Dependencies**
```bash
git clone <your-repository>
cd jiayin-zhang-website
npm install
```

2. **Environment Configuration**
Create `.env.local` file for environment variables:
```env
# Optional: Add any environment-specific variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

3. **Development Server**
```bash
npm run dev
# Website will be available at http://localhost:3000
```

4. **Production Build Test**
```bash
npm run build
npm run start
# Test production build locally
```

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Purchase a Domain**
   - Recommended: Namecheap, Google Domains, or Cloudflare
   - Academic domains: `.edu`, `.ac.cn`, or personal domain

2. **DNS Configuration**
   - Point your domain to the hosting provider's nameservers
   - Add CNAME record if using subdomain
   - Add A records for root domain

3. **SSL Certificate**
   - Most platforms provide automatic SSL
   - Ensure HTTPS is enforced

### Academic Domain Suggestions

- `jiayinzhang-research.com`
- `zhangjiayin.ac.cn` (if applicable)
- `atmospheric-research.com`
- Personal name domain: `jiayinzhang.com`

## 📊 Performance Optimization

### Before Deployment

1. **Image Optimization**
   - Use Next.js Image component
   - Optimize image sizes
   - Implement lazy loading

2. **Code Splitting**
   - Next.js automatically handles code splitting
   - Verify bundle size with `npm run build`

3. **SEO Optimization**
   - Update metadata in `app/layout.tsx`
   - Add structured data if needed
   - Configure robots.txt and sitemap

### Post-Deployment Checks

1. **Lighthouse Audit**
   - Run Google Lighthouse audit
   - Target scores: Performance > 90, Accessibility > 95

2. **Mobile Responsiveness**
   - Test on various screen sizes
   - Verify touch interactions

3. **Browser Compatibility**
   - Test on Chrome, Firefox, Safari, Edge
   - Check JavaScript functionality

## 🔒 Security Considerations

### Essential Security Measures

1. **Environment Variables**
   - Never commit sensitive data to version control
   - Use platform-specific environment variable management

2. **Content Security Policy**
   - Implement CSP headers
   - Restrict external resource loading

3. **HTTPS Enforcement**
   - Ensure all traffic uses HTTPS
   - Configure HSTS headers

### Academic Website Specifics

- No user authentication needed
- Minimal external dependencies
- Regular dependency updates

## 📈 Analytics and Monitoring

### Google Analytics Setup

1. **Create GA4 Property**
   - Set up Google Analytics 4
   - Obtain measurement ID

2. **Integration**
   - Add to `app/layout.tsx`
   - Implement page view tracking

### Performance Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Web Vitals**: Core Web Vitals tracking
- **Uptime Monitoring**: Service like Pingdom or UptimeRobot

## 🛠️ Maintenance and Updates

### Regular Maintenance Tasks

1. **Dependency Updates**
```bash
npm outdated
npm update
# Test thoroughly after updates
```

2. **Content Updates**
   - Keep publication list current
   - Update research projects
   - Maintain CV information

3. **Backup Strategy**
   - Regular repository backups
   - Database backups if applicable
   - Content version control

### Update Schedule

- **Weekly**: Check for dependency updates
- **Monthly**: Content review and updates
- **Quarterly**: Performance audit
- **Annually**: Design refresh consideration

## 🚨 Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs for specific errors

2. **Routing Issues**
   - Verify `next.config.js` settings
   - Check for proper 404 handling
   - Test all internal links

3. **Performance Issues**
   - Optimize images and assets
   - Implement caching strategies
   - Review third-party scripts

### Platform-Specific Issues

**Vercel:**
- Check build output directory
- Verify environment variables
- Review deployment logs

**Netlify:**
- Confirm `_redirects` file
- Check build command
- Verify plugin configuration

## 📞 Support Resources

### Documentation
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

### Community Support
- Next.js GitHub Discussions
- Vercel Community
- Netlify Community Forums

## 🎯 Deployment Checklist

### Pre-Deployment
- [ ] Code is pushed to version control
- [ ] All tests pass locally
- [ ] Production build succeeds
- [ ] Environment variables configured
- [ ] Custom domain purchased and configured

### Post-Deployment
- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Mobile responsiveness verified
- [ ] SSL certificate active
- [ ] Analytics tracking working
- [ ] Performance metrics acceptable

### Ongoing Maintenance
- [ ] Regular content updates scheduled
- [ ] Backup strategy in place
- [ ] Monitoring alerts configured
- [ ] Security updates automated

---

**Deployment Status**: Ready for Production  
**Last Updated**: March 2024  
**Maintainer**: Jiayin Zhang