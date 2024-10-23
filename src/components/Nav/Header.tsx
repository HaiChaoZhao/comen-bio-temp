'use client';
import React, { FC, useEffect, useState } from 'react';
import { Logo } from '../common/Logo';
import Image from 'next/image';
import { config } from '../common/config';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ToolTip';
import { Nav } from './Nav';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useThrottleFn } from 'ahooks';

export const HeaderNav: FC<{ className?: string }> = ({ className }) => {
  const [curOffsetTop, setCurOffsetTop] = useState(0);

  const { run } = useThrottleFn(setCurOffsetTop, {
    wait: 200,
  });

  useEffect(() => {
    const handleScroll = () => {
      run(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        className,
        'h-20 fixed top-0 transition-all duration-100 w-[100vw] z-50',
      )}
      style={{
        background: curOffsetTop > 80 ? '#fff' : 'transparent',
      }}
    >
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <Logo className="pt-2" />
        </Link>
        <div className="flex items-center">
          <Nav />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="w-10 cursor-not-allowed bg-[#F9F9F9] h-10 rounded-full center">
                  <Image
                    src={`${config.ossUrl}/search.png`}
                    alt="search"
                    width={16}
                    height={16}
                  ></Image>
                </div>
              </TooltipTrigger>
              <TooltipContent>功能暂未开放</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
};
