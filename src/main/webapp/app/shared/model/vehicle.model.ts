import { IAppointment } from 'app/shared/model/appointment.model';
import { IUserProfile } from 'app/shared/model/user-profile.model';

export interface IVehicle {
  id?: number;
  make?: string | null;
  model?: string | null;
  licenseNumber?: string | null;
  mileage?: number | null;
  vehicleYear?: number | null;
  appointment?: IAppointment | null;
  userProfile?: IUserProfile | null;
}

export const defaultValue: Readonly<IVehicle> = {};
