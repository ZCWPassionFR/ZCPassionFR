import dayjs from 'dayjs';
import { IShop } from 'app/shared/model/shop.model';
import { IUserProfile } from 'app/shared/model/user-profile.model';

export interface IAppointment {
  id?: number;
  timeSlot?: string | null;
  shop?: IShop | null;
  userProfile?: IUserProfile | null;
}

export const defaultValue: Readonly<IAppointment> = {};
