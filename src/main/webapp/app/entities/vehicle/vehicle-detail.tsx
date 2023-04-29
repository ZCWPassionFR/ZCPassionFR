import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './vehicle.reducer';

export const VehicleDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const vehicleEntity = useAppSelector(state => state.vehicle.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="vehicleDetailsHeading">Vehicle</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{vehicleEntity.id}</dd>
          <dt>
            <span id="make">Make</span>
          </dt>
          <dd>{vehicleEntity.make}</dd>
          <dt>
            <span id="model">Model</span>
          </dt>
          <dd>{vehicleEntity.model}</dd>
          <dt>
            <span id="licenseNumber">License Number</span>
          </dt>
          <dd>{vehicleEntity.licenseNumber}</dd>
          <dt>
            <span id="mileage">Mileage</span>
          </dt>
          <dd>{vehicleEntity.mileage}</dd>
          <dt>
            <span id="vehicleYear">Vehicle Year</span>
          </dt>
          <dd>{vehicleEntity.vehicleYear}</dd>
          <dt>Appointment</dt>
          <dd>{vehicleEntity.appointment ? vehicleEntity.appointment.id : ''}</dd>
          <dt>User Profile</dt>
          <dd>{vehicleEntity.userProfile ? vehicleEntity.userProfile.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/vehicle" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/vehicle/${vehicleEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default VehicleDetail;
