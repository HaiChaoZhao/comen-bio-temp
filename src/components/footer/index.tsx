import { FC } from 'react';
import { Logo } from '../common/Logo';
import Link from 'next/link';
import { cn, getOssUrl } from '@/lib/utils';
import Image from 'next/image';

const productsLink: Item[] = [
  {
    name: '产品&解决方案',
    href: '',
  },
  {
    name: '全自动血液细胞分析仪',
    href: '',
  },
  {
    name: '特定蛋白分析仪',
    href: '',
  },
  {
    name: '化学发光',
    href: '',
  },
  {
    name: '生化免疫',
    href: '',
  },
  {
    name: '凝血分析',
    href: '',
  },
  {
    name: '流水线解决方案',
    href: '',
  },
];

const aboutItems: Item[] = [
  {
    name: '关于我们',
    href: '/about',
  },
  {
    name: '了解科曼生物',
    href: '',
  },
  {
    name: '企业文化',
    href: '',
  },
  {
    name: '质量保证',
    href: '',
  },
];

const joinUsItems: Item[] = [
  {
    name: '加入我们',
    href: '',
  },
  {
    name: '校园招聘',
    href: '',
  },
  {
    name: '社会招聘',
    href: '',
  },
];
export const Footer: FC = () => {
  return (
    <footer className="bg-[#FAFCFC] ">
      <div className="container mx-auto pt-[50px]">
        <div className="flex justify-between border-solid border-[#E8E8E8] border-b pb-2">
          <Logo></Logo>
          <div>
            <span>邮箱：service@comenbio.com</span>
            <span className="pl-6">服务热线：400-700-9288</span>
          </div>
        </div>
        <div className="mt-10 mb-[60px]">
          <div className="flex justify-between">
            <div className="flex ">
              <LinkGroup items={productsLink}></LinkGroup>
              <LinkGroup classNames="ml-[88px]" items={aboutItems}></LinkGroup>
              <LinkGroup
                classNames="ml-[120px]"
                items={joinUsItems}
              ></LinkGroup>
            </div>
            <div className="mp-qr-code flex gap-[35px]">
              <div className="text-center">
                <Image
                  className="mx-auto"
                  width={100}
                  height={100}
                  src={getOssUrl('qr1.png')}
                  alt="科曼生物品牌公众号"
                ></Image>
                <div className="mt-2">科曼生物品牌公众号</div>
              </div>
              <div>
                <Image
                  className="mx-auto"
                  width={100}
                  height={100}
                  src={getOssUrl('qr2.png')}
                  alt="科曼生物客服服务中心"
                ></Image>
                <div className="mt-2">科曼生物客服服务中心</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-solid border-[#E8E8E8] pt-5">
          <span>深圳市科曼生物医疗有限公司</span>
          <span className="pl-6">Shenzhen Comen Biomedical Co., Ltd.</span>
        </div>
      </div>
    </footer>
  );
};

interface Item {
  name: string;
  href: string;
}

interface LinkGroup {
  items: Item[];
  classNames?: string;
}

function LinkGroup(props: LinkGroup) {
  const { items } = props;
  const [title, ...linkItems] = items;

  return (
    <ul className={cn(props.classNames)}>
      <li className="leading-[23px] mb-5">
        <Link href={title.href}>{title.name}</Link>
      </li>
      {linkItems.map((el) => {
        return (
          <li key={el.name} className="leading-[30px] text-[#666666]">
            <Link href={el.href}>{el.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
