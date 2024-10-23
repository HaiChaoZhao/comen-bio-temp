'use client';

import { getOssUrl } from '@/lib/utils';
import { ConfigProvider, Tabs } from 'antd';
import { FC, PropsWithChildren } from 'react';
import './style.css';
import Image from 'next/image';
export const ProductTable: FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: '#1E5A32',
            itemColor: '#333',
            itemActiveColor: '#1E5A32',
            itemSelectedColor: '#1E5A32',
            itemHoverColor: '#1E5A32',
            titleFontSize: 20,
          },
        },
      }}
    >
      <Tabs
        tabPosition="left"
        items={[
          {
            label: '全自动血液细胞分析仪',
            key: '全自动血液细胞分析仪',
            children: (
              <ProductTabContent>
                <ProductCard
                  type="CH8600CRP"
                  title="全自动血液细胞分析仪"
                  description="CBC+DIFF/CBC+DIFF+CRP模式一键切换"
                  imgSrc={getOssUrl('product-card-1.png')}
                ></ProductCard>
                <ProductCard
                  type="CH8600CRP"
                  title="全自动血液细胞分析仪"
                  description="CBC+DIFF/CBC+DIFF+CRP模式一键切换"
                  imgSrc={getOssUrl('product-card-1.png')}
                ></ProductCard>
                <ProductCard
                  type="CH8600CRP"
                  title="全自动血液细胞分析仪"
                  description="CBC+DIFF/CBC+DIFF+CRP模式一键切换"
                  imgSrc={getOssUrl('product-card-1.png')}
                ></ProductCard>
                <ProductCard
                  type="CH8600CRP"
                  title="全自动血液细胞分析仪"
                  description="CBC+DIFF/CBC+DIFF+CRP模式一键切换"
                  imgSrc={getOssUrl('product-card-1.png')}
                ></ProductCard>
              </ProductTabContent>
            ),
          },
          {
            label: '特定蛋白分析仪',
            key: '特定蛋白分析仪',
            children: [],
          },
          {
            label: '化学发光',
            key: '化学发光',
            children: [],
          },
          {
            label: '生化免疫',
            key: '生化免疫',
            children: [],
          },
          {
            label: '凝血分析',
            key: '凝血分析',
            children: [],
          },
          {
            label: '流水线解决方案',
            key: '流水线解决方案',
            children: [],
          },
        ]}
      ></Tabs>
    </ConfigProvider>
  );
};

interface ProductTabProps {
  title: string;
  type: string;
  description: string;
  imgSrc: string;
}

function ProductCard(props: ProductTabProps) {
  return (
    <div className="bg-[#F9F9F9] pl-[56px] pr-[55px] pt-[35px] rounded-2xl w-[375px] h-[401px]">
      <Image
        src={props.imgSrc}
        alt={props.title}
        width={264}
        height={249}
      ></Image>
      <div className="text-base mt-5">
        <span className="text-[#005F2E]">{props.type}</span>
        <span>{props.title}</span>
      </div>
      <p className="mt-5 text-sm">{props.description}</p>
    </div>
  );
}

function ProductTabContent({ children }: PropsWithChildren) {
  return (
    <div className="gap-10 flex flex-wrap max-h-[800px] overflow-y-auto">
      {children}
    </div>
  );
}
