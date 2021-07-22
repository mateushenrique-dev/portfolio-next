import styled from "styled-components";
import { Title } from "../../commons/title";
import { Introduction } from "./styles/Introduction";

export default function IntroductionWrapper() {
  return (
      <Introduction>
        <div>
          <span className="auxText">sobre mim</span>
          <Title>Desenvolvedor Front End</Title>
        </div>
      </Introduction>
  );
}