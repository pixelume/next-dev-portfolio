import { AnimatingParagraphs } from '../AnimatingParagraphs';
import LottieClient from '../LottieClient';
import clipboardCheck from '@/assets/Lotties/clipboardCheck.json';
import Image from 'next/image';

export function EyechartOnline() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-600 to-orange-600 w-full flex sm:items-stretch md:items-center justify-center min-h-screen relative snap-start snap-always pb-6 md:pb-0">
        <AnimatingParagraphs className="p-4 md:w-1/2 sm:h-screen md:h-full justify-around" autoTrigger={false} showScroll>
          <div className="flex items-center gap-x-2 border-b border-slate-50 pb-3">
            <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
              <LottieClient animationData={clipboardCheck} />
            </div>
            <div className="text-2xl md:text-4xl">
              Work Experience
              <br />
              <span className="text-lg md:text-2xl">September 2018 - August 2021</span>
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-x-5">
            <Image alt="Eyechart Online" src= "/eco.webp" width={64} height={64}/>
            <div className="text-lg md:text-2xl">Eyechart Online - Frontend React Developer</div>
          </div>
          <div className="text-md md:text-2xl text-left">
            Developed, maintained, and expanded features for the Eyechart Online web application designed for
            optometrists and ophthalmologists. Managed user authentication, Firebase real-time database, and license
            subscription management.
          </div>
        </AnimatingParagraphs>
      </div>
    </>
  );
}
