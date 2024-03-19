import React from 'react';
import { Location } from '../../../types';
import NoResults from "@/components/ui/no-results";
import LocationCard from '@/components/ui/location-card';

interface DestinationsPageProps {
    title: string;
    items: Location[];
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ title, items }) => {
    if (items.length === 0) return <NoResults />;
    return (
        <div className="space-y-4 py-4 lg:px-20 md:px-10 sm:px-5">
            {items.length === 0 && <NoResults />}
            {items.map((item, index) => (
                <div key={item.id} className="my-4">
                    <h2 className="font-bold text-2xl mb-4">{item.label}</h2>
                    <div className="w-full flex flex-wrap justify-start items-start">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <LocationCard data={item} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DestinationsPage;