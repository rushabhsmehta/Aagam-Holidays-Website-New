import getLocationsByStore from '@/actions/get-locationsbystore';
import Link from 'next/link';
import { FaMapMarkerAlt, FaMapPin, FaMapSigns, FaMapMarked, FaMapMarkedAlt, FaMap } from 'react-icons/fa';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';

const NavbarLocations = async () => {

    const locations = await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

    const locationIcons = [<FaMapMarkerAlt />, <FaMapPin />, <FaMapSigns />, <FaMapMarked />, <FaMapMarkedAlt />, <FaMap />];
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-screen  p-2"
        >
           
         
            <CarouselContent>
                {locations.map((location) => (
                    <Link href={`/tourPackages/${location.id}`} key={location.id}>
                        <CarouselItem>
                            <div className="flex items-center">
                                {locationIcons[Math.floor(Math.random() * locationIcons.length)]}
                                <span className='text-xs p-2'>{location.label}</span>
                            </div>
                        </CarouselItem>
                    </Link>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default NavbarLocations;