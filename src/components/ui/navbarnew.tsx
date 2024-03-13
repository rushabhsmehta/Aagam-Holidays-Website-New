import getLocationsByStore from '@/actions/get-locationsbystore';
import NavbarNewRender from './navbarnewrender';

export default async function NavbarNew() {
  const locations = await getLocationsByStore({ storeId: "3eb7df82-57cc-4c68-aaeb-6b2531cd72d5" });
  return <NavbarNewRender locations={locations} />;
}