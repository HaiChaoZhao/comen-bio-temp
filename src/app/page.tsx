import { cn, getOssUrl } from '@/lib/utils';
import Image from 'next/image';
import { Arimo } from 'next/font/google';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { HeaderNav } from '@/components/Nav/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Tabs';
import { HotProducts } from '@/components/Home/HotProducts';

const arimo = Arimo({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="home">
      <HeaderNav className="bg-gradient-primary" />
      <Banner />
      <Research />
      <HotProducts />
      <AboutUs />
    </div>
  );
}

function Banner() {
  return (
    <div className="banner h-[710px] bg-gradient-to-r from-[#EBF6F4] to-[#F2F8F8]">
      <div className="banner-1 h-full container-left ">
        <div className="flex">
          <div className="mt-[177px]">
            <div className="title text-primary-text text-[64px] font-bold leading-[80px]">
              <span className="">至简高效</span>
              <span className="ml-8">精检不凡</span>
            </div>
            <div className="mt-5 text-primary-text font-bold leading-[60px] text-4xl">
              CH8600CRP
            </div>
            <p className="text-xl w-[540px] mt-5">
              一管血即可实现白细胞五分类及全程CRP检测；仿生样本混匀，具备手动进样和全自动进样模式，支持急诊随时插入
            </p>
          </div>
          <Image
            className="mt-[48px] ml-[10%]"
            alt="CH8600CRP"
            src={getOssUrl('banner-1-cover.png')}
            width={608}
            height={572}
          ></Image>
        </div>
      </div>
    </div>
  );
}

const searchList = [
  {
    name: 'HAEMATOCYTE',
    desc: '血液细胞分析',
    img: getOssUrl('haematocyte.png'),
  },
  {
    name: 'SPECIFIC PROTEIN',
    desc: '特定蛋白分析仪',
    img: getOssUrl('protein1.png'),
  },
  {
    name: 'BIOLUMINESCENCE',
    img: getOssUrl('biolumine.png'),
    desc: '化学发光',
  },
  {
    name: 'BIOCHEMISTRY',
    img: getOssUrl('biochemistry.png'),
    desc: '生化免疫',
  },
  {
    name: 'BLOOD COAGULATION',
    img: getOssUrl('bloodCoagulation.png'),
    desc: '凝血分析',
  },
  {
    name: 'PIPELINE',
    img: getOssUrl('pipeline.png'),
    desc: '流水线',
  },
];

function Research() {
  return (
    <div className="container mx-auto">
      <h2 className="mt-[120px] text-5xl font-medium text-center">专注研发</h2>
      <p className="mt-5">
        在产品领域，科曼生物目前已覆盖血球、特定蛋白分析仪、生化免疫、化学发光、凝血分析等五大领域系列，公司致力于提供科室综合解决方案，通过整合产品线和技术优势，帮助医疗机构提升检验效率和质量，为用户提供更加准确、及时的诊断服务。
      </p>
      <div className="mt-10 mb-[120px] flex flex-wrap gap-6">
        {searchList.map((el) => {
          return (
            <div
              className="w-[543px] h-[226px] bg-[#F9F9F9] pt-[71px] px-10 flex justify-between"
              key={el.name}
            >
              <div className="mt-1">
                <div className={cn(arimo.className, 'text-bold', 'text-2xl')}>
                  {el.name}
                </div>
                <div className="text-xl mt-5 font-medium">{el.desc}</div>
              </div>
              <div className="w-[84px] h-[84px]">
                <Image
                  src={el.img}
                  alt={el.name}
                  width={84}
                  height={84}
                ></Image>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="pt-[120px] pb-[80px]">
      <h2 className="font-medium text-5xl text-center">关于我们</h2>
      <div className="container mx-auto flex justify-between mt-20">
        <div className="w-[436px]">
          <h4 className="text-2xl font-bold">深圳市科曼生物医疗有限公司</h4>
          <p className="mt-10 leading-[26px]">
            科曼生物是科曼集团控股的子公司，是科曼集团战略布局深化的重要一步。通过业务分拆的形式，高效融合了科曼集团在团队、研发、市场方面的优势资源，旨在打造一个独立、专业且具备高度竞争力的医疗检验解决方案提供商。其成立不仅标志着科曼集团在业务拓展上的里程碑，更承载着科曼人对行业发展的深邃洞察与不懈追求。
          </p>
          <Link href="/about">
            <Button
              className="rounded-full w-[140px] mt-10"
              variant={'primary'}
            >
              了解更多{'>'}
            </Button>
          </Link>
        </div>
        <div className="ml-[106px]">
          <Image
            className="h-[382px] object-cover"
            src={getOssUrl('comen-building.png')}
            alt="comen总部大楼"
            width={541}
            height={566}
          ></Image>
        </div>
      </div>
    </div>
  );
}
