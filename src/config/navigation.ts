export interface NavigationItem {
  label: string;
  href: string;
  enabled?: boolean; // Optional flag to enable/disable items (for commented out items)
}

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "CV", href: "/cv/" },
  { label: "Publications", href: "/publications/" },
  { label: "Projects", href: "/projects/" },
  { label: "Blog", href: "/blog/" },
  // { label: "Music", href: "/music/", enabled: false }, // Uncomment and set enabled: true to enable
];

