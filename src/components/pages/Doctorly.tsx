import { AnimatingParagraphs } from '../AnimatingParagraphs';
import LottieClient from '../LottieClient';
import clipboardCheck from '@/assets/Lotties/clipboardCheck.json';
import Image from 'next/image';

export function Doctorly() {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-600 to-sky-700 w-full flex sm:items-stretch md:items-center justify-center min-h-screen relative snap-start snap-always pb-6 md:pb-0">
        <AnimatingParagraphs className="p-4 md:w-1/2 sm:h-screen md:h-full justify-around" autoTrigger={false} showScroll>
          <div className="flex items-center gap-x-2 border-b border-slate-50 pb-3">
            <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
              <LottieClient animationData={clipboardCheck} />
            </div>
            <div className="text-2xl md:text-4xl">
              Work Experience
              <br />
              <span className="text-lg md:text-2xl">August 2022 - Present</span>
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-x-5">
            <Image alt="Doctorly" src='/doctorly.svg' height={40} width={150} />
            <div className="text-lg md:text-2xl">Senior Front-End React Engineer & Team Lead</div>
          </div>
          <div className="text-md md:text-2xl text-left">
            Served as team lead and front-end engineer in a cross-functional team, consisting of a PO, UI/UX designer,
            two .NET backend engineers, two front-end engineers, and a QA engineer. Primary responsibilities include
            developing practice management software for German medical professionals. In addition to development, I was
            strategically involved in discussions, decisions and the implementation of business processes, onboarding,
            and mentoring of new team members as well as managing members in my team.
          </div>
        </AnimatingParagraphs>
      </div>
    </>
  );
}
