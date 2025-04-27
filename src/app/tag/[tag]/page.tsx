import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CharacterCard from '../../components/CharacterCard';
import { getCharactersByTag, getAllTags } from '../../utils/characters';

interface PageProps {
  params: {
    tag: string;
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = params;
  const decodedTag = decodeURIComponent(tag);
  const allTags = getAllTags();
  
  // 确保标签存在
  if (!allTags.includes(decodedTag)) {
    notFound();
  }
  
  const characters = getCharactersByTag(decodedTag);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2 text-center memorial-text">
            <span className="bg-accent/80 text-white px-3 py-1 rounded-lg">{decodedTag}</span>
          </h1>
          <p className="text-gray-400 mb-6 text-center">
            展示所有与"{decodedTag}"相关的VTuber纪念
          </p>
          <div className="section-divider w-24 mx-auto mb-12"></div>

          {characters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {characters.map(character => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">没有找到与"{decodedTag}"相关的VTuber</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 