'use client';

import clsx from 'clsx';
import { Children, useState } from 'react';
import FlipMove from 'react-flip-move';
import { reenieBeanie } from '../assets';

export interface ContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  slide?: boolean;
  entranceTrigger?: 'hover' | 'click';
}

export function ContentBlock({ children, className, slide, entranceTrigger = 'hover', ...rest }: ContentBlockProps) {
  const childrenArray = Children.toArray(children);
  const [childrenToRender, setChildrenToRender] = useState(() => [childrenArray[0]]);

  const hasEntered = childrenToRender.length > 1;

  const handleEntranceTrigger = () => {
    if (!hasEntered) {
      setChildrenToRender(childrenArray);
    }
  };

  return (
    <div
      className={clsx(
        'w-full flex flex-wrap items-center justify-center min-h-screen relative snap-start snap-always pb-6 md:pb-0',
        className,
        { 'content-start': childrenToRender.length > 1 },
        'md:content-center'
      )}
      {...rest}
    >
      <FlipMove typeName={null} duration={500} enterAnimation="fade">
        {childrenToRender.map((child, index) => {
          const isFirstChild = index === 0;
          return (
            <div
              key={`child-${index}`}
              onMouseEnter={isFirstChild && entranceTrigger === 'hover' ? handleEntranceTrigger : undefined}
              onClick={isFirstChild && entranceTrigger === 'click' ? handleEntranceTrigger : undefined}
              className={clsx(
                'overflow-visible relative w-[350px]',
                {'md:w-[450px]': isFirstChild},
                { 'md:w-5/12': !isFirstChild },
                // { 'md:w-[550px] ': isFirstChild && !hasEntered && entranceTrigger === 'click' },
                // { 'md:w-[350px] ': isFirstChild && hasEntered && entranceTrigger === 'click' },
                { 'md:ml-6': !isFirstChild },
                { 'md:animate-slide': slide && !hasEntered },
                { 'cursor-pointer': entranceTrigger === 'click' && !hasEntered },
              )}
            >
              {entranceTrigger === 'click' && isFirstChild && !hasEntered && (
                <div
                  className={clsx(reenieBeanie.className, 'absolute text-4xl top-[-20px] w-full flex justify-center')}
                >
                  click me
                </div>
              )}
              {child}
            </div>
          );
        })}
      </FlipMove>
      {hasEntered && (
        <div
          className={clsx(
            'absolute bottom-0 left-0 w-full flex justify-center text-3xl md:text-4xl pb-1 md:pb-5',
            reenieBeanie.className
          )}
        >
          Scroll down
        </div>
      )}
    </div>
  );
}
