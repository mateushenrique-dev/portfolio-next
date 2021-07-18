import styled from "styled-components";
import Link from "next/link";

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
`;

const FooterNav = styled.nav`
  max-width: 1240px;
  padding: 30px;
  margin: 0px auto 0 auto;
  color: ${({ theme }) => theme.colors.aux};

  .listItems {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;

    li {
      &:last-child {
        .items {
          display: flex;
          gap: 10px;

          @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            justify-content: space-between;
          }
        }
      }
    }

    .items {
      margin-top: 12px;

      a {
        color: ${({ theme }) => theme.colors.aux};
        text-decoration: underline ${({ theme }) => theme.colors.aux};
        transition: color 0.5s;

        &:hover {
          color: ${({ theme }) => theme.colors.contrast};
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: 2fr 1fr;
      gap: 30px;

      li {
        justify-self: start;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
      text-align: center;

      li {
        justify-self: center;
      }
    }
  }
`;

const ServicePolicy = styled.section`
  background: #8844ee;
  color: ${({ theme }) => theme.colors.aux};
  p {
    text-align: center;
    padding: 12px 8px;
  }
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
                <img src="/linkedin.svg" alt="" />
              </li>
              <li>
                <img src="/github.svg" alt="" />
              </li>
            </ul>
          </li>
        </ul>
      </FooterNav>
      <ServicePolicy>
        <p>© 2021 Mateus Henrique Front end - Todos Direitos reservados</p>
      </ServicePolicy>
    </Footer>
  );
}
