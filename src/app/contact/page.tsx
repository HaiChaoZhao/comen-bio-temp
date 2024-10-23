'use client';
import { Button } from '@/components/Button';
import { BannerContainer } from '@/components/common/BannerContainer';
import { getOssUrl } from '@/lib/utils';
import { ConfigProvider, Flex, Form, Input } from 'antd';
import Image from 'next/image';

export default function ContactUs() {
  return (
    <div className="contactus">
      <BannerContainer>
        <Image
          src={getOssUrl('contact-banner.png')}
          alt="contact-banner"
          width={1920}
          height={790}
        ></Image>
      </BannerContainer>
      <div className="container mt-[143px] mb-[120px]">
        <h1 className="font-medium text-4xl">合作联系</h1>
        <div>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBorderColor: '#1E5A32',
                  inputFontSizeLG: 24,
                  paddingBlockLG: 22,
                },
              },
            }}
          >
            <Form size="large" className="mt-[50px] text-2xl">
              <Flex align="center" gap={105}>
                <Form.Item noStyle>
                  <Input
                    className="w-[543px] flex-shrink-0"
                    placeholder="公司名称"
                    variant="filled"
                  ></Input>
                </Form.Item>
                <div className="flex-grow-0">
                  地址：深圳市光明区马田街道马山头社区钟表基地瑞辉大厦902
                </div>
              </Flex>
              <Flex align="center" gap={105} className="mt-8">
                <Form.Item noStyle>
                  <Input
                    className="w-[543px]"
                    placeholder="姓名"
                    variant="filled"
                  ></Input>
                </Form.Item>
                <div>电话：400-700-9288</div>
              </Flex>
              <Flex align="center" gap={105} className="mt-8">
                <Form.Item noStyle>
                  <Input
                    className="w-[543px]"
                    placeholder="联系电话"
                    variant="filled"
                  ></Input>
                </Form.Item>
                <div>邮箱：service@comenbio.com</div>
              </Flex>
              <Button
                variant="primary"
                className="bg-[#1E5A32] text-2xl rounded-3xl mt-8 w-[160px] h-[60px]"
              >
                提交
              </Button>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}
