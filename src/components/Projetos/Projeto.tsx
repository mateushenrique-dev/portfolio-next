import Image from "next/image";
import { Text } from "../commons/text";
import { Project } from "./styles/Projects";

interface IProjeto {
  img: string;
  title: string;
  description: string;
  link: string;
  reverse?: boolean;
}

export function Projeto({ img, title, description, link, reverse }: IProjeto) {
  return (
    <Project reverse={reverse}>
      <img className="projectImage" src={img} alt="Project Image" />
      <div>
        <h3 className="projectTitle">{title}</h3>
        <Text>{description}</Text>
        <a className="projectLink" target="_blank" href={link}>
          Ver projeto
        </a>
      </div>
    </Project>
  );
}