'use client';
import { FC } from 'react';
import { FloatButton } from 'antd';

export const BackTop: FC = () => {
  return (
    <FloatButton.Group>
      <FloatButton.BackTop />
    </FloatButton.Group>
  );
};
