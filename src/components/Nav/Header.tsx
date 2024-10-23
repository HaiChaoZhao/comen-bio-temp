import React, { FC } from 'react';
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

export const HeaderNav: FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={cn(className, 'h-20')}>
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
