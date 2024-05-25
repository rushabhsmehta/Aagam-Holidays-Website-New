import Image from "next/image";
import Link from "next/link";
import { Location } from "../../../types";

interface LocationCardMain {
    data: Location
}

const LocationCardMain: React.FC<LocationCardMain> = ({
    data
}) => {
    return (
        <Link href={`/tourPackages/${data?.id}`} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
            <div className="flex-shrink-0">
                <Image
                    className="h-48 w-full object-cover object-center"
                    src={data.imageUrl}
                    alt={data.label}
                    sizes="100vw"
                    width={300}
                    height={500}
                />
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-white">
                        {data.label}
                    </h3>
                    {/* Add more details about the location here */}
                </div>
            </div>
        </Link>
    );
}

export default LocationCardMain;