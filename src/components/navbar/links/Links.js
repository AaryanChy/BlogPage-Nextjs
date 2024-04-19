import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
const Links = () => {
  const links = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "blog",
      path: "/blog",
    },
  ];
  return (
    <div className={styles.link}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
