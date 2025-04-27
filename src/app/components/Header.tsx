import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-black/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-accent">赛博灵堂</span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">VTuber永恒纪念馆</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors">
            首页
          </Link>
          <Link href="/categories" className="text-sm hover:text-primary transition-colors">
            分类
          </Link>
          <Link href="/new-memorial" className="text-sm hover:text-primary transition-colors">
            添加纪念
          </Link>
          <Link href="/about" className="text-sm hover:text-primary transition-colors">
            关于
          </Link>
        </nav>
        
        <button className="md:hidden" aria-label="菜单">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
} 