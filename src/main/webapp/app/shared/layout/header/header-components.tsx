import React from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="content/images/carRepairGirl.jpeg" alt="Logo" />
  </div>
);

export const Brand = () => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
    <span className="brand-title">FairRepair</span>
    {/* <span className="navbar-version">{VERSION}</span> */}
  </NavbarBrand>
);

export const Home = () => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>Home</span>
    </NavLink>
  </NavItem>
);
export const Vehicles = () => (
  <NavItem>
    <NavLink tag={Link} to="/vehicle" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>My Vehicles</span>
    </NavLink>
  </NavItem>
);
export const AddVehicle = () => (
  <NavItem>
    <NavLink tag={Link} to="/vehicle/new" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>Add New Vehicle</span>
    </NavLink>
  </NavItem>
);
