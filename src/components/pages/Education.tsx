import { AnimatingParagraphs } from '../AnimatingParagraphs';
import { ContentBlock } from '../ContentBlock';
import LottieClient from '../LottieClient';
import books from '@/assets/Lotties/books.json';
import Image from 'next/image';

export function Education() {
  return (
    <ContentBlock className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <LottieClient animationData={books} />
      <div>
        <AnimatingParagraphs>
          <div className="text-2xl md:text-4xl">
            Education
          </div>
          <div className="flex justify-center items-center w-full gap-x-5">
            <Image alt="Uop" src="/uop.webp" width={64} height={64} className="w-[45px] h-[45px] md:w-[64px] md:h-[64px]"/>
            <div className="text-md md:text-xl text-left">
              University of the People, Pasadena, California - Studied towards B.Sc, Computer Science (Incomplete, CGPA
              of 3.67) (Jul 2017 – Sep 2018)
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-x-5">
            <Image alt="UJ" src="/uj.webp" width={64} height={64} className="w-[45px] h-[45px] md:w-[64px] md:h-[64px]" />
            <div className="text-md md:text-xl text-left">
              University of Johannesburg - Bachelor of Optometry (Jan 1996 – Dec 2001)
            </div>
          </div>
        </AnimatingParagraphs>
      </div>
    </ContentBlock>
  );
}
