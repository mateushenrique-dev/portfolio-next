import styled from 'styled-components';

export const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  justify-content: center;
  margin: 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Service = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
  border-radius: 8px;
  padding: 16px 16px 42px 16px;

  p,
  h3 {
    color: #fff;
  }

  h3 {
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:last-child {
      grid-column: 1/3;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &:last-child {
      grid-column: 1;
    }
  }
`;

