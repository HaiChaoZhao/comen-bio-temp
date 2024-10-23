import { BannerContainer } from '@/components/common/BannerContainer';
import { getOssUrl } from '@/lib/utils';
import Image from 'next/image';
import { ProductTable } from './component/ProductTab';

export default function ProductSolution() {
  return (
    <div className="product-solution">
      <BannerContainer className="h-[790px]">
        <Image
          src={getOssUrl('product-solution-banner.png')}
          alt="banner"
          width={1920}
          height={790}
        ></Image>
      </BannerContainer>
      <div className="mt-[120px] container">
        <h1 className="font-medium text-4xl">产品与解决方案</h1>
        <div className="mt-10 mb-[120px]">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}
