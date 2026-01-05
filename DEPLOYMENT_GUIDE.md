# SafeRoute Website - Deployment Guide

This guide will walk you through deploying the SafeRoute website to GitHub Pages.

## Prerequisites

- ✅ GitHub account
- ✅ Repository named `SafeRouteWebsite` (or update the base path in `vite.config.js`)
- ✅ Code pushed to GitHub

## Step-by-Step Deployment

### Option 1: Automatic Deployment (Recommended)

This uses GitHub Actions to automatically deploy when you push to the `main` branch.

#### Step 1: Push Your Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SafeRoute website"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/new)
   - Repository name: `SafeRouteWebsite` (must match exactly)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Connect and Push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/SafeRouteWebsite.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

#### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **GitHub Actions** (this uses the workflow to deploy)
5. Click **Save**

**Note:** The workflow will automatically create and deploy to the `gh-pages` branch.

#### Step 3: Enable GitHub Actions

1. In your repository, go to **Settings**
2. Click **Actions** → **General**
3. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

#### Step 4: Trigger Deployment

The GitHub Actions workflow will automatically run when you push to `main`. To trigger it:

1. Make a small change (or just push if you haven't already):
   ```bash
   git add .
   git commit -m "Trigger deployment"
   git push
   ```

2. Check the deployment:
   - Go to **Actions** tab in your repository
   - You should see "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (green checkmark)

#### Step 5: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/SafeRouteWebsite/
```

**Note:** It may take a few minutes for the site to be available after the first deployment.

---

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages** (same as Step 2 above)

---

## Important Configuration

### Repository Name

The website is configured for a repository named `SafeRouteWebsite`. If your repository has a different name:

1. Update `vite.config.js`:
   ```js
   base: '/YOUR_REPO_NAME/',
   ```

2. Update `src/App.jsx`:
   ```js
   <BrowserRouter basename="/YOUR_REPO_NAME">
   ```

3. Update `public/404.html` (line 12):
   ```js
   var basePath = '/YOUR_REPO_NAME';
   ```

### EmailJS Configuration (Optional)

If you want the contact form to work on the live site:

1. Set up EmailJS (see `EMAILJS_SETUP.md`)

2. Add environment variables to GitHub Actions:
   - Go to repository **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Add these secrets:
     - `VITE_EMAILJS_SERVICE_ID` = your service ID
     - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
     - `VITE_EMAILJS_PUBLIC_KEY` = your public key

3. Update `.github/workflows/deploy.yml` to use these secrets (see below)

---

## Troubleshooting

### Images Not Showing

- ✅ Make sure images are in the `public/` folder
- ✅ Check that paths use `import.meta.env.BASE_URL`
- ✅ Verify the base path in `vite.config.js` matches your repo name

### 404 Errors on Navigation

- ✅ The `public/404.html` file should handle SPA routing
- ✅ Make sure GitHub Pages is serving from the `gh-pages` branch

### Build Fails

- ✅ Check GitHub Actions logs in the **Actions** tab
- ✅ Ensure `package.json` has all dependencies
- ✅ Verify Node.js version (should be 18+)

### Website Not Updating

- ✅ Clear browser cache
- ✅ Wait a few minutes (GitHub Pages can take time to update)
- ✅ Check the `gh-pages` branch has the latest files

---

## Updating Your Website

After making changes:

1. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

2. **GitHub Actions will automatically deploy** (if using Option 1)

3. **Wait 2-5 minutes** for the site to update

---

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` folder with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. Update GitHub Pages settings:
   - Go to repository **Settings** → **Pages**
   - Enter your custom domain

---

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/pages)
- Review GitHub Actions logs in the **Actions** tab
- Verify all configuration files match your repository name

---

**Your website URL will be:**
`https://YOUR_USERNAME.github.io/SafeRouteWebsite/`

Replace `YOUR_USERNAME` with your actual GitHub username!

