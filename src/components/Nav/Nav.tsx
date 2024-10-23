'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export const Nav: FC = () => {
  const pathname = usePathname();

  const items = [
    {
      href: 'product/solution',
      name: '产品解决方案',
    },
    {
      href: 'about',
      name: '关于我们',
    },
    {
      href: 'contact',
      name: '联系我们',
    },
  ];

  return (
    <nav className="mr-[106px]">
      <ul className="flex gap-[3.75rem]">
        {items.map((el) => {
          const actived = el.href === pathname;
          return (
            <li key={el.href}>
              <Link
                className={actived ? 'text-primary-text' : ''}
                href={el.href}
              >
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
