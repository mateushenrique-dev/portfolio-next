import styled from 'styled-components';

export const SubTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.tertiary};

  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 20%;
    height: 1px;
    background: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 10px;
    margin-right: 32px;
    opacity: 0.3;
  }

  &:after {
    margin-right: 0;
    margin-left: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:before,
    &:after {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.6rem;
  }
`;