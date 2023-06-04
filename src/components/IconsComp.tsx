import { quicksand } from '@/assets';
import {
  CssIcon,
  GatsbyIcon,
  HtmlIcon,
  ReactIcon,
  JavascriptIcon,
  TypescriptIcon,
  NextIcon,
  MuiIcon,
  ReactRouterIcon,
  StrapiIcon,
  TailwindIcon,
  ReduxIcon,
} from '@/assets/icons';
import clsx from 'clsx';

interface IconProps {
  className?: string;
  height?: number;
  width?: number;
  text: string;
}

const Icon = ({ text, ...rest }: IconProps) => {
  switch (text) {
    case 'CSS':
      return <CssIcon {...rest} />;
    case 'React':
      return <ReactIcon {...rest} />;
    case 'Gatsby':
      return <GatsbyIcon {...rest} />;
    case 'HTML':
      return <HtmlIcon {...rest} />;
    case 'Javascript':
      return <JavascriptIcon {...rest} />;
    case 'Typescript':
      return <TypescriptIcon {...rest} />;
    case 'NextJs':
      return <NextIcon {...rest} />;
    case 'MUI':
      return <MuiIcon {...rest} />;
    case 'React Router':
      return <ReactRouterIcon {...rest} />;
    case 'Strapi':
      return <StrapiIcon {...rest} />;
    case 'Tailwind':
      return <TailwindIcon {...rest} />;
    case 'Redux':
      return <ReduxIcon {...rest} />;
    default:
      return null;
  }
};

const icons = [
  'CSS',
  'React',
  'Gatsby',
  'HTML',
  'Javascript',
  'Typescript',
  'NextJs',
  'MUI',
  'React Router',
  'Strapi',
  'Tailwind',
  'Redux'
];

export default function IconsComp() {
  return (
      <div className="flex flex-wrap mt-5 justify-center md:justify-start gap-2">
        {icons.map((icon, i) => (
          <div key={`${icon}-${i}`} className="flex flex-col items-center gap-y-2">
            <Icon text={icon} className="w-[24px] h-[24px] md:w-[50px] md:h-[50px]" />
            <div className={clsx('text-sm md:text-md', quicksand.className)}>{icon}</div>
          </div>
        ))}
      </div>
  );
}
