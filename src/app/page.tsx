import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharacterCard from "./components/CharacterCard";
import { getFeaturedCharacters, getAllTags } from "./utils/characters";

export default function Home() {
  const featuredCharacters = getFeaturedCharacters();
  const allTags = getAllTags();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* 英雄区 */}
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image 
            src="/hero-background.svg" 
            alt="赛博灵堂" 
            fill 
            priority
            className="object-cover opacity-90"
          />
          
          {/* 烛光效果 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="memorial-flame w-8 h-12 bg-yellow-500 rounded-full blur-md mb-4"></div>
            <div className="w-8 h-8 bg-gradient-to-t from-yellow-500 to-red-500 rounded-full blur-sm"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center mt-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 memorial-text tracking-wider">赛博灵堂</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 memorial-text">愿逝去的VTuber在数字世界得到永恒的安息</p>
            <div className="section-divider w-24 mx-auto mb-10"></div>
            <div className="flex justify-center">
              <Link href="/all" className="bg-accent/80 hover:bg-accent text-white font-medium py-2 px-6 rounded-full transition-colors backdrop-blur-sm">
                献上哀思
              </Link>
              <Link href="/new-memorial" className="ml-4 bg-black/30 hover:bg-black/50 text-white/90 font-medium py-2 px-6 rounded-full backdrop-blur-sm transition-colors border border-white/20">
                添加纪念
              </Link>
            </div>
          </div>
        </section>

        {/* 特色角色区 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-2 text-center memorial-text">永恒纪念</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">缅怀那些曾照亮我们生活的虚拟之星</p>
            <div className="section-divider w-16 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {featuredCharacters.map(character => (
                <CharacterCard
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  title={character.title}
                  image={character.image}
                  deathYear={character.deathYear}
                  birthYear={character.birthYear}
                  series={character.series}
                />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/all" className="text-accent hover:text-accent/80 font-medium inline-flex items-center transition-colors">
                查看全部纪念
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 分类区 */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-2 text-center memorial-text">按类别悼念</h2>
            <p className="text-center text-gray-400 mb-8">选择您想要缅怀的VTuber类别</p>
            <div className="section-divider w-16 mx-auto mb-12"></div>
            <div className="flex flex-wrap justify-center gap-3">
              {allTags.map(tag => (
                <Link 
                  key={tag}
                  href={`/tag/${tag}`}
                  className="bg-gray-900/80 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-accent/80 hover:text-white transition-colors border border-gray-800"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 介绍区 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 memorial-text">关于赛博灵堂</h2>
              <div className="section-divider w-12 mx-auto mb-8"></div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                赛博灵堂是为逝去的VTuber打造的数字纪念空间。在虚拟与现实的交界处，
                我们为那些已经"毕业"、"解约"或因其他原因离开我们的虚拟偶像提供一个永恒的栖息之地。
                无论是因合约到期的告别，还是突如其来的解约，这里将永远记住他们曾带给我们的感动与欢乐。
              </p>
              <Link href="/about" className="text-accent hover:text-accent/80 font-medium transition-colors">
                了解更多
              </Link>
            </div>
          </div>
        </section>
        
        {/* 献花区 */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 memorial-text">献上哀思</h2>
              <div className="section-divider w-12 mx-auto mb-8"></div>
              <p className="text-gray-400 mb-8">留下您对已逝VTuber的思念之情</p>
              <div className="flex justify-center space-x-6">
                <div className="flex flex-col items-center">
                  <button className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors">
                    <span className="text-xl">🌹</span>
                  </button>
                  <span className="text-sm mt-2 text-gray-400">献花</span>
                </div>
                <div className="flex flex-col items-center">
                  <button className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors">
                    <span className="text-xl">🕯️</span>
                  </button>
                  <span className="text-sm mt-2 text-gray-400">点灯</span>
                </div>
                <div className="flex flex-col items-center">
                  <button className="w-12 h-12 rounded-full bg-blue-900/20 hover:bg-blue-900/30 flex items-center justify-center transition-colors">
                    <span className="text-xl">💌</span>
                  </button>
                  <span className="text-sm mt-2 text-gray-400">留言</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
