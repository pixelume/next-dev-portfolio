import { AnimatingParagraphs } from '../AnimatingParagraphs';
import LottieClient from '../LottieClient';
import clipboardCheck from '@/assets/Lotties/clipboardCheck.json';
import Image from 'next/image';

export function Hyperboliq() {
  return (
    <>
      <div className="bg-gradient-to-r from-fuchsia-700 to-purple-700 w-full flex sm:items-stretch md:items-center justify-center min-h-screen relative snap-start snap-always pb-6 md:pb-0">
        <AnimatingParagraphs className="p-4 md:w-1/2 sm:h-screen md:h-full justify-around" autoTrigger={false} showScroll>
          <div className="flex items-center gap-x-2 border-b border-slate-50 pb-3">
            <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
              <LottieClient animationData={clipboardCheck} />
            </div>
            <div className="text-2xl md:text-4xl">
              Work Experience
              <br />
              <span className="text-lg md:text-2xl">September 2021 - August 2022</span>
            </div>
          </div>
            <div className="flex justify-center items-center w-full gap-x-5">
              <Image alt="Hyperboliq" src="/hyperboliq.webp" width={64} height={64}/>
              <div className="text-lg md:text-2xl">Frontend React Engineer</div>
            </div>
          <div className="text-md md:text-2xl text-left">
            Key contributor in the digital products team, maintaining and expanding new features on web applications,
            and developing new apps for MIT, a top-ranking university in the USA. Sole developer responsible for front
            end implementation of PI-Dashboard web inteface, a multi-platform research dashboard application.
          </div>
        </AnimatingParagraphs>
      </div>
    </>
  );
}
