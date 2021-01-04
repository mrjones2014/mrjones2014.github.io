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
    href: "/contact",
    text: "Contact Me",
  },
  {
    href: "https://medium.com/@mjones44/",
    text: "Blog",
    external: true,
  },
];
