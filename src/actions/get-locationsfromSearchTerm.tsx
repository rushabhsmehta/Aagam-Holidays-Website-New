import { Location } from "../../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/searchTermLocations`;

const getLocationsBySearchTerm = async (searchTerm: string): Promise<Location[]> => {
  const res = await fetch(`${URL}/${searchTerm}`);
  console.log(res.json())
  return res.json();
};

export default getLocationsBySearchTerm;
