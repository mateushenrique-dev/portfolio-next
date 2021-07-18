import { useState } from "react";
import styled from "styled-components";
import HamburguerMenuWrapper from "./HamburguerMenu";

interface IMenuProps {
  isActive: boolean;
}

const Menu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;

  button {
    display: none;
  }

  .menuList {
    display: flex;
    gap: 30px;

    .menuLink {
      color: ${({ theme }) => theme.colors.tertiary};
      font-size: 1.125rem;
      transition: color 0.5s;

      &.contact {
        padding: 8px 16px;
        background-color: ${({ theme }) => theme.colors.contrast};
        border-radius: 8px;
        color: ${({ theme }) => theme.colors.aux};
      }

      &:not(.contact):hover {
        color: ${({ theme }) => theme.colors.contrast};
      }
    }
  }

  .toHomePage {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.mobile} + 130px)) {
    .menuList {
      display: ${({ isActive }: IMenuProps) => (isActive ? "flex" : "none")};
      margin-top: 32px;
      gap: 15px;
      animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

      .menuLink {
        font-size: 0.9rem;

        &.contact {
          padding: 8px 12px;
        }
      }
    }

    .toHomePage {
      font-size: 1rem;
    }

    button {
      display: block;
    }
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

function MenuWrapper() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Menu isActive={menuActive}>
      <a className="toHomePage" href="">
        Mateus Henrique
      </a>

      <HamburguerMenuWrapper active={menuActive} setActive={setMenuActive} />

      <ul className="menuList">
        <li className="menuItem">
          <a className="menuLink" href="">
            Sobre mim
          </a>
        </li>
        <li>
          <a className="menuLink" href="">
            Projetos
          </a>
        </li>
        <li>
          <a className="menuLink contact" href="">
            Contato
          </a>
        </li>
      </ul>
    </Menu>
  );
}

export default MenuWrapper;
