import TourPackageCard from "@/components/ui/tourPackage-card";
import {  Location, TourPackage } from "../../types";
import NoResults from "@/components/ui/no-results";

interface  TourPackageListProps {
  title: string;
  items:  TourPackage[]
  location : Location
}

const  TourPackageList: React.FC< TourPackageListProps> = ({
  title,
  items,
  location,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <TourPackageCard key={item.id} location = {location} data={item} />
        ))}
      </div>
    </div>
   );
}
 
export default  TourPackageList;
