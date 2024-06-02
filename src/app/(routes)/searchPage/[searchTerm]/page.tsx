'use client'
import React from 'react';
import { Location, TourPackage } from '../../../../../types';
import getLocationsFromSearchTerm from '@/actions/get-locationsfromSearchTerm';
import getTourPackages from '@/actions/get-tourPackages';
import LocationList from '@/components/location-list';
import { useEffect, useState } from 'react';

interface SearchPageProps {
    params: {
        searchTerm: string;
    },
}
const SearchPage: React.FC<SearchPageProps> = ({ params }) => {
    const title = `Search Results for: ${params.searchTerm}`;
    const [items, setItems] = useState<Location[]>([]);
    const [tourPackages, setTourPackages] = useState<TourPackage[][]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setError(null);
            setLoading(true);
            try {
                const fetchedItems = await getLocationsFromSearchTerm(params.searchTerm);
                console.log('fetchedItems', fetchedItems); // Add this line
                setItems(fetchedItems);

                if (fetchedItems.length > 0) {
                    const fetchedTourPackages = await Promise.all(
                        fetchedItems.map(async (item) => {
                            return await getTourPackages({ locationId: item.id });
                        })
                    );
                    setTourPackages(fetchedTourPackages);
                }
            } catch (error) {
                setError(error as string | null);
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchData();
    }, [params.searchTerm]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (items.length === 0) {
        return <div>No results found for "{params.searchTerm}"</div>;
    }

    return <LocationList title={title} items={items} tourPackages={tourPackages} />;
};

export default SearchPage;