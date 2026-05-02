# Portfolio — Joel CODJA

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

Live site: https://joelcodja.vercel.app

---

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- EmailJS (contact form)

---

## Features

- Fully responsive design, mobile-first
- Scroll reveal animations
- Live GitHub contribution heatmap
- Work experience timeline with modal details
- Project showcase with previews
- Working contact form via EmailJS
- Custom bottom navigation bar
- Dark theme with custom scrollbar

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/alpha1207vj/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Main portfolio page
  globals.css         # Global styles and Tailwind directives
  projects/
    page.tsx          # All projects page

components/
  BottomNav.tsx       # Fixed bottom navigation bar
  BioText.tsx         # Bio with tech icon tooltips on hover
  ContactForm.tsx     # EmailJS-powered contact form
  ExperienceList.tsx  # Work experience list
  ExperienceModal.tsx # Experience detail modal
  ProjectCard.tsx     # Project card component
  ProjectPreviews.tsx # Project preview images
  ScrollReveal.tsx    # Intersection observer scroll animations
  TechPill.tsx        # Technology badge component

data.ts               # All personal data, projects, skills, experience
```

---

## Customization

All personal information is centralized in `data.ts`. Update the following exports to make it your own:

- `PERSONAL` — name, bio, tagline, social links, email
- `SKILLS` — tech stack with icons
- `EXPERIENCE` — work history with descriptions and technologies
- `EDUCATION` — academic background
- `PROJECTS` — project showcase with previews and links

---

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Add the environment variables in the Vercel dashboard under Settings > Environment Variables
4. Deploy

---

## Contact

Joel CODJA — [LinkedIn](https://linkedin.com/in/yourprofile) — [Twitter](https://twitter.com/yourhandle)

GitHub: [https://github.com/alpha1207vj](https://github.com/alpha1207vj)
