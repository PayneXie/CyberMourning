import Image from 'next/image';
import Link from 'next/link';

interface CharacterCardProps {
  id: string;
  name: string;
  title: string;
  image: string;
  deathYear?: string;
  birthYear?: string;
  series: string;
}

export default function CharacterCard({ 
  id, 
  name, 
  title, 
  image, 
  deathYear, 
  birthYear,
  series 
}: CharacterCardProps) {
  return (
    <Link href={`/memorial/${id}`}>
      <div className="memorial-card rounded-lg overflow-hidden flex flex-col w-full h-full cursor-pointer">
        <div className="relative w-full pt-[125%]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {deathYear && (
            <div className="absolute top-2 right-2 bg-accent/90 text-white text-xs px-2 py-1 rounded">
              {birthYear ? `${birthYear} - ${deathYear}` : deathYear}
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{series}</p>
        </div>
      </div>
    </Link>
  );
} 