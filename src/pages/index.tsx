import styled from "styled-components";
import { Title } from "../components/commons/title";
import { IntroductionWrapper } from "../components/Introduction";
import { LastProjectsWrapper } from "../components/LastProjects";

export default function Home() {
  return (
    <main>
      <IntroductionWrapper />
      <LastProjectsWrapper />
    </main>
  )
}
