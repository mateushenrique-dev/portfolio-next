import styled from "styled-components";

const Social = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 64px;
  }
`;

export function SocialMedia() {
  return (
    <Social>
      <img src="/github_contact.svg" alt="" />
      <img src="/linkedin_contact.svg" alt="" />
    </Social>
  );
}
