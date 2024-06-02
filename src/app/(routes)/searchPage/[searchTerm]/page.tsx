'use client'
// SearchPage.tsx
import React, { useState } from 'react';
import { Location, TourPackage } from '../../../../../types';
import getLocationsFromSearchTerm from '@/actions/get-locationsfromSearchTerm';
import getTourPackages from '@/actions/get-tourPackages';
import LocationList from '@/components/location-list';

interface SearchPageProps {
    params: {
        searchTerm: string;
    },
}

const SearchPage: React.FC<SearchPageProps> = ({ params }) => {
    const title = `Search Results for: ${params.searchTerm}`;
    const [items, setItems] = useState<Location[]>([]);
    const [tourPackages, setTourPackages] = useState<TourPackage[]>([]);

    const fetchData = async () => {
        try {
            const fetchedItems = await getLocationsFromSearchTerm(params.searchTerm);
            if (!Array.isArray(fetchedItems)) {
                throw new Error('Fetched items is not an array');
            }
            setItems(fetchedItems);

            const fetchedTourPackages = await Promise.all(
                fetchedItems.map(async (item) => {
                    const packages = await getTourPackages({ locationId: item.id });
                    if (!Array.isArray(packages)) {
                        throw new Error('Fetched packages is not an array');
                    }
                    return packages;
                })
            );
            setTourPackages(fetchedTourPackages.flat());
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Call fetchData when the component renders
    fetchData();

    return (
        <div>
            <h1>{title}</h1>
            {items.map((item, index) => (
                <div key={item.id}>
                    <h2>{item.label}</h2>
                    {tourPackages.map((tourPackage, idx) => (
                        <div key={idx}>
                            <h3>{tourPackage.tourPackageName}</h3>
                            <p>{tourPackage.tourPackageName}</p>
                            {/* Render other properties of tourPackage as needed */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SearchPage;