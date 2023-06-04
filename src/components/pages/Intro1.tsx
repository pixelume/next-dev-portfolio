import { quicksand, reenieBeanie } from '@/assets';
import clsx from 'clsx';
import { AnimatingParagraphs } from '../AnimatingParagraphs';
import { ContentBlock } from '../ContentBlock';
import LottieClient from '../LottieClient';
import developerYoga from '@/assets/Lotties/developer-yoga.json';

export function Intro1() {
  return (
    <ContentBlock className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <LottieClient animationData={developerYoga} />
      <div>
        <AnimatingParagraphs>
          <div className={clsx('text-2xl md:text-4xl', quicksand.className)}>Hi there!</div>
          <div className={clsx('text-2xl md:text-4xl', quicksand.className)}>
            I&apos;m&nbsp;&nbsp;
            <span className={clsx('text-5xl md:text-6xl', reenieBeanie.className)}>Pieter Wolmarans</span>
          </div>
          <div className={clsx('text-xl md:text-3xl', quicksand.className)}>
            A frontend engineer based in Port Elizabeth, South Africa.
          </div>
          <div className={clsx('text-2xl md:text-4xl', quicksand.className)}>This is my developer portfolio.</div>
        </AnimatingParagraphs>
      </div>
    </ContentBlock>
  );
}
