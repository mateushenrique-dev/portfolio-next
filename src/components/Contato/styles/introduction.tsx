import styled from 'styled-components';

export const Introduction = styled.section`
  max-width: 1240px;
  padding: 0 30px;
  margin: 104px auto;

  h1 {
    max-width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 56px auto;
  }
`;