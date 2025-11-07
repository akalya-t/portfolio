
import lg1 from "../assets/lg-1.png";
import lg2 from "../assets/lg-2.png";
import lg3 from "../assets/lg-3.png";


import portfolioImg from "../assets/pf-1.png";

import bear1 from "../assets/bs-1.png";
import bear2 from "../assets/bs-2.png";
import bear3 from "../assets/bs-3.png";
import bear4 from "../assets/bs-4.png";


import mood1 from "../assets/mc-1.png";
import mood2 from "../assets/mc-2.png";
import mood3 from "../assets/mc-3.png";
import mood4 from "../assets/mc-4.png";


export const projectsData = [
  {
    id: "logo-designs",
    title: "Logo Design Gallery",
    subtitle: "A curated collection of my branding & logo works",
    heroImage: lg1,
    description: `
      My journey into design began here. I created visual identities that
      balance clarity and emotion. This gallery showcases my process —
      from sketch to scalable logo, each crafted to tell a brand story
      that lasts.
    `,
    process: `
      I focused on simplicity, timelessness, and adaptability.
      Each logo was created after understanding the brand’s values and target audience.
      The goal: craft visual symbols that build trust and recognition.
    `,
    impact: `
      These designs improved brand recall for clients and inspired my transition into web creation — 
      where design meets functionality.
    `,
    images: [lg1, lg2, lg3,],
  },
  {
    id: "portfolio",
    title: "Portfolio Site",
    subtitle: "My personal portfolio built with React + Tailwind",
    heroImage: portfolioImg,
    description: `
      This site reflects my journey as a front-end developer and designer.
      I focused on keeping it aesthetic yet technical, with smooth motion and responsive layouts.
    `,
    process: `
      Built with React, Tailwind, and Framer Motion, each section was planned like a design system.
      The carousel and typography blend usability with personality.
    `,
    impact: `
      A fast, minimal website that clearly represents who I am — and
      helps people connect with my work effortlessly.
    `,
    images: [], 
  },
  {
    id: "bearsite",
    title: "The Bear Site",
    subtitle: "A minimal documentation-style branding website",
    heroImage: bear1,
    description: `
      Bear is a minimal documentation-style site that communicates brand
      story in a clean, structured format.
    `,
    process: `
      Used React + Markdown + custom components. Focused on spacing,
      rhythm, and hierarchy — like a well-designed editorial layout.
    `,
    impact: `
      The result is a calm yet bold web presence that reflects how
      content and identity can coexist seamlessly.
    `,
    images: [bear1, bear2, bear3,bear4],
  },
  {
    id: "eunoia",
    title: "Eunoia",
    subtitle: "A web app that changes theme based on emotion",
    heroImage: mood1,
    description: `
      Eunoia was built to explore emotion-based design — where UI responds to how you feel.
    `,
    process: `
      Using React state and contextual styling, the app maps different
      moods to color palettes and soundscapes.
    `,
    impact: `
      It’s a gentle reminder that tech can adapt to human emotion —
      bridging design, code, and psychology.
    `,
    images: [mood1, mood2, mood3,mood4],
  },
];
