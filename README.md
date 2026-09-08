# AK Cine Portraits

Premium photography & cinematography portfolio website for weddings, portraits, couple sessions, and life's emotional moments.

**Live Demo:** [https://ak-cine-portraits.github.io](https://ak-cine-portraits.github.io)

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons

## Run Locally

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

### Option 1: Automatic (GitHub Actions)

1. Push to GitHub
2. Go to **Settings > Pages**
3. Under **Source**, select **GitHub Actions**
4. Create `.github/workflows/deploy.yml` (see below)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option 2: Manual deploy

```bash
npm run build
# Then upload the dist/ folder contents to your hosting provider
```

## Customization

- **Portfolio data:** Edit `src/data/portfolioData.ts` to update services, gallery items, and studio config
- **Images:** Replace Unsplash URLs with your own photography
- **Contact info:** Update phone number and social links in `STUDIO_CONFIG`

## License

All rights reserved. AK Cine Portraits 2026.
