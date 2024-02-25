
import LocationList from "@/components/location-list";
import Container from "@/components/ui/container";
import { Suspense } from "react";
import Loading from "./loading";
import HeroSectionNew from "@/components/ui/hero-section-new";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Testimonials from "@/components/testimonials";


const Home =    () => {

  // const products = await getProducts({ isFeatured: true });
  // const tourPackages = await getTourPackages({ storeId : "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });
  // const tourPackageQueries = await getTourPackageQueries({ storeId : "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

 // const billboard =  getBillboard("49ec26c8-24b0-4149-a342-63a0c7ce3da5");
  ///const locations  =   await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });

  return (
    <Container>
      <div className="">
        <Suspense fallback={<Loading />}>

          <HeroSectionNew />
          {/*    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
 */}
          {/*  <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <TourPackageList title="Tour Packages" items={tourPackages} />
        </div>
 */}
          <div className="flex flex-col gap-y-8 pb-10 px-4 sm:px-6 lg:px-8">
            <LocationList title="Tour Packages" />
          </div>

          <Testimonials />

          <div id="contact-us" className="flex flex-col gap-y-8 pb-10 px-4 sm:px-6 lg:px-8">
            <ContactUs />
          </div>

          <div id="about-us" className="flex flex-col gap-y-8 pb-10 px-4 sm:px-6 lg:px-8">
            <AboutUs />
          </div>


          {/*  <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <TourPackageQueryList title="Tour Packages" items={tourPackageQueries} />
        </div> */}
        </Suspense>
      </div>
    </Container>
  )
};

export default Home;
