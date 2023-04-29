import userProfile from 'app/entities/user-profile/user-profile.reducer';
import vehicle from 'app/entities/vehicle/vehicle.reducer';
import appointment from 'app/entities/appointment/appointment.reducer';
import shop from 'app/entities/shop/shop.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  userProfile,
  vehicle,
  appointment,
  shop,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
