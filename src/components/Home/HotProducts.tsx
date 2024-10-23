import { getOssUrl } from '@/lib/utils';
import { Button } from '../Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductItem {
  type: string;
  name: string;
  desc: string;
  img: string;
  href?: string;
}

interface Series {
  name: string;
  children: ProductItem[];
}

const productSeries: Series[] = [
  {
    name: '系列1',
    children: [
      {
        type: 'CH8600CRP',
        name: '全自动血液细胞分析仪',
        desc: 'CBC+DIFF/CBC+DIFF+CRP模式一键切换',
        img: getOssUrl('product-1.png'),
      },
      {
        type: '型号',
        name: '名称',
        desc: 'CBC+DIFF/CBC+DIFF+CRP模式一键切换',
        img: getOssUrl('product-2.png'),
      },
      {
        type: 'CH8600CRP',
        name: '全自动血液细胞分析仪',
        desc: 'CBC+DIFF/CBC+DIFF+CRP模式一键切换',
        img: getOssUrl('product-1.png'),
      },
      {
        type: 'CH8600CRP',
        name: '全自动血液细胞分析仪',
        desc: 'CBC+DIFF/CBC+DIFF+CRP模式一键切换',
        img: getOssUrl('product-1.png'),
      },
    ],
  },
  {
    name: '系列2',
    children: [
      {
        type: 'CH8600CRP',
        name: '全自动血液细胞分析仪',
        desc: 'CBC+DIFF/CBC+DIFF+CRP模式一键切换',
        img: getOssUrl('product-1.png'),
      },
    ],
  },
];

export const HotProducts: FC = () => {
  const trigger = productSeries.map((el) => el.name);

  return (
    <div className="bg-[#FAFCFC] pt-20 pb-[88px]">
      <h2 className="text-[48px] text-center ">热门产品</h2>
      <p className="mt-5 text-center">为用户提供更加准确、及时的产品服务</p>
      <div className="text-center mt-5">
        <Button variant="primary" className="rounded-full">
          了解更多 {'>'}
        </Button>
      </div>
      <div className="mt-5 container-left">
        <Tabs defaultValue={trigger[0]}>
          <TabsList className="inline-flex gap-10">
            {trigger.map((item) => {
              return (
                <TabsTrigger asChild key={item} value={item}>
                  <Button
                    className="w-[160px] text-white rounded-full
                    transition-all
                  data-[state=inactive]:bg-[#ADADAD] 
                  data-[state=active]:bg-[#00A651]"
                  >
                    {item}
                  </Button>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {productSeries.map((el) => {
            return (
              <TabsContent
                className="data-[state=active]:flex mt-10 gap-6 pb-8 overflow-x-auto pr-8"
                style={{
                  width: 'calc(78vw)',
                }}
                key={`contenxt-${el.name}`}
                value={el.name}
              >
                {el.children.map((p) => {
                  return <ProductCard key={p.type} product={p}></ProductCard>;
                })}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: ProductItem;
}
function ProductCard(props: ProductCardProps) {
  const { product } = props;

  return (
    <div
      className="
      
    hover:bg-[#F2F8F8] 
     flex-shrink-0
    transition-all duration-300
    w-[462px] h-[500px] bg-white rounded-[24px]
    flex flex-col-reverse items-center
    "
    >
      <Link className="mt-2" href={product.href || ''}>
        <Button className="text-primary-text" variant="link">
          了解更多 &gt;
        </Button>
      </Link>
      <p className="mt-5">{product.desc}</p>
      <div className="text-2xl mt-10">
        <span className="text-primary-text">{product.type}</span>
        <span>{product.name}</span>
      </div>
      <Image
        className="w-[382px] h-[312px]"
        alt={product.type}
        src={product.img}
        width={382}
        height={312}
      ></Image>
    </div>
  );
}
