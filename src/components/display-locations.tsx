import getLocationsByStore from '@/actions/get-locationsbystore';
import getTourPackages from "@/actions/get-tourPackages";
import LocationList from './location-list';
import NoResults from './ui/no-results';
import LocationCard from './ui/location-card';
import LocationCardMain from './ui/location-card-main';

export default async function DisplayLocations() {
  const items = await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  return (
    <div className="space-y-4 py-4 lg:px-20 md:px-10 sm:px-5">
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={item.id} className="my-4">
            <LocationCardMain data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}