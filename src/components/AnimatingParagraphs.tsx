'use client';

import clsx from 'clsx';
import { Children, useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import { reenieBeanie } from '@/assets';

interface AnimatingParagraphsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  autoTrigger?: boolean;
  showScroll?: boolean;
}

export function AnimatingParagraphs({ children, className, autoTrigger = true, showScroll = false, ...rest }: AnimatingParagraphsProps) {
  const childrenArray = Children.toArray(children);
  const [childrenToRender, setChildrenToRender] = useState(() => [childrenArray[0]]);
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  const hasEntered = childrenToRender.length > 1;

  useEffect(() => {
    if (autoTrigger || isVisible) {
      if (childrenToRender.length < childrenArray.length) {
        setTimeout(() => {
          setChildrenToRender(childrenArray.slice(0, childrenToRender.length + 1));
        }, 1000)
      }
    }
  }, [childrenArray, childrenToRender.length, autoTrigger, isVisible]);

  return (
    <div ref={ref} className={clsx('w-full flex flex-col items-center text-center md:text-left md:items-start justify-between gap-y-3 md:gap-y-6 relative', className)} {...rest}>
      <FlipMove typeName={null} duration={500} enterAnimation="fade" >
        {childrenToRender.map((child, index) => (
          <div key={`par-child-${index}`} className="w-full">
            {child}
          </div>
        ))}
      </FlipMove>
      {hasEntered && showScroll && (
        <div
          className={clsx(
            'fixed bottom-0 left-0 w-full flex justify-center text-3xl md:text-4xl pb-1 md:pb-5',
            reenieBeanie.className
          )}
        >
          Scroll down
        </div>
      )}
    </div>
  );
}
