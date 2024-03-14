// LocationList.client.tsx
import * as React from "react";
import { Location, TourPackage } from "../../types";
import NoResults from "@/components/ui/no-results";
import TourPackageCard from "./ui/tourPackage-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface LocationListProps {
  title: string;
  items: Location[];
  tourPackages: any[];
}

const LocationListClient: React.FC<LocationListProps> = ({ title, items, tourPackages }) => {
  if (items.length === 0) return <NoResults />;

  return (
    <div className="space-y-4 py-4 lg:px-20 md:px-10 sm:px-5">
      {items.length === 0 && <NoResults />}
      {items.map((item, index) => (
        <div key={item.id} className="my-4">
          {tourPackages[index].length > 0 && (
            <h2 className="font-bold text-2xl mb-4">{item.label}</h2>
          )}

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {tourPackages[index].map((tourPackage: TourPackage, idx: number) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <TourPackageCard location={item} data={tourPackage} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export default LocationListClient;