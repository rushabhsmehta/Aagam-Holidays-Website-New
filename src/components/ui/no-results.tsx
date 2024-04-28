'use client'
import { useRouter } from 'next/navigation';

const NoResults = () => {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  return ( 
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-500 space-y-2">
      <h2 className="text-2xl font-semibold">No Results Found</h2>
      <p>We could not find any matches for your search. Please try again with different keywords.</p>
      <button onClick={goBack} className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Go Back</button>
    </div>
  );
};
 
export default NoResults;