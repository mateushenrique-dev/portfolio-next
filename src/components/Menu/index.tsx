import Link from "next/link";
import { useState } from "react";
import HamburguerMenuWrapper from "./styles/HamburguerMenu";
import { Menu } from "./styles/Menu";

function MenuWrapper() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Menu isActive={menuActive}>
      <Link href="/">
        <a className="toHomePage">
          Mateus Henrique
        </a>
      </Link>

      <HamburguerMenuWrapper active={menuActive} setActive={setMenuActive} />

      <ul className="menuList">
        <li className="menuItem">
          <Link href="/sobre">
            <a className="menuLink">Sobre mim</a>
          </Link>
        </li>
        <li>
          <Link href="/projetos">
            <a className="menuLink">Projetos</a>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <a className="menuLink contact">Contato</a>
          </Link>
        </li>
      </ul>
    </Menu>
  );
}

export default MenuWrapper;
