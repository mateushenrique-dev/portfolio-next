import styled from "styled-components";

export const Introduction = styled.section`
  max-width: 1240px;
  padding: 0 30px;
  margin: 104px auto;

  &:after {
    content: "";
    display: block;
    width: 50%;
    height: 1px;
    background: ${({ theme }) => theme.colors.tertiary};
    margin-top: 32px;
    opacity: 0.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 56px auto;
  }
`;