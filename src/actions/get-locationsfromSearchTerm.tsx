import { Location } from "../../types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/searchTermLocations`;

const getLocationsBySearchTerm = async (searchTerm: string): Promise<Location[]> => {
  const res = await fetch(`${URL}/${searchTerm}`);

  return res.json();
};

export default getLocationsBySearchTerm;
