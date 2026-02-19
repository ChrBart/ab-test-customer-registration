# Free, capable stack for your project (no budget)

This doc explains the difference between “static” and “dynamic” and recommends a **free, rock-solid setup** that can grow from a simple page to a full modern website or webapp.

---

## What “static” vs “dynamic” means

**Static site**
- You build the site once (HTML, CSS, JS). The host **sends those same files** to every visitor.
- No server running code per request, no database on your side. Very fast and very cheap (often free).
- **Can still have:** multiple pages, forms, animations, login (via a third-party service), search, and most “website” needs.

**Dynamic site / webapp**
- A **server** or **serverless functions** run code when users do things (submit a form, log in, load data).
- Usually uses a **database** (user accounts, content, bookings) and sometimes **auth** (login/signup).
- Needed when you want: user accounts you control, saved data, booking flows, dashboards, or anything that “remembers” per user.

Your current project is static. When you need forms, user registration, or saved data, you add **free backend services** (below) and keep using the same host. You don’t have to pay.

---

## Recommended free stack (rock solid, capable of almost everything)

### 1. Hosting (where the site lives) — pick one

| Service | Free tier | Good for | Notes |
|--------|-----------|----------|--------|
| **Vercel** | Generous | Any size site, React/Next.js or plain HTML | Serverless functions included. Industry standard. |
| **Cloudflare Pages** | Very generous, unlimited bandwidth | Static + Workers (serverless) | No credit card. Great for scaling. |
| **Netlify** | 100 GB/month, 300 min build | Static + serverless, forms | Built-in form handling, split testing. |

**Recommendation:** **Vercel** or **Cloudflare Pages**. Both are free, reliable, and used by big products. Your site stays online 24/7 without you running anything.

### 2. When you need “webapp” features (database, users, forms)

Add one of these **free** backends. Your static site talks to them via JavaScript.

| Service | Free tier | Gives you |
|--------|-----------|-----------|
| **Supabase** | 500 MB DB, 50,000 monthly active users | PostgreSQL database, auth (email/social login), file storage, realtime. |
| **Firebase** (Google) | 1 GB storage, 50K reads/day | Database, auth, file storage, hosting. |
| **Vercel Postgres** | 256 MB, 60K rows read/month | Simple database if you’re already on Vercel. |

**Recommendation:** **Supabase** when you need user registration, saved data, or forms that write to a database. Free tier is enough for a long time.

### 3. What you can do with this (all free)

- Multiple pages, navigation, responsive design  
- Forms (contact, registration) → e.g. Netlify Forms, or Supabase  
- User signup/login → Supabase Auth or Firebase Auth  
- Save and load data (e.g. bookings, preferences) → Supabase or Firebase  
- File uploads (images, PDFs) → Supabase Storage or Firebase Storage  
- Custom logic (e.g. “on submit, do X”) → Vercel/Netlify/Cloudflare serverless functions  

You only add these when you need them. Your current Hello World page doesn’t require any of them yet.

---

## Summary: your path

1. **Now:** Host this project on **Vercel** or **Cloudflare Pages** (free). It’s “static” but that’s enough for many sites and for sharing with stakeholders.
2. **When you add pages/content:** Same host. Still static. Still free.
3. **When you need registration, forms, or saved data:** Add **Supabase** (or Firebase) free tier and connect it from your site. Keep hosting on Vercel/Cloudflare. No extra cost.

This setup is free, capable of almost everything a modern website or webapp needs, and used by real products in production. You’re not locked in: you can move later if you ever need to.
