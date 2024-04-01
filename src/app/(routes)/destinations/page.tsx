
import Link from 'next/link';
import getLocationsByStore from "@/actions/get-locationsbystore";
import Image from 'next/image';
import LocationCard from "@/components/ui/location-card";

export default async function DestinationsPage() {
  const locations = await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {locations.map((location) => (
          <Link href={`/tourPackages/${location.id}`} key={location.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-64 px-4 pb-8 pt-40 max-w-sm mx-auto mt-4">
              <Image src={location.imageUrl} alt={location.label} width={500} height={500} />
              <div className="absolute bottom-0 left-0 bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-white text-sm">
                {location.label}
              </div>            
          </Link>
        ))}
      </div>
    </div>
  );
}