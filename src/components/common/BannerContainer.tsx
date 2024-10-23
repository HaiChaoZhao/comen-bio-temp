import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';

interface BannerContainerProps extends PropsWithChildren {
  className?: string;
}

export const BannerContainer: FC<BannerContainerProps> = ({
  children,
  className,
}) => {
  return <div className={cn(className, 'pt-20')}>{children}</div>;
};
