"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, LucidePhone, LucideStar, Ratio, ShoppingCart, StarIcon, StarOff, StarsIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Location } from "../../../types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { FaStar, FaStarAndCrescent, FaStarOfLife } from "react-icons/fa";
import { Button } from "./button";

interface LocationCard {
  data: Location
}

const LocationCard: React.FC<LocationCard> = ({
  data
}) => {
  //  const previewModal = usePreviewModal();
  //  const cart = useCart();
  const router = useRouter();
  /* 
    const handleClick = () => {
      router.push(`/location/${data?.id}`);
    }; */

  const handleClick = () => {
    router.push(`/tourPackages/${data?.id}`);
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
    <div onClick={handleClick} >
      {/* Image & actions */}
        <Image
          className="rounded"
          src={data.imageUrl}
          alt ={data.imageUrl}
          sizes="100vw"
          style={{
            width: 'auto',
            height: '350px',
            objectFit : 'cover'
          }}
          width={300}
          height={500}
          />

          {/* Top section with label, star icon, and rating */}
          <div className="flex justify-between items-center m-4">
            <span className="text-sm font-semibold text-gray-700">{data.label}</span>
            <div className="flex items-center">
              <LucideStar className="text-sm text-yellow-400 ml-4 mb-1" />
              <span className="text-sm text-yellow-400">5.0</span>
              <span className="text-sm text-gray-500 ml-1">({data.label})</span>
            </div>
          </div>

          {/* Middle section with package title */}
          <div className="text-lg font-bold text-gray-800 ml-4 mb-1">{data.label}</div>

          {/* Sale badge */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold uppercase px-2 py-1 inline-block rounded ml-4 mb-1">
            {data.label}
          </div>


          {/* Pricing section */}
          <div className="flex items-baseline mb-4">
            <span className="text-gray-500 line-through ml-4 mb-1">{data.label}</span>
            <span className="text-lg font-bold text-red-600 ml-4 mb-1">{data.label}</span>
          </div>

          {/* Action buttons */}
          <div className="flex justify-between gap-2 ml-4 mb-1">
            <Button variant="outline" className="border border-green-500 hover:border-green-600" >
              <LucidePhone className="mr-2" /> Call Now
            </Button>
            <Button className="bg-green-600 text-white px-4 py-2 rounded-full mr-4">
              Request Callback
            </Button>
          </div>



      {/*    <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data.imageUrl} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            /> 
          </div>
        </div>
      </div>
       Description 
      <div>
        <p className="font-semibold text-lg">{data.label}</p>
        <p className="text-sm text-gray-500">{ data.label }</p>
       </div>
       Price & Reiew 
     <div className="flex items-center justify-between">
        <Currency value={data?.label} />
      </div> 
 */}    </div>
  );
}

export default LocationCard;
