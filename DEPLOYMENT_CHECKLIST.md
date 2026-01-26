# Deployment Checklist

Use this checklist to ensure everything is ready for deployment.

## Pre-Deployment

- [ ] Code is working locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] All images are displaying correctly
- [ ] All links work correctly
- [ ] Contact form is tested (or EmailJS is configured)
- [ ] No console errors in browser

## GitHub Repository Setup

- [ ] Repository exists on GitHub
- [ ] Repository name is `SafeRouteWebsite` (or base path is updated)
- [ ] Repository is **Public** (required for free GitHub Pages)
- [ ] Code is pushed to `main` branch

## GitHub Pages Configuration

- [ ] GitHub Pages is enabled in repository Settings
- [ ] Source is set to `gh-pages` branch
- [ ] GitHub Actions has write permissions (Settings → Actions → General)

## GitHub Actions

- [ ] `.github/workflows/deploy.yml` exists
- [ ] Workflow runs successfully (check Actions tab)
- [ ] No errors in workflow logs

## EmailJS (Optional - for contact form)

- [ ] EmailJS account created
- [ ] Service, template, and API key obtained
- [ ] GitHub Secrets added (if using):
  - [ ] `VITE_EMAILJS_SERVICE_ID`
  - [ ] `VITE_EMAILJS_TEMPLATE_ID`
  - [ ] `VITE_EMAILJS_PUBLIC_KEY`

## Post-Deployment Verification

- [ ] Website is accessible at `https://YOUR_USERNAME.github.io/SafeRouteWebsite/`
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works (Home, Contact)
- [ ] Contact form works (or shows appropriate message)
- [ ] Mobile responsive design works
- [ ] Links to Google Play work

## Files to Verify

- [ ] `vite.config.js` has correct `base` path
- [ ] `src/App.jsx` has correct `basename`
- [ ] `public/404.html` exists and has correct base path
- [ ] `public/.nojekyll` exists
- [ ] All images in `public/` folder

---

**Once all items are checked, your website should be live!**








