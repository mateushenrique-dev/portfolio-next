import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 45%;
  height: 45px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 8px;
  margin-bottom: 16px;
  color: #fff;
  padding: 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;