# Aldhia Infratech Website

A responsive, multi-page corporate website concept for Aldhia Infratech, built with React, Vite, Tailwind CSS, Framer Motion, React Router and Lucide React.

## Run locally

1. Install Node.js (LTS).
2. Extract this ZIP.
3. Open the project folder in VS Code.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production-ready files are generated in `dist/`.

## Pages

- Home
- About
- Services
- Projects
- HSE
- Gallery
- Contact

## Brand

The supplied Aldhia Infratech logo is included unchanged at `public/assets/logo.png`.
The approved brand palette is configured in `tailwind.config.js` and `src/styles.css`.

## Content and image notes

Company facts, service names, project names, contractor references, achievements, HSE commitments and contact details are based on the supplied 13-page company profile.

The hero, gallery and HSE sections use photographs extracted from the supplied Aldhia Infratech company profile PDF. The opening loader has a minimum 3.2-second animated transmission-tower-to-tower electrical line sequence. The company profile PDF and supplied palette card are retained under `public/assets/`.

## Deployment

This is a standard Vite SPA and can be deployed to Vercel or Netlify. For Vercel, use the Vite preset, build command `npm run build`, and output directory `dist`. Configure SPA rewrites to serve `index.html` for application routes if required by your host.


## Footer layout
The contact information and brand are composed inside one continuous full-width footer background. On desktop, the logo and tagline sit on the left and contact details sit on the right. On smaller screens, the content stacks vertically for readability.
