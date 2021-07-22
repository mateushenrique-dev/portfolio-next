import styled from 'styled-components';

export const Main = styled.main`
  button {
    margin: 42px auto;
  }

  h2 {
    margin-top: 64px;
  }

  p {
    &:last-child {
      max-width: 600px;
      margin: 32px auto;
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: ${({ theme }) => theme.colors.tertiary};
        margin: 32px 32px 56px 32px;
        opacity: 0.4;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.9rem;

      &:last-child {
        &:after {
          content: "";
          display: none;
        }
      }
    }
  }
`;
