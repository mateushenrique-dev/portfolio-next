import Link from "next/link";
import styled from "styled-components";
import { AuxText } from "../../commons/auxText";
import { CallToAction } from "../../commons/callToAction";
import { SubTitle } from "../../commons/subtitle";
import { Text } from "../../commons/text";
import { Service } from "./styles/Services";
import { Services } from "./styles/Services";
import { Container } from "./styles/Container";

export function ServicesWrapper() {
  return (
    <Container>
      <SubTitle>Serviços</SubTitle>
      <Services>
        <Service>
          <img src="/computador.svg" alt="" />
          <AuxText>Criação de Sites</AuxText>
          <Text center>
            Criação de vários tipos de sites: Institucionais, Dinâmicos, One
            Page, Hotsites, Blogs, e muito mais. Além disso, meus sites são 100%
            responsivos e com um ótimo SEO.
          </Text>
        </Service>
        <Service>
          <img src="/lupa.svg" alt="" />
          <AuxText>SEO</AuxText>
          <Text center>
            Sites com uma ótima otimização ficarão sempre no topo das buscas com
            palavras chaves que seus clientes buscam.
          </Text>
        </Service>
        <Service>
          <img src="/engrenagem.svg" alt="" />
          <AuxText>Manutenção de Sites</AuxText>
          <Text center>
            O Site da sua empresa precisa de manutenção ou alterações? Posso te
            ajudar com isso!
          </Text>
        </Service>
      </Services>
      <Link href="/contato">
        <CallToAction>Contato</CallToAction>
      </Link>
    </Container>
  );
}
