import styled from 'styled-components';

export const Introduction = styled.section`
  background: ${({ theme }) => theme.colors.primary};

  div {
    max-width: 1240px;
    padding: 100px 30px;
    margin: 32px auto 30px auto;
    color: #fff;

    h1 {
      color: #fff;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 56px 30px;
    }
  }
`;
