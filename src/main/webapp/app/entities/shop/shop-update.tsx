import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IShop } from 'app/shared/model/shop.model';
import { Service } from 'app/shared/model/enumerations/service.model';
import { getEntity, updateEntity, createEntity, reset } from './shop.reducer';

export const ShopUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const shopEntity = useAppSelector(state => state.shop.entity);
  const loading = useAppSelector(state => state.shop.loading);
  const updating = useAppSelector(state => state.shop.updating);
  const updateSuccess = useAppSelector(state => state.shop.updateSuccess);
  const serviceValues = Object.keys(Service);

  const handleClose = () => {
    navigate('/shop');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...shopEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          services: 'OIL_CHANGE',
          ...shopEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="zcPassionFrApp.shop.home.createOrEditLabel" data-cy="ShopCreateUpdateHeading">
            Create or edit a Shop
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="shop-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Name" id="shop-name" name="name" data-cy="name" type="text" />
              <ValidatedField label="Phone Number" id="shop-phoneNumber" name="phoneNumber" data-cy="phoneNumber" type="text" />
              <ValidatedField label="Address" id="shop-address" name="address" data-cy="address" type="text" />
              <ValidatedField
                label="Fair Repair Rating"
                id="shop-fairRepairRating"
                name="fairRepairRating"
                data-cy="fairRepairRating"
                type="text"
              />
              <ValidatedField label="Services" id="shop-services" name="services" data-cy="services" type="select">
                {serviceValues.map(service => (
                  <option value={service} key={service}>
                    {service}
                  </option>
                ))}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/shop" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ShopUpdate;
