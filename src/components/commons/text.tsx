import styled from "styled-components";

interface ITextProps {
  center?: boolean
}

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: ${({ center }: ITextProps) => center ? 'center' : 'start'}
`