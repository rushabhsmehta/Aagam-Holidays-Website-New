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
        let isMounted = true; // add this line
    
        const fetchData = async () => {
            setError(null);
            setLoading(true);
            try {
                const fetchedItems = await getLocationsFromSearchTerm(params.searchTerm);
                if (!Array.isArray(fetchedItems)) {
                    throw new Error('Fetched items is not an array');
                }
                if (isMounted) { // check if component is still mounted
                    setItems(fetchedItems);
                }
    
                if (fetchedItems.length > 0) {
                    const fetchedTourPackages = await Promise.all(
                        fetchedItems.map(async (item) => {
                            const packages = await getTourPackages({ locationId: item.id });
                            if (!Array.isArray(packages)) {
                                throw new Error('Fetched packages is not an array');
                            }
                            return packages;
                        })
                    );
                    if (isMounted) { // check if component is still mounted
                        setTourPackages(fetchedTourPackages);
                    }
                }
            } catch (error) {
                if (isMounted) { // check if component is still mounted
                    setError(error as string || 'An error occurred');
                }
                console.error('Error fetching data:', error);
            }
            if (isMounted) { // check if component is still mounted
                setLoading(false);
            }
        };
    
        fetchData();
    
        return () => {
            isMounted = false; // set isMounted to false when the component unmounts
        };
    }, [params.searchTerm]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (items.length === 0) {
        return <div>No results found for &quot;{params.searchTerm}&quot;</div>;
    }

    return <LocationList title={title} items={items} tourPackages={tourPackages} />;
};

export default SearchPage;