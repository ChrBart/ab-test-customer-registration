# [A/B-test] Enable customer registration during the review and booking process

A simple Hello World page you can host online and share with stakeholders. **It runs on the internet, not on your computer**—so the link works 24/7 even when your device is off.

---

## Get a public link (hosted, always on)

You need to put the site on a **host** (Vercel or Netlify). Both are free and keep the page online without you running anything.

### Option 1: Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign up (e.g. with GitHub or email).
2. Install the Vercel app for GitHub if you use GitHub: [vercel.com/new](https://vercel.com/new).
3. **Import** this project:
   - Push this folder to a GitHub repo, then in Vercel click **Add New…** → **Project** and import that repo, **or**
   - Drag and drop this folder onto [vercel.com/new](https://vercel.com/new) (no GitHub needed).
4. Click **Deploy**. Vercel will run `npm run build` and host the result.
5. You get a URL like `https://your-project.vercel.app`. **Share that link**—it stays live even when your laptop is closed.

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign up.
2. In Terminal, in this folder, run:
   ```bash
   npm run build
   ```
3. In Netlify: **Sites** → **Add new site** → **Deploy manually**.
4. Drag the **dist** folder (created by the build) into the drop zone.
5. Netlify gives you a URL like `https://something.netlify.app`. Share it—it’s always on.

---

## Test locally first (optional)

To see the page on your machine before deploying:

```bash
npm install
npm run dev
```

A browser tab opens. This is only on your network; to share with others, use one of the options above.

---

## Edit the page

- **Text:** `src/index.html`
- **Styling:** `src/style.css`

After editing, run `npm run build` again. If you deployed via Vercel with GitHub, push your changes and Vercel will redeploy automatically.
