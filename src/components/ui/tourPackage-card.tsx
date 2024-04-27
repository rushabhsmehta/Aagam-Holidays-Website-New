"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTag } from 'react-icons/fa';
import { Location, TourPackage } from "../../../types";
import { LucidePhone, LucideStar } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import ContactUs from "../contact-us";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


interface TourPackageCard {
  data: TourPackage;
  location: Location;
}

const badges = ['Recommended', 'Trending', 'Hot & New', 'Pick of the Week', 'Sale', 'Best Value', 'Limited Offer', 'Popular'];

const TourPackageCard: React.FC<TourPackageCard> = ({
  data,
  location,
}) => {
  //  const previewModal = usePreviewModal();
  //  const cart = useCart();
  const router = useRouter();

  const [badge, setBadge] = useState(badges[Math.floor(Math.random() * badges.length)]);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const phoneNumber = '919724444701';
  const whatsappMessage = 'Check out this amazing tour itinerary' + data.tourPackageName;

  const handleCall = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleCallback = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsContactModalOpen(true);
  };


  const handleWhatsApp = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
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
      //   onClick={handleClick}
      className="cursor-pointer rounded-md hover:border-black-600 hover:shadow-lg transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105"
    >
      <Link href={`/tourPackage/${data?.id}`}>

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
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-semibold text-gray-700">{location.label}</span>
          <div className="flex items-center">
            <LucideStar className="text-sm text-yellow-400 ml-4 mb-1 mr-2" />
            <span className="text-sm text-yellow-400">5.0</span>
            {/* <span className="text-sm text-gray-500 ml-1">({data.tourPackageName})</span> */}
          </div>
        </div>

        {/* Middle section with package title */}
        <div className="text-sm font-bold text-gray-800 mb-1">{data.tourPackageName}</div>

        {/* Sale badge */}
        <div className="flex items-center bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold uppercase px-2 py-1 inline-flex rounded mb-1">
          <FaTag className="mr-2" />
          {badge}
        </div>
        {/* Pricing section */}
        <div className="flex items-baseline mb-4">
          <span className="text-gray-500 line-through ml-4 mb-1">{data.price}</span>
          <span className="text-sm font-bold text-red-600 ml-4 mb-1">{data.price}</span>
        </div>

      </Link>

      {/* Action buttons */}



      <div className="flex justify-center mb-4">
        <Fab size="small" color="primary" onClick={handleCall} style={{ marginRight: '24px', backgroundColor: '#007bff', color: 'white' }}>
          <PhoneIcon />
        </Fab>
        <Fab size="small" color="primary" onClick={handleWhatsApp} style={{ marginRight: '24px', backgroundColor: '#25d366', color: 'white' }}>
          <WhatsAppIcon />
        </Fab>

        <Popover>
          <PopoverTrigger asChild>
            <Fab size="small" color="primary" style={{ marginRight: '24px', backgroundColor: '#25d366', color: 'white' }}>
              <PhoneCallbackIcon />
            </Fab>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Contact Us</h4>
                <p className="text-sm text-muted-foreground">
                  Please fill out the form below.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="message">Message</Label>
                  <Input
                    id="message"
                    className="col-span-2 h-8"
                  />
                </div>
                <Button variant="default" className="col-span-3">Submit</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>


      </div>
    </div>
  );
}

export default TourPackageCard;
