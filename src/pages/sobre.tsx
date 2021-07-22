import React from 'react';
import IntroductionWrapper from '../components/Sobre/Introduction';
import { MyHistory } from '../components/Sobre/MyHistory';
import { ServicesWrapper } from '../components/Sobre/Services';
import { StacksWrapper } from '../components/Sobre/Stacks';

export default function Sobre() {
  return (
    <main>
      <IntroductionWrapper />
      <MyHistory />
      <StacksWrapper />
      <ServicesWrapper />
    </main>
  );
}
