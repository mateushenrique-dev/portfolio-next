import styled from 'styled-components';

export const History = styled.section`
  max-width: 1240px;
  padding: 32px 30px;
  margin: 0 auto;

  h2 {
    &::before,
    &::after {
      display: none;
    }

    text-align: start;
    margin-bottom: 32px;
  }
`;
