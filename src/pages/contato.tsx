import { Title } from "../components/commons/title";
import { Contact } from "../components/Contato/styles/contact";
import { FormWrapper } from "../components/Contato/formwrapper";
import { Introduction } from "../components/Contato/styles/introduction";
import { SocialMedia } from "../components/Contato/SocialMedia";


export default function Contato() {
  return (
    <main>
      <Introduction>
        <Title>Converse comigo!</Title>
      </Introduction>
      <Contact>
        <FormWrapper />
        <SocialMedia />
      </Contact>
    </main>
  )
}