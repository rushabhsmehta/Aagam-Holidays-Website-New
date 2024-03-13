import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
import TourPackageCard from "./ui/tourPackage-card";
import getTourPackages from "@/actions/get-tourPackages";

interface LocationListProps {
  title: string;
}

const LocationList: React.FC<LocationListProps> = async ({ title }) => {

  const items = await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  //fetch TourPackage based on each location item
  const tourPackages = await Promise.all(items.map(async (item) => {
    return await getTourPackages({ locationId: item.id });
  }));



  if (items.length === 0) return <NoResults />;

  return (
    <div className="space-y-4 py-4 lg:px-20 md:px-10 sm:px-5">
      {items.length === 0 && <NoResults />}
      {items.map((item, index) => (
        <div key={item.id} className="my-4">
          {tourPackages[index].length > 0 && (
            <h2 className="font-bold text-2xl mb-4">{item.label}</h2>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {tourPackages[index].map(tourPackage => (
              <div key={tourPackage.id} style={{ flexBasis: 'calc(33% - 20px)', margin: '10px' }}>
                <TourPackageCard location={item} data={tourPackage} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationList;