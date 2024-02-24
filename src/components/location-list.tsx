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

interface LocationListProps {
  title: string;
}

const LocationList: React.FC<LocationListProps> = async ({ title }) => {

  const items  =   await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  if (items.length === 0) return <NoResults />;

  
  return (
    <div className="space-y-4 py-4 px-8">
      <h3 className="font-bold text-3xl">{title}</h3>
      <Carousel
      opts = {{
        slidesToScroll : 1,
      }} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
              <div className="p-0">
                <LocationCard data={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>  
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default LocationList;
