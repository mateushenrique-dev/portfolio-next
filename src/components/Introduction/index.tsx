import styled from "styled-components";
import { Title } from "../commons/title";

const Introduction = styled.section`
  max-width: 1240px;
  padding: 0 30px;
  margin: 64px auto 32px auto;

  .status {
    margin-bottom: 16px;
    font-size: 0.875rem;

    .disponivel {
      color: green;
    }

    .indisponivel {
      color: red;
    }

    &:before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 8px;
      border-radius: 50%;
      background: red;
    }
  }

  .work {
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.contrast};

    &:before {
      content: "";
      display: inline-block;
      width: 20%;
      height: 1px;
      background: ${({ theme }) => theme.colors.contrast};
      margin-bottom: 5px;
      margin-right: 8px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-right: 0;

    .work {
      &:before {
        display: none;
      }
    }
  }
`;

export function IntroductionWrapper() {
  return (
    <Introduction>
      <p className="status">
        <span className="indisponivel">Indisponível</span> para novos projetos!
      </p>
      <Title>Mateus Henrique Web Designer</Title>
      <p className="work">Front End Developer</p>
    </Introduction>
  );
}
