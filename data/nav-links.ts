export interface NavLink {
  href: string;
  text: string;
  external?: boolean;
}

export const NavLinks: Array<NavLink> = [
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/contact",
    text: "Contact Me",
  },
  {
    href: "/how-its-made",
    text: "How It's Made",
  },
];
