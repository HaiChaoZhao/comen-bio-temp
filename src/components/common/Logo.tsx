import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { config } from './config';

export type LogoProps = Omit<ImageProps, 'src' | 'alt'>;

export const Logo: FC<LogoProps> = (props) => {
  return (
    <Image
      priority
      src={`${config.ossUrl}/logo.png`}
      width={168}
      height={56}
      alt="Biomedical Comen Logo"
      {...props}
    ></Image>
  );
};
