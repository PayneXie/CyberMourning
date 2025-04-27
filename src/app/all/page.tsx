import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CharacterCard from '../components/CharacterCard';
import { getAllCharacters } from '../utils/characters';

export default async function AllCharacters() {
  const characters = getAllCharacters();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2 text-center memorial-text">VTuber纪念馆</h1>
          <p className="text-gray-400 mb-6 text-center">永远铭记那些感动与离别</p>
          <div className="section-divider w-24 mx-auto mb-12"></div>

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
        </div>
      </main>

      <Footer />
    </div>
  );
} 