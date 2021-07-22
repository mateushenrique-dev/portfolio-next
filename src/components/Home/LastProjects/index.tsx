import Image from "next/image";
import FirstPic from "../../../../public/wildbeast.jpg";
import SecondPic from "../../../../public/darkside.jpg";
import ThirdPic from "../../../../public/braf.jpg";
import { SubTitle } from "../../commons/subtitle";
import { CallToAction } from "../../commons/callToAction";
import Link from "next/link";
import { LastProjects } from "./styles/LastProjects";
import { Projects } from "./styles/Projects";
import { Project } from "./styles/Project";

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
      <Link href="/projetos">
        <CallToAction>Ver mais</CallToAction>
      </Link>
    </LastProjects>
  );
}
