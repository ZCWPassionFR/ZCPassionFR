import { Service } from 'app/shared/model/enumerations/service.model';

export interface IShop {
  id?: number;
  name?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  fairRepairRating?: number | null;
  services?: Service | null;
}

export const defaultValue: Readonly<IShop> = {};
