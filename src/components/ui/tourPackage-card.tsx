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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


interface TourPackageCard {
  data: TourPackage;
  location: Location;
}

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  mobile: z.string().min(10, {
    message: "Mobile number must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }).optional(),
  message: z.string().optional(),

})

const badges = ['Recommended', 'Trending', 'Hot & New', 'Pick of the Week', 'Sale', 'Best Value', 'Limited Offer', 'Popular'];

const TourPackageCard: React.FC<TourPackageCard> = ({
  data,
  location,
}) => {
  //  const previewModal = usePreviewModal();
  //  const cart = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  type FormValues = z.infer<typeof FormSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      setIsSubmitting(false);
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
          alt=""
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

            {
              isSubmitted ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-green-500">Thank you for your submission!</h2>
                  <p className="text-gray-600">We will get back to you soon.</p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                  <p className="text-gray-600">Please fill in your details and we will get back to you soon.</p>

                  < Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Mobile Number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <textarea placeholder="Message" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" disabled={isSubmitting}>Submit</Button>
                    </form>
                  </Form>
                </div>
              )}
          </PopoverContent>
        </Popover>
      </div>
    </div >
  );
}

export default TourPackageCard;
