import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './shop.reducer';

export const ShopDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const shopEntity = useAppSelector(state => state.shop.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="shopDetailsHeading">Shop</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{shopEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{shopEntity.name}</dd>
          <dt>
            <span id="phoneNumber">Phone Number</span>
          </dt>
          <dd>{shopEntity.phoneNumber}</dd>
          <dt>
            <span id="address">Address</span>
          </dt>
          <dd>{shopEntity.address}</dd>
          <dt>
            <span id="fairRepairRating">Fair Repair Rating</span>
          </dt>
          <dd>{shopEntity.fairRepairRating}</dd>
          <dt>
            <span id="services">Services</span>
          </dt>
          <dd>{shopEntity.services}</dd>
        </dl>
        <Button tag={Link} to="/shop" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/shop/${shopEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ShopDetail;
