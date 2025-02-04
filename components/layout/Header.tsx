'use client';

import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const getTitle = () => {
    switch (pathname) {
      case '/':
        return 'Overview';
      case '/database':
        return 'Database';
      case '/task':
        return '任务';
      default:
        return 'Overview';
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="h-[env(safe-area-inset-top,20px)]" />
      <div className="flex items-center justify-center h-12">
        <div className="text-lg font-semibold">{getTitle()}</div>
      </div>
    </header>
  );
}