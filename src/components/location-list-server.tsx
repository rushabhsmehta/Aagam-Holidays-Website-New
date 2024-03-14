import getLocationsByStore from '@/actions/get-locationsbystore';
import getTourPackages from "@/actions/get-tourPackages";
import LocationList from './location-list';

interface LocationListProps {
  title: string;
}

export default async function LocationListServer({ title }: LocationListProps) {
  const items = await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  //fetch TourPackage based on each location item
  const tourPackages = await Promise.all(items.map(async (item) => {
    return await getTourPackages({ locationId: item.id });
  }));

  return <LocationList title={title} items={items} tourPackages={tourPackages} />;
}