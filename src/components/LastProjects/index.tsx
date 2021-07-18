import styled from "styled-components";
import Image from "next/image";
import FirstPic from "../../../public/wildbeast.jpg";
import SecondPic from "../../../public/darkside.jpg";
import ThirdPic from "../../../public/braf.jpg";
import { SubTitle } from "../commons/subtitle";
import { CallToAction } from "../commons/callToAction";

const LastProjects = styled.section`
  padding: 0 30px;
  margin-top: 80px;
  margin-bottom: 50px;

  button {
    display: block;
    margin: 56px auto 0 auto;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 30px;
  }

`;

const Project = styled.a`
  box-shadow: 0px 5px 10px rgb(0 0 0 / 10%);
  img {
    border-radius: 8px;
  }
`;

export function LastProjectsWrapper() {
  return (
    <LastProjects>
      <SubTitle>Últimos Projetos</SubTitle>
      <Projects>
        <Project
          placeholder="blur"
          target="_blank"
          href="https://mateushenriquedev-wildbeast.netlify.app/"
        >
          <Image src={FirstPic} alt="Wild Beast" />
        </Project>
        <Project
          placeholder="blur"
          target="_blank"
          href="https://mateushenriquedev-thedarkside.netlify.app/"
        >
          <Image src={SecondPic} alt="Dark Side" />
        </Project>
        <Project
          placeholder="blur"
          target="_blank"
          href="https://mateushenriquedev-brafe.netlify.app/"
        >
          <Image src={ThirdPic} alt="Brafé" />
        </Project>
      </Projects>
      <CallToAction>Ver mais</CallToAction>
    </LastProjects>
  );
}
