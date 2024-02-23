"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Location, TourPackage } from "../../../types";
import { LucidePhone, LucideStar } from "lucide-react";
import { Button } from "./button";

interface TourPackageCard {
  data: TourPackage;
  location : Location;
}

const TourPackageCard: React.FC<TourPackageCard> = async ({
  data,
  location,
  }) => {
  //  const previewModal = usePreviewModal();
  //  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tourPackage/${data?.id}`);
  };

  /*  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
     event.stopPropagation();
 
     previewModal.onOpen(data);
   };
 
   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
     event.stopPropagation();
 
     cart.addItem(data);
   }; */

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border-2 border-blaack-500 rounded-md p-3 hover:border-black-600 hover:shadow-lg transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
    >

      <Image
        className="rounded"
        src={data.images[0]?.url}
        alt={data.images[0]?.url}
        sizes="100vw"
        style={{
          width: 'auto',
          height: '350px',
          objectFit: 'cover'
        }}
        width={300}
        height={500}
      />

      {/* Top section with label, star icon, and rating */}
      <div className="flex justify-between items-center m-4">
        <span className="text-sm font-semibold text-gray-700">{location.label }</span>
        <div className="flex items-center">
          <LucideStar className="text-sm text-yellow-400 ml-4 mb-1 mr-2" />
          <span className="text-sm text-yellow-400">5.0</span>
          {/* <span className="text-sm text-gray-500 ml-1">({data.tourPackageName})</span> */}
        </div>
      </div>

      {/* Middle section with package title */}
      <div className="text-lg font-bold text-gray-800 ml-4 mb-1">{data.tourPackageName}</div>

      {/* Sale badge */}
      <div className="bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold uppercase px-2 py-1 inline-block rounded ml-4 mb-1">
        {data.tourPackageName}
      </div>

      {/* Pricing section */}
      <div className="flex items-baseline mb-4">
        <span className="text-gray-500 line-through ml-4 mb-1">{data.price}</span>
        <span className="text-lg font-bold text-red-600 ml-4 mb-1">{data.price}</span>
      </div>


      {/* Action buttons */}
      <div className="flex justify-between gap-2 ml-4 mb-4">
        <Button variant="outline" className="border border-green-500 hover:border-green-600" >
          <LucidePhone className="mr-2" /> Call Now
        </Button>
        <Button className="bg-green-600 text-white px-4 py-2 rounded-full mr-4">
          Request Callback
        </Button>
      </div>
    </div>
  );
}

export default TourPackageCard;
