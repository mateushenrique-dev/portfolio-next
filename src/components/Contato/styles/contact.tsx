import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  padding: 0 30px;
  margin: 0 auto 64px auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;