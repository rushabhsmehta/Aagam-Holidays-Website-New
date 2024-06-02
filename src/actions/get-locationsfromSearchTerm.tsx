import { Location } from "../../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/searchTermLocations`;

const getLocationsFromSearchTerm = async (searchTerm: string): Promise<Location[]> => {
  try {
    const res = await fetch(`${URL}/${searchTerm}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch locations: ${res.statusText}`);
    }

    let data = await res.json();

    // If data is an object, convert it to an array
    if (typeof data === 'object' && !Array.isArray(data)) {
      data = [data];
    }

    // Optional validation:
    if (!Array.isArray(data) || !data.every((item: any) => typeof item === 'object')) {
      throw new Error('Invalid location data format');
    }

    return data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    // Handle error gracefully (e.g., return an empty array with an error message)
    return [];
  }
};

export default getLocationsFromSearchTerm;