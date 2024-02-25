import * as React from "react";
import LocationCard from "@/components/ui/location-card";
import { Location } from "../../types";
import NoResults from "@/components/ui/no-results";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import getLocationsByStore from "@/actions/get-locationsbystore";
import Link from "next/link";

interface LocationListProps {
  title: string;
}

const LocationList: React.FC<LocationListProps> = async ({ title }) => {

  const items = await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  if (items.length === 0) return <NoResults />;


  return (
    <div className="space-y-4 py-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link key={item.id} href =   {`/tourPackages/${item?.id}`}>        
          <LocationCard  data={item} />
          </Link>

        ))}
      </div>  
    </div>
  );
}

export default LocationList;
