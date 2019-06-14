import { getHubSlices, Slices } from 'routeshub';
import { AppNotes } from './hub/app.notes';
import { HomeNotes } from '-home/hub/home.notes';
import { LocationNotes } from '-location/hub/location.notes';
import { ShopNotes } from '-shop/hub/shop.notes';
import { UserCenterNotes } from '-user-center/hub/user-center.notes';

export interface Hub {
  app: AppNotes;
  home: HomeNotes;
  location: LocationNotes;
  shop: ShopNotes;
  userCenter: UserCenterNotes;
}

export const hub: Slices<Hub> = getHubSlices<Hub>();