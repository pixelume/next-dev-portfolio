'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import clsx from 'clsx';
import { reenieBeanie } from '@/assets';

const content = [
  `Hello! I'm a Javascript/Typescript Front End Developer highly proficient with React and its related ecosystem. With a strong foundation in design, I've become proficient in serverless architectures, the JAM stack, SPA, SSG, and SSR applications. My proficiency encompasses modern React, React Router, Redux, React Query, and an array of CSS tools including Tailwind, Styled Components, and Emotion.`,
  `In my professional journey, I've had successful runs with projects involving NextJs, Gatsby, and vanilla React SPAs, and I'm no stranger to integrating headless CMS's like Contentful and Strapi. Familiar with Gatsby, Firebase Realtime Database, Firebase Authentication, and Google Cloud Functions, I've developed a comprehensive skill set that allows me to deliver quality results consistently.`,
  `Coding and web development are more than just my job — they are my passion. I love the process of turning an idea into reality, solving complex problems, and creating digital solutions that make a real difference. I find it fascinating how technology simplifies life — whether it's ordering an Uber, getting groceries delivered, or booking accommodation from the comfort of your phone. This is the magic of technology I strive to create.`,
  `While my career started in optometry, technology and development have always been where my heart lies. I created Eyechart Online, a web application for eyecare professionals, which I successfully launched commercially over 3 years ago. This passion project not only has a growing base of paid subscribers but also symbolizes my transition from optometry to tech, testifying to my ability to adapt and excel.`,
];

export default function Drawer() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="text-white border-2 bg-blue-500 rounded-lg text-xs md:text-sm p-1 md:p-2 shadow-md hover:shadow-lg animate-bounce absolute z-20 right-0">
          More about me
        </button>
      </Dialog.Trigger>
      {/* <Dialog.Portal> */}
      <Dialog.Overlay className="fixed z-20 top-0 bottom-0 left-0 right-0 flex justify-end md:justify-center items-center bg-black bg-opacity-80 animate-overlayShow">
        <Dialog.Content
          aria-describedby={undefined}
          className="overflow-y-auto relative sm:rounded-l-lg md:rounded-3xl w-11/12 md:w-1/2 h-full md:h-2/3 bg-gradient-to-r from-cyan-500 to-blue-500 p-5 md:p-7 animate-contentShow"
        >
          <Dialog.Close className="absolute left-0 top-0 text-white text-2xl md:text-2xl cursor-pointer m-3 hover:bg-black px-2 hover:bg-opacity-50 rounded-md">X</Dialog.Close>
          <Dialog.Title asChild>
            <div className={clsx(reenieBeanie.className, 'text-4xl text-center')}>About me</div>
          </Dialog.Title>
          {/* <Dialog.Description /> */}
          {/* <Dialog.Close /> */}
          {content.map((pg, i) => (
            <p key={`amp-${i}`} className="text-sm md:text-lg mt-5">
              {pg}
            </p>
          ))}
        </Dialog.Content>
      </Dialog.Overlay>
      {/* </Dialog.Portal> */}
    </Dialog.Root>
  );
}
