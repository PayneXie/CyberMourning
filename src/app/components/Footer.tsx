import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} 赛博灵堂 - VTuber永恒纪念馆
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              愿逝去的VTuber在数字世界长存，永远铭记
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              使用条款
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 