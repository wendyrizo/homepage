export type Project = {
  preview?: string;
  icon?: string;
  name: string;
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    preview: "/sample.webp",
    icon: "/favicon.svg",
    name: "test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    link: "#",
  },
  {
    preview: "/sample.webp",
    icon: "/favicon.svg",
    name: "test-n",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    link: "#",
  },
];
