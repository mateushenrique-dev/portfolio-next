import React from "react";
import { Projects } from "../components/Projetos/styles/Projects";
import { IntroductionWrapper } from "../components/Projetos";
import { Projeto } from "../components/Projetos/Projeto";
import { CallToAction } from "../components/commons/callToAction";
import { SubTitle } from "../components/commons/subtitle";
import { Text } from "../components/commons/text";
import { Main } from "../components/Projetos/styles/Main";


export default function Projetos() {
  return (
    <Main>
      <IntroductionWrapper />
      <Projects>
        <Projeto
          img="/bikcraft.jpg"
          title="Bikcraft"
          link="https://mateushenriquedev-bikcraft.netlify.app/"
          description="Esse foi meu primeiro projeto! Fiz ele no curso de Web Design Completo da Origamid. O site é sobre uma loja de venda de bicicletas personalizadas aonde eu comecei a ter uma boa base de Desenvolvimento Web. Site totalmente gerenciavel com wordpress"
        />

        <Projeto
          img="/abbot.jpg"
          title="Abbot"
          link="https://abbot.ga/"
          description="Esse projeto eu fiz após o site da Bikcraft citado anteriormente, foi feito para eu treinar um pouco sobre o que eu havia aprendido. Foi uma ótima experiência e eu desenvolvi bastante minhas habilidades. Esse é um exemplo de um site de roupas chiques e de marca."
          reverse
        />

        <Projeto
          img="/brafe_project.jpg"
          title="Brafé"
          link="https://mateushenriquedev-brafe.netlify.app/"
          description="Projeto feito para eu treinar minhas habilidades de posicionamento avançado de CSS, aprendi e evolui muito com esse projeto. Site de uma loja de venda de cafés."
        />

        <Projeto
          img="/surfbot.jpg"
          title="Surfbot"
          link="https://www.figma.com/proto/FJwTlfjxc6VWUXiNw0tjCGcM/surfbot?scaling=min-zoom&node-id=1%3A2"
          description="Fiz esse projeto com o intuito de melhorar minhas habilidade de Ui Design, foi uma ótima experiência a criação desse site. Esse é um site sobre contratação de aulas de surf!"
          reverse
        />

        <Projeto
          img="/wildbeast_project.jpg"
          title="Wildbeast"
          link="https://mateushenriquedev-wildbeast.netlify.app/"
          description="Esse na minha opinião foi um dos projetos mais bonitos que eu ja fiz, criei esse projeto quando estava aprendendo sobre Grid Layout. Mais uma ótima experiência, e esse é um exemplo de site OnePage (Página Única). Esse projeto foi um site que mostra algumas informações sobre alguns tipos de lobos"
        />

        <Projeto
          img="/darkside_project.jpg"
          title="The Dark Side"
          link="https://mateushenriquedev-thedarkside.netlify.app/"
          description="Esse projeto foi feito com o intuido de ser mais um exemplo de site OnePage. Site feito com amor e carinho como todos os outros. Esse é um site sobre venda de VPN."
          reverse
        />
      </Projects>
      <a href="https://github.com/mateushenrique-dev?tab=repositories">
        <CallToAction>Ver mais no gitbub</CallToAction>
      </a>
      <SubTitle>Esse Site</SubTitle>
      <Text center>
        O site foi feito totalmente por mim utilizando
        NextJs fiz esse site com o intuito de falar um pouco sobre mim e para
        mostrar meus projetos! Espero que tenha gostado do que eu faço,
        lembrando que todos os meus projetos são disponibilizados no meu{" "}
        <a href="https://github.com/mateushenrique-dev">GitHub</a>.
      </Text>
    </Main>
  );
}
