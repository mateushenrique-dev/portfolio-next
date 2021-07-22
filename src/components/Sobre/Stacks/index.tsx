import Image from "next/image";
import styled from "styled-components";
import Pic1 from "../../../../public/html.png";
import Pic2 from "../../../../public/css.png";
import Pic3 from "../../../../public/js.png";
import Pic4 from "../../../../public/ts.png";
import Pic5 from "../../../../public/react.png";
import Pic6 from "../../../../public/next.png";
import { SubTitle } from "../../commons/subtitle";
import { Text } from "../../commons/text";

const Stacks = styled.section`
  max-width: 1240px;
  padding: 0 30px;
  margin: 48px auto 0 auto;

  p {
    max-width: 50%;
    margin: 16px auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width: 100%;
    }
  }
`;

const Techs = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  column-gap: 170px;
  row-gap: 30px;
  margin: 64px auto;
  align-items: center;

  img {
    width: 100px;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 50px;
    img {
      width: 80px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    justify-items: center;

    img {
      width: 70px;
    }
  }
`;

export function StacksWrapper() {
  return (
    <Stacks>
      <SubTitle>Habilidades</SubTitle>
      <Text center>
        Estou sempre atento ao mercado e lendo sobre as áreas envolvidas com meu
        dia a dia, incorporando novas tecnologias e métodos conforme as
        necessidades minhas e dos projetos.
      </Text>
      <Techs>
        <img src="/html.png" />
        <img src="/css.png" />
        <img src="/js.png" />
        <img src="/ts.png" />
        <img src="/react.png" />
        <img src="/next.png" />
      </Techs>
    </Stacks>
  );
}
