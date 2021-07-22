import styled from 'styled-components';

export const FooterNav = styled.nav`
  max-width: 1240px;
  padding: 30px;
  margin: 0px auto 0 auto;
  color: ${({ theme }) => theme.colors.aux};

  .listItems {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;

    li {
      &:last-child {
        .items {
          display: flex;
          gap: 10px;

          @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            justify-content: space-between;
          }
        }
      }
    }

    .items {
      margin-top: 12px;

      a {
        color: ${({ theme }) => theme.colors.aux};
        text-decoration: underline ${({ theme }) => theme.colors.aux};
        transition: color 0.5s;

        &:hover {
          color: ${({ theme }) => theme.colors.contrast};
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: 2fr 1fr;
      gap: 30px;

      li {
        justify-self: start;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
      text-align: center;

      li {
        justify-self: center;
      }
    }
  }
`;
