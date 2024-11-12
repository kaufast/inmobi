
import { blogItems, propertyItems, pageItems } from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");

  useEffect(() => {
    console.log("Current pathname:", pathname); // Log current pathname for debugging



    blogItems.forEach((elm) => {
      if (elm.href === pathname) {
        setTopMenu("blog");
        console.log("Setting topMenu to 'blog'");
      }
    });

    pageItems.forEach((elm) => {
      if (elm.href === pathname) {
        setTopMenu("contacto");
        console.log("Setting topMenu to 'contacto'");
      }
    });

    propertyItems.forEach((item) =>
      item.subMenuItems.forEach((elm) => {
        if (elm.href === pathname) {
          setTopMenu("propiedad");
          setSubmenu(item.label);
          console.log(`Setting topMenu to 'propiedad' and submenu to ${item.label}`);
        }
      })
    );
  }, [pathname]);

  const handleActive = (link) => (pathname === link ? "menuActive" : "");

  return (
    <ul className="ace-responsive-menu">


      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu === "blog" ? "title menuActive" : "title"}>
            Blog
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {blogItems.map((item, index) => (
            <li key={index}>
              <Link className={handleActive(item.href)} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu === "contacto" ? "title menuActive" : "title"}>
            Contacto
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {pageItems.map((item, index) => (
            <li key={index}>
              <Link className={handleActive(item.href)} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu === "propiedad" ? "title menuActive" : "title"}>
            Admin
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {propertyItems.map((item, index) => (
            <li key={index} className="dropitem">
              <a href="#">
                <span className={submenu === item.label ? "title menuActive" : "title"}>
                  {item.label}
                </span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                {item.subMenuItems.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link className={handleActive(subMenuItem.href)} href={subMenuItem.href}>
                      {subMenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};


export default MainMenu;
