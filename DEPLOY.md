# 🚀 Deploy to Vercel - Quick Guide

Your Halle Properties website is ready to deploy! Follow these simple steps:

## Option 1: Deploy via Vercel CLI (Fastest)

### Step 1: Install Vercel CLI (if you haven't already)
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy!
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** Yes
- **Which scope?** Select your account
- **Link to existing project?** No
- **What's your project's name?** halle-properties (or your choice)
- **In which directory is your code located?** ./ (just press Enter)

That's it! Vercel will give you a live URL. 🎉

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Option 2: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Halle Properties website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Go to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect the settings!
5. Click **"Deploy"**

✅ Done! Your site will be live in ~1 minute.

---

## 🎯 Vercel Configuration

Already configured for you in `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

And `vite.config.js`:
```javascript
build: {
  rollupOptions: {
    input: {
      main: './index-react.html',
    },
  },
}
```

---

## 📦 What Gets Deployed?

- ✅ React + Tailwind version
- ✅ All Figma design sections
- ✅ Optimized production build
- ✅ Fast loading with Vite
- ✅ Responsive design

---

## 🌐 After Deployment

Your site will be available at:
- **Preview:** `https://halle-properties-xxxxx.vercel.app`
- **Production:** `https://halle-properties.vercel.app`

You can also add a custom domain in Vercel dashboard!

---

## 🔄 Update Deployment

Whenever you make changes:

```bash
# Make your changes
git add .
git commit -m "Update website"
git push

# Or if using Vercel CLI:
vercel --prod
```

Vercel automatically redeploys on every push! 🚀

---

## ⚡ Quick Deploy Now!

Run these commands:

```bash
# If you have Vercel CLI:
vercel

# First time? Install it:
npm install -g vercel
vercel login
vercel
```

---

## 🎉 Your Site Will Be Live!

After deployment, you'll get a URL like:
```
https://halle-properties.vercel.app
```

Share it with anyone! 🌍

---

Need help? Check [Vercel Documentation](https://vercel.com/docs)
