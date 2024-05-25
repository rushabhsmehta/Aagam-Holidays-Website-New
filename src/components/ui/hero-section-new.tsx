'use client'
import getLocationsBySearchTerm from '@/actions/get-locationsfromSearchTerm';
import getTourPackages from '@/actions/get-tourPackages';
import { Router } from 'lucide-react';
// Import necessary components and hooks
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeroSectionNew() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  // Handle the search action
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/searchPage/${searchQuery.toLowerCase()}`);
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center text-white">
      {/* Background Image */}
      <Image
        src="/images/locations/paris.jpg" // Use the path to your downloaded image
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Breathtaking Landscape"
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute z-10 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="z-20">
        <h1 className="text-4xl md:text-6xl font-bold">Unleash Your Wanderlust</h1>
        <p className="mt-4 text-xl md:text-2xl">Discover the most extraordinary places</p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mt-8">
          <input
            type="text"
            placeholder="Search destinations"
            className="text-black rounded-md p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2"
          >
            Explore
          </button>
        </form>
      </div>
    </div>
  );
}
