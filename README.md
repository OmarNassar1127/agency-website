# Agency Website

Modern digital agency website built with Next.js, TypeScript, and Tailwind CSS.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. Push this repository to GitHub
2. Go to your repository settings on GitHub
3. Navigate to Pages > Build and deployment
4. For the Source, select "GitHub Actions"
5. The site will automatically deploy whenever you push to the main branch

### Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

### Notes

- The `next.config.js` is configured with `basePath` for GitHub Pages
- The GitHub Actions workflow `.github/workflows/deploy.yml` handles the automatic deployment
- To test the production build locally, run `npm run build` followed by `npm run start`