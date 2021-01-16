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
  // {
  //   href: "https://dev.to/matjones/",
  //   text: "Blog",
  //   external: true,
  // },
  {
    href: "/blog",
    text: "Blog",
  },
];
