export const TAGS = {
  Astro: {
    name: "Astro",
    class: "bg-black text-white",
    iconName: "AstroIcon",
  },
  Tailwind: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    iconName: "TailwindIcon",
  },
  React: {
    name: "React",
    class: "bg-[#20232a] text-[#61DAFB]",
    iconName: "ReactIcon",
  },
  CSS: {
    name: "CSS",
    class: "bg-[#1572B6]/20 text-[#1572B6]",
    iconName: "CSSIcon",
  },
};

export const PROJECTS_DATA = [
  {
    title: "Nexo PC",
    description:
      "Una app de escritorio para monitorizar y controlar el hardware y los componentes de tu PC de forma visual, rápida y muy intuitiva. Diseñada nativamente para Windows 10 y 11 con la barra superior estilo ChatGPT.",
    link: "https://nexo-pc-landing.vercel.app/",
    github: "https://github.com/JaviBarrientos17/nexo-pc-app",
    image: "/projects/nexo-pc.webp",
    tags: [TAGS.React, TAGS.CSS, TAGS.Astro],
  },
];
