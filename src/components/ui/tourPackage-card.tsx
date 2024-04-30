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
import axios from "axios";


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
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumber = '919724444701';
  const whatsappMessage = 'Hi ! I am interested in ' + data.tourPackageName + ' tour package. Please provide me more details.';

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/send');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


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
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-bold mb-4">Get a Callback</h2>
              <div className="grid gap-4">
                <div className="grid items-center gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-8"
                  />
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="h-8"
                  />
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-8"
                  />
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-20 w-full px-3 py-2 rounded shadow"
                  />
                </div>
                <Button variant="default" className="mt-4">Submit</Button>
              </div>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default TourPackageCard;
