import { reenieBeanie } from '@/assets';
import { GithubIcon, LinkedInIcon } from '@/assets/icons';
import clsx from 'clsx';

export default function Header() {
  return (
    <div className="flex flex-nowrap z-10 justify-around items-center w-full fixed top-0 left-0 bg-black backdrop-blur-lg bg-opacity-50 p-1">
      <div className={clsx('text-3xl', reenieBeanie.className)}>Pieter Wolmarans</div>
      <div className="flex text-md max-h-6 flex-nowrap gap-x-2 items-center">
          <a href="https://linkedin.com/in/pieter-wolmarans-5733b3241">
              <LinkedInIcon className="h-[20px] w-[20px]"/>
          </a>
          <a href="https://github.com/pixelume">
              <GithubIcon className="h-[20px] w-[20px]"/>
          </a>
          <span>+27 82 839 4959</span>
      </div>
    </div>
  );
}
