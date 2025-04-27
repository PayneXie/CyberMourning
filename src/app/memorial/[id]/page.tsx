import React from "react";
import { characters, getCharacterById } from "@/app/utils/characters";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import ClientBackgroundCanvas from "@/app/components/ClientBackgroundCanvas";

// 简单交互组件
const FlowerOfferingButton = ({ characterId }: { characterId: string }) => (
  <button className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors">
    <span className="text-2xl">🌹</span>
  </button>
);

const CandleLightButton = ({ characterId }: { characterId: string }) => (
  <button className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors">
    <span className="text-2xl">🕯️</span>
  </button>
);

const MemorialMessage = ({ characterId }: { characterId: string }) => (
  <button className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors">
    <span className="text-2xl">✉️</span>
  </button>
);

// 白花装饰组件
const WhiteFlowers = () => (
  <>
    <div className="floating-flower" style={{ top: '15%', left: '10%' }}></div>
    <div className="floating-flower" style={{ top: '25%', right: '15%' }}></div>
    <div className="floating-flower" style={{ bottom: '30%', left: '15%' }}></div>
    <div className="floating-flower" style={{ bottom: '20%', right: '10%' }}></div>
    <div className="floating-flower" style={{ top: '50%', left: '5%' }}></div>
    <div className="floating-flower" style={{ top: '40%', right: '5%' }}></div>
  </>
);

// 获取相关角色的函数
function getRelatedCharacters(currentId: string) {
  // 这里简单返回除当前角色外的最多3个角色
  return characters
    .filter(char => char.id !== currentId)
    .slice(0, 3);
}

type PageProps = {
  params: {
    id: string;
  };
};

export default function MemorialPage({ params }: PageProps) {
  const character = getCharacterById(params.id);

  if (!character) {
    notFound();
  }

  // 计算出生到逝世的年份
  const birthYear = character.birthYear;
  const deathYear = character.deathYear;

  // 获取相关角色
  const relatedCharacters = getRelatedCharacters(character.id);

  return (
    <div className="memorial-bg white-flower-bg">
      <ClientBackgroundCanvas color="rgba(255, 255, 255, 0.3)" particleCount={20} />
      <Header />
      
      <WhiteFlowers />
      
      <div className="container mx-auto px-4 py-16 fade-in">
        {/* 通用纪念标题 */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 memorial-title text-white tracking-wider text-shadow-md header-decoration">
            永恒的纪念
          </h1>
          <p className="text-lg text-slate-300 mb-4 font-medium text-shadow-sm">
            {birthYear} - {deathYear}
          </p>
          <div className="w-32 h-1 bg-accent/70 mx-auto rounded-full"></div>
        </div>

        {/* 遗像放在中央 */}
        <div className="portrait-frame mb-20 relative max-w-md mx-auto">
          <div className="absolute -top-3 -left-3 -right-3 -bottom-3 border border-white/5 rounded-lg"></div>
          <div className="frame-decoration"></div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="memorial-image"
              priority
            />
          </div>
          <div className="white-flower white-flower-1"></div>
          <div className="white-flower white-flower-2"></div>
          <div className="white-flower white-flower-3"></div>
          <div className="white-flower white-flower-4"></div>
        </div>
        
        {/* 人物信息 */}
        <div className="memorial-frame mb-16 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white text-shadow-sm">{character.name}</h2>
            <p className="text-xl text-amber-200/90 mb-2">{character.title}</p>
            <p className="text-sm text-slate-300">{character.series}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-black/20 rounded">
              <span className="text-slate-400 text-sm block mb-1">出生</span>
              <span className="text-slate-200">{character.birthYear}</span>
            </div>
            <div className="text-center p-4 bg-black/20 rounded">
              <span className="text-slate-400 text-sm block mb-1">离世</span>
              <span className="text-slate-200">{character.deathYear}</span>
            </div>
            {character.cause && (
              <div className="text-center p-4 bg-black/20 rounded col-span-2">
                <span className="text-slate-400 text-sm block mb-1">离世原因</span>
                <span className="text-slate-200">{character.cause}</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {character.tags.map((tag) => (
              <Link 
                href={`/tag/${tag}`}
                key={tag}
                className="px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm hover:bg-primary/30 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* 献词和描述 */}
        <div className="memorial-frame mb-16 max-w-3xl mx-auto p-6">
          <h3 className="text-xl font-semibold mb-6 text-center text-white text-shadow-sm header-decoration">献词</h3>
          <p className="text-slate-200 mb-4 leading-relaxed text-center">{character.description}</p>
        </div>

        {/* 互动功能 */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <FlowerOfferingButton characterId={character.id} />
              <p className="mt-2 text-slate-300">献花</p>
              <p className="text-lg font-semibold text-white">328</p>
            </div>
            <div className="text-center">
              <CandleLightButton characterId={character.id} />
              <p className="mt-2 text-slate-300">点烛</p>
              <p className="text-lg font-semibold text-white">492</p>
            </div>
            <div className="text-center">
              <MemorialMessage characterId={character.id} />
              <p className="mt-2 text-slate-300">留言</p>
              <p className="text-lg font-semibold text-white">156</p>
            </div>
          </div>
        </div>

        {/* 相关角色 */}
        {relatedCharacters.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center text-white text-shadow-sm header-decoration">相关纪念</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedCharacters.map(char => (
                <Link key={char.id} href={`/memorial/${char.id}`} className="memorial-card rounded-lg overflow-hidden flex p-4 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-16 h-16 relative rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={char.image}
                      alt={char.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <h4 className="font-medium text-gray-200">{char.name}</h4>
                    <p className="text-sm text-gray-400">{char.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 底部悼念语 */}
        <div className="text-center mt-20 mb-20">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 border border-white/10 rounded text-slate-300 text-sm italic">
              愿逝者安息
            </span>
          </div>
          <p className="text-xl font-medium text-slate-400 memorial-text italic text-shadow-sm">
            永远的回忆，永远的怀念
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
} 