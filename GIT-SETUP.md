# Git + Vercel auto-deploy (do this once)

## 1. Create the repo on GitHub
- Go to [github.com/new](https://github.com/new)
- **Repository name:** `ab-test-customer-registration`
- **Private** or **Public** (your choice)
- **Do not** add README, .gitignore, or license (you already have files)
- Click **Create repository**

## 2. In Terminal, from your project folder

```bash
cd /Users/c906621/share-project
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ab-test-customer-registration.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your GitHub username.

## 3. Connect the repo in Vercel
- [vercel.com](https://vercel.com) → **Dashboard** → your project (**ab-test-customer-registration**)
- **Settings** → **Git** → **Connect Git Repository**
- Choose **GitHub** → authorize if asked → select **ab-test-customer-registration**
- Confirm. Future pushes to `main` will deploy automatically.

Done. From now on: edit → commit → push → Vercel deploys.
