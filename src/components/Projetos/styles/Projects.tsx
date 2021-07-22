import styled from "styled-components";

interface IProject {
  reverse?: boolean;
}

export const Projects = styled.main`
  max-width: 1100px;
  padding: 0 30px;
  margin: 104px auto 0 auto;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: ${({ reverse }: IProject) =>
    reverse ? "row-reverse" : "row"};
  align-items: center;
  margin-bottom: 72px;
  gap: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  .projectTitle {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 14px;
  }

  p {
    margin-bottom: 14px;
  }

  .projectImage {
    box-shadow: 5px 0px 10px rgb(0 0 0 / 20%);
    border-radius: 8px;
  }

  .projectLink {
    font-size: 1.125rem;
    transition: color 0.5s;
    color: ${({ theme }) => theme.colors.contrast};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    justify-content: center;

    img {
      width: 300px;
    }
  }
`;
