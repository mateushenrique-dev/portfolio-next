import styled from 'styled-components';

export const ToggleTheme = styled.div`
  width: 105px;
  height: 45px;
  border-radius: 50px;
  background-color: #e0d3d1;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    width: 55%;
    height: 125%;
    background: ${({ theme }) => theme.colors.contrast};
    border-radius: 50%;
    position: absolute;
    top: -6px;
    left: 0px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 60px;
    height: 25px;

    &:before {
      top: -3px;
    }
  }
`;