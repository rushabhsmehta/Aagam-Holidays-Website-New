import React from 'react';
import { Location } from '../../../../../types';
import getLocationsFromSearchTerm from '@/actions/get-locationsfromSearchTerm';
import getTourPackages from '@/actions/get-tourPackages';
import LocationList from '@/components/location-list';

interface SearchPageProps {
    params: {
        searchTerm: string;
    },
}

const SearchPage: React.FC<SearchPageProps> = async ({ params }) => {
    const title = `Search Results for: ${params.searchTerm}`;

    try {
        const items = await getLocationsFromSearchTerm(params.searchTerm);
        const tourPackages = await Promise.all(
            items.map(async (item) => {
                return await getTourPackages({ locationId: item.id });
            })
        );

        return <LocationList title={title} items={items} tourPackages={tourPackages} />;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error gracefully, e.g., display an error message to the user
        return <div style={{ marginTop: 60 }}>Error fetching data. Please try again later.</div>;
    }
};
export default SearchPage;
