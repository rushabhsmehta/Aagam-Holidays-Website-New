import React from 'react';
import { Location } from '../../../../../types';
import getLocationsFromSearchTerm from '@/actions/get-locationsfromSearchTerm';
import getTourPackages from '@/actions/get-tourPackages';
import LocationList from '@/components/location-list';
import Image from 'next/image';
import Link from 'next/link';

interface SearchPageProps {
    params: {
        searchTerm: string;
    },
}

const SearchPage: React.FC<SearchPageProps> = async ({ params }) => {
    const title = `Search Results for: ${params.searchTerm}`;

    const locations = await getLocationsFromSearchTerm(params.searchTerm);
    return (

        <div className="container mx-auto py-36 px-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {locations.map((location) => (
                    <Link href={`/tourPackages/${location.id}`} key={location.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-64 px-4 pb-8 pt-40 max-w-sm mx-auto mt-4">
                        <Image src={location.imageUrl} alt={location.label} width={500} height={500} />
                        <div className="absolute bottom-0 left-0 bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-white text-sm">
                            {location.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
