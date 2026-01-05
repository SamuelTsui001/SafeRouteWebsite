# Quick Deployment Steps

## 🚀 Fast Track to Deploy

### 1. Push to GitHub (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - SafeRoute website"
git remote add origin https://github.com/YOUR_USERNAME/SafeRouteWebsite.git
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your GitHub username!

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **GitHub Actions** (this uses the workflow to deploy)
4. Click **Save**

### 3. Enable GitHub Actions

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
3. Click **Save**

### 4. Trigger Deployment

The workflow runs automatically when you push. To trigger it now:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

### 5. Check Deployment

1. Go to the **Actions** tab in your repository
2. Wait for the workflow to complete (green checkmark ✅)
3. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/SafeRouteWebsite/
   ```

---

## ⚠️ Important Notes

- **Repository name must be `SafeRouteWebsite`** (or update base path in `vite.config.js`)
- **Repository must be Public** for free GitHub Pages
- First deployment may take 5-10 minutes
- Site updates automatically on every push to `main`

---

## 📧 EmailJS Setup (Optional)

If you want the contact form to work:

1. Follow instructions in `EMAILJS_SETUP.md`
2. Add secrets in GitHub: **Settings** → **Secrets and variables** → **Actions**
3. Add: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`

---

## ✅ Verify Everything Works

- [ ] Website loads at the URL
- [ ] Images display correctly
- [ ] Navigation works
- [ ] Contact page loads
- [ ] Mobile responsive

**That's it! Your website is live! 🎉**

