# Get your site online (step-by-step)

## 1. Create a Vercel account
- Go to [vercel.com](https://vercel.com)
- Click **Sign Up**
- Use GitHub, Google, or email

## 2. Install Vercel CLI (one time)
Open Terminal and run:
```bash
cd /Users/c906621/share-project
npm i -g vercel
```
(If you renamed the folder to `ab-test-customer-registration`, use that path instead.)

## 3. Log in and deploy
In the same folder, run:
```bash
vercel
```
- First time: log in in the browser when it opens
- **Set up and deploy?** → **Y**
- **Which scope?** → press Enter (your account)
- **Link to existing project?** → **N**
- **Project name?** → press Enter (or type a name)
- **In which directory is your code?** → press Enter (./)

## 4. Get your link
When it finishes, Terminal shows a URL like:
**https://ab-test-customer-registration-xxxx.vercel.app**

That’s your live site. Share it. It stays up without your computer.

---

**Later: you changed the site**
In the project folder run:
```bash
vercel --prod
```
Your live URL updates.
