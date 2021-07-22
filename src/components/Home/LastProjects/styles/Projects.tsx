import styled from 'styled-components';

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 30px;
  }
`;
