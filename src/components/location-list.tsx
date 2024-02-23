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

interface LocationListProps {
  title: string;
  items: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ title, items }) => {
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
