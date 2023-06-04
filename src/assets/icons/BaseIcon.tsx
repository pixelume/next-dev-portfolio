import clsx from 'clsx';
import { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

export const BaseIcon = ({ height, width, className, ...rest }: IconProps) => (
  <div className={clsx(width && `w-[${width}px]`, height && `h-[${height}px]`, className)}>
    <svg
      fill="currentColor"
      height="100%"
      width="100%"
      // viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    />
  </div>
);
