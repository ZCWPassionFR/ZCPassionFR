import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IVehicle } from 'app/shared/model/vehicle.model';
import { getEntities } from './vehicle.reducer';

export const Vehicle = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const vehicleList = useAppSelector(state => state.vehicle.entities);
  const loading = useAppSelector(state => state.vehicle.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="vehicle-heading" data-cy="VehicleHeading">
        Vehicles
        <div className="d-flex justify-content-end">
          <Link to="/vehicle/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Add New Vehicle
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {vehicleList && vehicleList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Make</th>
                <th>Model</th>
                <th>License Number</th>
                <th>Mileage</th>
                <th>Vehicle Year</th>
                <th>Appointment</th>
                <th>User Profile</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {vehicleList.map((vehicle, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/vehicle/${vehicle.id}`} color="link" size="sm">
                      {vehicle.id}
                    </Button>
                  </td>
                  <td>{vehicle.make}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.licenseNumber}</td>
                  <td>{vehicle.mileage}</td>
                  <td>{vehicle.vehicleYear}</td>
                  <td>{vehicle.appointment ? <Link to={`/appointment/${vehicle.appointment.id}`}>{vehicle.appointment.id}</Link> : ''}</td>
                  <td>{vehicle.userProfile ? <Link to={`/user-profile/${vehicle.userProfile.id}`}>{vehicle.userProfile.id}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/vehicle/${vehicle.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`/vehicle/${vehicle.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`/vehicle/${vehicle.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Vehicles found</div>
        )}
      </div>
    </div>
  );
};

export default Vehicle;
