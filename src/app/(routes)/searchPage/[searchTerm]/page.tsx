'use client'
import React from 'react';
import { Location, TourPackage } from '../../../../../types';
import getLocationsFromSearchTerm from '@/actions/get-locationsfromSearchTerm';
import getTourPackages from '@/actions/get-tourPackages';
import LocationList from '@/components/location-list';
import  { useEffect, useState } from 'react';

interface SearchPageProps {
    params: {
        searchTerm: string;
    },
}

const SearchPage: React.FC<SearchPageProps> = ({ params }) => {
    const title = `Search Results for: ${params.searchTerm}`;
 const [items, setItems] = useState<Location[]>([]);
const [tourPackages, setTourPackages] = useState<TourPackage[][]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedItems = await getLocationsFromSearchTerm(params.searchTerm);
                setItems(fetchedItems);

                const fetchedTourPackages = await Promise.all(
                    fetchedItems.map(async (item) => {
                        return await getTourPackages({ locationId: item.id });
                    })
                );
                setTourPackages(fetchedTourPackages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.searchTerm]);

    return <LocationList title={title} items={items} tourPackages={tourPackages} />;
};

export default SearchPage;