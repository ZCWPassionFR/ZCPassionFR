import { IUser } from 'app/shared/model/user.model';
import { IVehicle } from 'app/shared/model/vehicle.model';
import { IAppointment } from 'app/shared/model/appointment.model';

export interface IUserProfile {
  id?: number;
  phone?: string | null;
  user?: IUser | null;
  vehicles?: IVehicle[] | null;
  appointments?: IAppointment[] | null;
}

export const defaultValue: Readonly<IUserProfile> = {};
