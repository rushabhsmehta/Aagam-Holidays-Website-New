import React from 'react';
import { Location } from '../../../../../types';
import getLocationsBySearchTerm from '@/actions/get-locationsfromSearchTerm';
import getTourPackages from '@/actions/get-tourPackages';
import LocationList from '@/components/location-list';


interface SearchPageProps {
    params: {
        searchQuery: string;
    },
}

const SearchPage: React.FC<SearchPageProps> = async ({
    params
}: { params: { searchQuery: string } }) => {
    const title = `Search Results for: ${params.searchQuery}`;
    const items = await getLocationsBySearchTerm(params.searchQuery);
    //fetch TourPackage based on each location item
    const tourPackages = await Promise.all(items.map(async (item) => {
        return await getTourPackages({ locationId: item.id });
    }));

    return <LocationList title={title} items={items} tourPackages={tourPackages} />;

}
export default SearchPage;