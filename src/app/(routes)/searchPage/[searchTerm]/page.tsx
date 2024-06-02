import React from 'react';
import { Location } from '../../../../../types';
import getLocationsBySearchTerm from '@/actions/get-locationsfromSearchTerm';
import getTourPackages from '@/actions/get-tourPackages';
import LocationList from '@/components/location-list';


interface SearchPageProps {
    params: {
        searchTerm : string;
    },
}

const SearchPage: React.FC<SearchPageProps> = async ({
    params
}: { params: { searchTerm: string } }) => {
    const title = `Search Results for: ${params.searchTerm}`;
    const items = await getLocationsBySearchTerm(params.searchTerm );
    //fetch TourPackage based on each location item
    const tourPackages = await Promise.all(items.map(async (item) => {
        return await getTourPackages({ locationId: item.id });
    }));

    

    return <LocationList title={title} items={items} tourPackages={tourPackages} />;

}
export default SearchPage;