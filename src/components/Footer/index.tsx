import styled from "styled-components";
import Link from "next/link";
import { FooterNav } from "./styles/FooterNav";
import { Copyright } from "./styles/Copyright";

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
`;

export function FooterWrapper() {
  return (
    <Footer>
      <FooterNav>
        <ul className="listItems">
          <li>
            <h3 className="itemTitle">Servicos</h3>

            <ul className="items">
              <li>Criação de Sites</li>
              <li>Manutenção de Sites</li>
              <li>SEO</li>
            </ul>
          </li>

          <li>
            <h3 className="itemTitle">Links Úteis</h3>

            <ul className="items">
              <li>
                <Link href="/sobre">
                  <a>Saiba mais sobre mim</a>
                </Link>
              </li>
              <li>
                <Link href="/projetos">
                  <a>Meus projetos</a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a>Converse comigo</a>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <h3 className="itemTitle">Contato</h3>

            <ul className="items">
              <li>mhenriqq32@gmail.com</li>
              <li>(34) 99910-4248</li>
            </ul>
          </li>

          <li>
            <h3 className="itemTitle">Redes Sociais</h3>

            <ul className="items">
              <li>
                <a
                  href="https://www.linkedin.com/in/mateus-henrique-dev/"
                  target="_blank"
                >
                  <img src="/linkedin.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/mateushenrique-dev" target="_blank">
                  <img src="/github.svg" alt="" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </FooterNav>
      <Copyright>
        <p>© 2021 Mateus Henrique Front end - Todos Direitos reservados</p>
      </Copyright>
    </Footer>
  );
}
