import { quicksand, reenieBeanie } from '@/assets';
import clsx from 'clsx';
import { AnimatingParagraphs } from '../AnimatingParagraphs';
import { ContentBlock } from '../ContentBlock';
import LottieClient from '../LottieClient';
import walking from '@/assets/Lotties/walking.json';
import reactLogo from '@/assets/Lotties/react-logo.json';
import IconsComp from '../IconsComp';
import Drawer from '../Drawer';

export function Intro2() {
  return (
    <ContentBlock className="bg-gradient-to-r from-violet-500 to-fuchsia-500" slide entranceTrigger="click" id="Intro2">
        <LottieClient animationData={walking} />
        <AnimatingParagraphs>
          <div className={clsx('text-2xl md:text-4xl', quicksand.className)}>
            My <span className={clsx('text-5xl md:text-6xl', reenieBeanie.className)}>love</span> and expertise is in:
          </div>
          <div className={clsx('text-xl md:text-3xl w-full flex gap-x-2 items-center', quicksand.className)}>
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] flex flex-wrap shrink-0 items-center justify-center">
              <LottieClient animationData={reactLogo} />
            </div>
            <div>Complex React applications (SPA, SSG & SSR) & Typescript.</div>
          </div>
          <IconsComp />
          <Drawer />
        </AnimatingParagraphs>
      </ContentBlock>
  );
}
