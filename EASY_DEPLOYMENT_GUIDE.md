# Complete Beginner's Guide to Deploying Your Website

## What You're About to Do

You're going to make your African Social Workers Scotland website live on the internet in about 15 minutes. Don't worry - I'll walk you through every single step!

---

## Part 1: Create a GitHub Account (5 minutes)

GitHub is like a storage space for your website code. It's completely free.

### Steps:

1. **Go to GitHub**
   - Open your web browser
   - Type: `github.com`
   - Click the green "Sign up" button in the top right

2. **Create Your Account**
   - Enter your email address
   - Create a password (make it strong!)
   - Choose a username (can be anything you like)
   - Click "Continue"

3. **Verify Your Email**
   - Check your email inbox
   - Find the email from GitHub
   - Click the verification link

4. **Complete Setup**
   - Answer the quick questions (or skip them)
   - Choose the free plan
   - You're done with GitHub setup!

---

## Part 2: Upload Your Website to GitHub (7 minutes)

Now we'll put your website code on GitHub so Vercel can access it.

### Steps:

1. **Create a New Repository**
   - Once logged into GitHub, click the "+" icon in the top right
   - Select "New repository"

2. **Set Up Repository Details**
   - **Repository name**: Type `asws-website` (or any name you prefer)
   - **Description**: Type "African Social Workers Scotland Official Website"
   - **Visibility**: Choose "Public" (keeps it free)
   - **DON'T** check "Add a README file"
   - Click the green "Create repository" button

3. **You'll See a Page with Commands**
   - Keep this page open - you'll need it in a moment
   - Look for the section that says "…or push an existing repository from the command line"

4. **Upload Your Code**

   Now you need to run some commands on your computer. Here's how:

   **On Windows:**
   - Press `Windows Key + R`
   - Type `cmd` and press Enter
   - A black window will open (this is the Command Prompt)

   **On Mac:**
   - Press `Command + Space`
   - Type `terminal` and press Enter
   - A white/black window will open

   **In the Terminal/Command Prompt:**

   First, navigate to your project folder. Type this (replace the path with where your project is):
   ```bash
   cd /tmp/cc-agent/49366275/project
   ```
   Press Enter

   Now run these commands ONE AT A TIME (press Enter after each):

   ```bash
   git init
   ```
   (This prepares your folder for GitHub)
   Press Enter, wait for it to finish

   ```bash
   git add .
   ```
   (This selects all your website files)
   Press Enter, wait for it to finish

   ```bash
   git commit -m "Initial website deployment"
   ```
   (This packages your files)
   Press Enter, wait for it to finish

   ```bash
   git branch -M main
   ```
   (This creates the main branch)
   Press Enter, wait for it to finish

   Now, go back to your GitHub page and copy the line that starts with `git remote add origin...`

   Paste it into your terminal and press Enter

   Finally, run:
   ```bash
   git push -u origin main
   ```
   Press Enter

   **If asked for credentials:**
   - Username: Your GitHub username
   - Password: You'll need a "Personal Access Token" instead of your regular password
     - Go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token
     - Give it a name, check "repo" permissions, and copy the token
     - Use this token as your password

5. **Verify Upload**
   - Go back to your GitHub repository page in your browser
   - Refresh the page
   - You should now see all your website files!

---

## Part 3: Deploy to Vercel (3 minutes)

This is the easiest part! Vercel will make your website live.

### Steps:

1. **Go to Vercel**
   - Open your browser
   - Type: `vercel.com`
   - Click "Sign Up" in the top right

2. **Sign Up with GitHub**
   - Click "Continue with GitHub"
   - This connects Vercel to your GitHub account
   - Click "Authorize Vercel" when asked
   - You're now logged into Vercel!

3. **Import Your Project**
   - You'll see a button that says "Add New..." or "Import Project"
   - Click it
   - Select "Import Git Repository"
   - You'll see your `asws-website` repository listed
   - Click "Import" next to it

4. **Configure Project**
   - **Project Name**: Keep it as `asws-website` or change it
   - **Framework Preset**: Should automatically detect "Vite"
   - **Root Directory**: Leave as `./`
   - **Build Command**: Should show `npm run build`
   - **Output Directory**: Should show `dist`
   - Don't change anything else
   - Click the blue "Deploy" button

5. **Wait for Deployment**
   - You'll see a progress screen with animations
   - This takes about 1-2 minutes
   - When you see confetti and "Congratulations!" - you're live!

6. **Your Website is Live!**
   - You'll see a URL like: `asws-website.vercel.app`
   - Click "Visit" to see your live website
   - Copy this URL to share with others

---

## Part 4: Add Your Custom Domain (Optional - 10 minutes)

If you own `aswscotland.org`, you can connect it now. If not, skip this section.

### Steps:

1. **In Vercel Dashboard**
   - Click on your project (`asws-website`)
   - Click "Settings" at the top
   - Click "Domains" in the left sidebar
   - Type your domain: `www.aswscotland.org`
   - Click "Add"

2. **Configure DNS (Domain Settings)**
   - Vercel will show you instructions
   - Go to where you bought your domain (GoDaddy, Namecheap, etc.)
   - Find "DNS Settings" or "DNS Management"
   - Add these records (Vercel will give you exact values):
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`
   - Save the DNS changes

3. **Wait for Verification**
   - DNS changes can take up to 24 hours (usually much faster)
   - Vercel will automatically verify when ready
   - You'll receive an email when it's complete

---

## Troubleshooting Common Issues

### "Git is not recognized" error
- You need to install Git first
- Go to: `git-scm.com`
- Download and install Git
- Then try the commands again

### "Permission denied" error on GitHub
- You need to create a Personal Access Token
- Go to GitHub → Settings → Developer settings
- Personal access tokens → Tokens (classic) → Generate new token
- Check "repo" permissions
- Copy the token and use it as your password

### Build fails on Vercel
- Check if all files uploaded to GitHub correctly
- Make sure `package.json` is in the root folder
- Contact me if the issue persists

### Can't find Terminal/Command Prompt
- **Windows**: Press Windows Key + R, type `cmd`, press Enter
- **Mac**: Press Command + Space, type `terminal`, press Enter

---

## After Deployment - Important Next Steps

### 1. Submit to Google (Important for SEO!)

Once your site is live:

**Google Search Console:**
- Go to: `search.google.com/search-console`
- Click "Start now"
- Add your website URL
- Verify ownership (Vercel makes this easy)
- Click "Sitemaps" in left menu
- Add: `sitemap.xml`
- Click "Submit"

**Why?** This tells Google your website exists and helps it appear in search results!

### 2. Submit to Bing

- Go to: `bing.com/webmasters`
- Sign in with your Microsoft account
- Add your website
- Submit your sitemap: `https://www.aswscotland.org/sitemap.xml`

### 3. Test Your Website

Visit these URLs to make sure everything works:
- `your-site.vercel.app` (main site)
- `your-site.vercel.app/about`
- `your-site.vercel.app/events`
- `your-site.vercel.app/contact`

Try the contact form to make sure it works!

---

## Updating Your Website Later

When you want to make changes to your website:

1. Make changes to your files on your computer
2. Run these commands in Terminal/Command Prompt:
   ```bash
   cd /tmp/cc-agent/49366275/project
   git add .
   git commit -m "Description of what you changed"
   git push
   ```
3. Vercel will automatically update your live site in 1-2 minutes!

---

## Need Help?

If you get stuck at any step:

1. **Check the error message** - it often tells you what's wrong
2. **Google the exact error** - others have likely had the same issue
3. **GitHub Help**: docs.github.com
4. **Vercel Help**: vercel.com/docs
5. **Vercel Support**: They have excellent live chat support

---

## What You've Accomplished

By following this guide, you will have:
- ✅ Created a professional GitHub account
- ✅ Uploaded your website code to GitHub
- ✅ Deployed your website to the internet
- ✅ Made your website accessible worldwide
- ✅ Set up automatic deployments for future updates
- ✅ Achieved excellent SEO optimization
- ✅ Got free HTTPS security
- ✅ Got free global CDN (fast loading worldwide)

**Your website is now professional, secure, and ready to serve the African Social Workers Scotland community!**

---

## Quick Reference Card

**Your Website Details:**
- Project folder: `/tmp/cc-agent/49366275/project`
- GitHub repository: `github.com/YOUR-USERNAME/asws-website`
- Live website: `asws-website.vercel.app` (or your custom domain)

**Important Commands:**
```bash
# Navigate to project
cd /tmp/cc-agent/49366275/project

# Upload changes
git add .
git commit -m "Your message here"
git push
```

**Important Links:**
- GitHub: github.com
- Vercel: vercel.com
- Your Vercel Dashboard: vercel.com/dashboard
- Google Search Console: search.google.com/search-console

---

Remember: This might seem like a lot, but each step is simple. Take your time, follow each instruction carefully, and you'll have your website live in no time!

Good luck! 🚀
