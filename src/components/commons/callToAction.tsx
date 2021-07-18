import styled from "styled-components";

export const CallToAction = styled.button`
  background: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.aux};
  font-size: 1rem;
  transition: background-color 0.5s;
  text-transform: uppercase;
  border: none;
  padding: 20px 40px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
  }
`;
