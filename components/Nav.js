import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <div className={`${containerStyles} `}>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ v: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
