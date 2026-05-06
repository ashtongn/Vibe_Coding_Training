# Vibe Coding Training

A production-ready, manifest-driven training website for teaching vibe-coding. The app is built with React, Vite, TypeScript, React Router, Tailwind CSS, PDF.js, and embedded YouTube lessons.

## Features

- Content is driven from a single manifest file at [`src/content/courseManifest.ts`](/Users/ashtongordon/Projects/TrainingApp/Vibe_Coding_Training/src/content/courseManifest.ts)
- Three lesson types: `pdf`, `video`, and `markdown`
- Responsive learning-platform layout with:
  - left sidebar for modules and lessons
  - main lesson viewer
  - previous/next navigation
- In-browser PDF rendering from `/public/pdfs`
- YouTube iframe embeds with invalid-ID handling
- Hash-based routing for static hosting compatibility, including GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Course Manifest

All course structure lives in [`src/content/courseManifest.ts`](/Users/ashtongordon/Projects/TrainingApp/Vibe_Coding_Training/src/content/courseManifest.ts).

Each module contains ordered lessons. Each lesson supports:

```ts
type Lesson =
  | {
      id: string;
      title: string;
      type: 'pdf';
      description: string;
      pdfPath: string;
    }
  | {
      id: string;
      title: string;
      type: 'video';
      description: string;
      youtubeId: string;
    }
  | {
      id: string;
      title: string;
      type: 'markdown';
      description: string;
      content: string;
    };
```

## Add a New PDF Lesson

1. Put the PDF file in [`public/pdfs`](/Users/ashtongordon/Projects/TrainingApp/Vibe_Coding_Training/public/pdfs).
2. Add a lesson entry to the appropriate module in [`src/content/courseManifest.ts`](/Users/ashtongordon/Projects/TrainingApp/Vibe_Coding_Training/src/content/courseManifest.ts).
3. Set `type: 'pdf'` and point `pdfPath` to the public asset path.

Example:

```ts
{
  id: 'shipping-prompts',
  title: 'Shipping Prompts',
  type: 'pdf',
  description: 'A printable checklist for taking prompts to production.',
  pdfPath: '/pdfs/shipping-prompts.pdf',
}
```

Notes:

- Keep `id` values unique across the course.
- Preserve lesson order by placing the lesson where you want it to appear in the manifest array.
- PDF files in `public` are served directly at build time, so `/pdfs/file-name.pdf` is the correct path shape.

## Add a New YouTube Video Lesson

1. Open [`src/content/courseManifest.ts`](/Users/ashtongordon/Projects/TrainingApp/Vibe_Coding_Training/src/content/courseManifest.ts).
2. Add a lesson with `type: 'video'`.
3. Set `youtubeId` to the YouTube video ID only, not the full URL.

Example:

```ts
{
  id: 'agent-feedback-loops',
  title: 'Agent Feedback Loops',
  type: 'video',
  description: 'How to tighten iteration cycles without losing clarity.',
  youtubeId: 'dQw4w9WgXcQ',
}
```

Notes:

- Use the part after `v=` in a standard YouTube URL.
- The app validates the format and shows an error state for invalid IDs.

## GitHub Pages Deployment

The app uses `HashRouter`, so routes work on static hosts without server-side rewrites.

1. Update the `homepage` value in [`package.json`](/Users/ashtongordon/Projects/TrainingApp/Vibe_Coding_Training/package.json) to match your GitHub Pages URL.
2. Install dependencies.
3. Build and deploy `dist`.

Example deployment flow with GitHub Pages:

```bash
npm install
npm run build
```

If you want to publish with `gh-pages`, add your preferred deployment workflow or CI job to push the `dist` directory.

## Project Structure

```text
src/
  components/
    layout/
    navigation/
    viewers/
  content/
  types/
  utils/
```

The code is organized so layout, content, viewers, and navigation stay separate and easy to extend.
