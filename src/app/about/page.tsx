import { BannerContainer } from '@/components/common/BannerContainer';
import { getOssUrl } from '@/lib/utils';
import Image from 'next/image';

export default function About() {
  return (
    <div className="about ">
      <BannerContainer>
        <Image
          className="mx-auto"
          src={getOssUrl('about.png')}
          alt="about"
          width={1920}
          height={790}
          priority
        ></Image>
      </BannerContainer>
      <div className="container mt-[120px]">
        <div className="text-center">
          <h1 className="text-5xl font-medium">深圳科曼生物医疗有限公司</h1>
          <p className="text-2xl mt-3">Shenzhen Comen Biomedical Co., Ltd.</p>
          <div className="text-[#242D36] mt-10 text-left">
            <p className="">
              科曼生物是科曼集团控股的子公司，是科曼集团战略布局深化的重要一步。通过业务分拆的形式，高效融合了科曼集团在团队、研发、市场方面的优势资源，旨在打造一个独立、专业且具备高度竞争力的医疗检验解决方案提供商。其成立不仅标志着科曼集团在业务拓展上的里程碑，更承载着科曼人对行业发展的深邃洞察与不懈追求。
            </p>
            <p className="mt-4">
              在产品领域，科曼生物目前已覆盖血球、生化、发光、凝血、特定蛋白等五大领域系列，公司致力于提供科室综合解决方案，通过整合产品线和技术优势，帮助医疗机构提升检验效率和质量，为用户提供更加准确、及时的诊断服务。公司高素质高学历研发人员75人，其中硕博比例占25%。截至目前，公司已取得450项知识产权。
            </p>
          </div>
        </div>
        <div className="flex mt-10 mb-[120px] justify-between">
          <AboutItem
            item={{
              title: '硕博人数',
              data: '20%',
              imgSrc: getOssUrl('about-1.png'),
            }}
          ></AboutItem>
          <AboutItem
            item={{
              title: '研发人员',
              data: '75+',
              imgSrc: getOssUrl('about-2.png'),
            }}
          ></AboutItem>
          <AboutItem
            item={{
              title: '专利数',
              data: '450+',
              imgSrc: getOssUrl('about-3.png'),
            }}
          ></AboutItem>
          <AboutItem
            item={{
              title: '仪器数',
              data: '500+',
              imgSrc: getOssUrl('about-4.png'),
            }}
          ></AboutItem>
        </div>
      </div>
      <div className="bg-[#FAFCFC] pb-20">
        <div className="container pt-20">
          <h1 className="text-5xl text-center ">我们的业务遍布全球</h1>
          <p className="text-[#242D36] mt-10">
            母公司深圳市科曼医疗设备有限公司，成立于2002年，是全球知名的医疗设备制造商，已上市200余款产品。全球分布40多家分公司，为190多个国家和地区，27万余家医院及医疗保障机构提供优质的产品和服务。2020年起布局体外诊断领域，并快速建立优势，成为企业第二增长曲线突破口。
          </p>
          <Image
            className="mx-auto mt-10"
            src={getOssUrl('world-1.png')}
            alt="world"
            width={947}
            height={467}
          ></Image>
        </div>
      </div>
      <div className="mt-[120px] container">
        <h1 className="text-5xl text-center">企业文化</h1>
        <p className="text-[#242D36] mt-10">
          科曼生物将坚定不移聚焦主业，聚力提升核心业务竞争力，加速国产替代进程，引领行业高质量发展。同时，也将依托集团优势，继续深化技术创新和产品研发，为科曼集团的长期发展和多元化战略贡献力量。
        </p>
        <div className="flex justify-between mt-10 mb-[120px]">
          <CultureItem
            item={{
              imgSrc: getOssUrl('culture-1.png'),
              title: '企业宗旨',
              data: '一切以终端用户为中心',
            }}
          ></CultureItem>
          <CultureItem
            item={{
              imgSrc: getOssUrl('culture-2.png'),
              title: '企业愿景',
              data: '科曼与世界共享',
            }}
          ></CultureItem>
          <CultureItem
            item={{
              imgSrc: getOssUrl('culture-3.png'),
              title: '企业文化',
              data: '理想 荣誉 奋斗',
            }}
          ></CultureItem>
        </div>
      </div>
    </div>
  );
}

interface AboutItem {
  title?: string;
  data?: string;
  imgSrc?: string;
}

function AboutItem(props: { item: AboutItem }) {
  const { item } = props;

  return (
    <div className="flex items-center">
      <div>
        <div className="text-4xl text-[#1E5A32]">{item.data}</div>
        <p className="mt-4">{item.title}</p>
      </div>
      <div className="ml-[70px]">
        {item.imgSrc && (
          <Image
            width={42}
            height={42}
            src={item.imgSrc}
            alt={item.title || ''}
          ></Image>
        )}
      </div>
    </div>
  );
}

function CultureItem({ item }: { item: AboutItem }) {
  return (
    <div className="bg-[#F9F9F9] pl-10 pt-10 w-[300px] h-[200px] border-solid border-[#1E5A32] border-b-8">
      {item.imgSrc && (
        <Image
          src={item.imgSrc}
          alt={item.title || ''}
          width={24}
          height={24}
        ></Image>
      )}
      <div className="mt-5">{item.title}</div>
      <p className="mt-5 text-sm text-[#666666]">{item.data}</p>
    </div>
  );
}
