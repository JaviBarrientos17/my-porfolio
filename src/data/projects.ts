export const TAGS = {
  Astro: {
    name: "Astro",
    class: "bg-black text-white border border-white/30",
    iconName: "AstroIcon",
  },
  Tailwind: {
    name: "Tailwind CSS",
    class: "bg-[#0f172a] text-[#38bdf8] border border-[#38bdf8]/30",
    iconName: "TailwindIcon",
  },
  React: {
    name: "React",
    class: "bg-[#38bdf8] text-black border border-[#38bdf8]/30",
    iconName: "ReactIcon",
  },
  CSS: {
    name: "CSS",
    class: "bg-[#264de4] text-white border border-white/30",
    iconName: "CSSIcon",
  },
  Electron: {
    name: "Electron",
    class: "bg-[#20232a] text-white border border-white/30",
    iconName: "ElectronIcon",
  },
};

export const PROJECTS_DATA = [
  {
    title: "Nexo PC",
    description:
      "Una app de escritorio para monitorizar y controlar el hardware y los componentes de tu PC de forma visual, rápida y muy intuitiva. Diseñada nativamente para Windows 10 y 11.",
    link: "https://nexo-pc-landing.vercel.app/",
    github: "https://github.com/JaviBarrientos17/nexo-pc-app",
    image: "/projects/nexo-pc.webp",
    tags: [TAGS.Electron, TAGS.React, TAGS.CSS]
  },
  {
    title: "All in One Toolbox",
    description:
      "Una aplicación web todo en uno para transformar, optimizar y gestionar imágenes, archivos PDF y documentos desde un único lugar. Incluye herramientas para comprimir, redimensionar, convertir y editar archivos, con una interfaz moderna, responsive y multilingüe. Diseñada para priorizar la privacidad, procesando los archivos directamente en el navegador sin necesidad de subirlos a un servidor.",
    link: "https://all-in-one-toolbox.vercel.app/",
    github: "https://github.com/JaviBarrientos17/all-in-one-toolbox",
    image: "/projects/all-in-one-toolbox.webp",
    tags: [TAGS.React, TAGS.Tailwind, TAGS.Astro]
  },
];
