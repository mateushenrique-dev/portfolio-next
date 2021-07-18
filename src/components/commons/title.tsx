import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4.5rem;
  color: ${({ theme }) => theme.colors.tertiary};
  max-width: 60%;
  line-height: 90px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 90%;
    font-size: 3rem;
    line-height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    line-height: 50px;
  }
`;