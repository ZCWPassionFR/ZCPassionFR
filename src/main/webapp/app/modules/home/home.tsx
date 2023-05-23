import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <h2>FairRepair</h2>
        <p className="lead">Make car appointments Fair!</p>
        {account?.login ? (
          <div>
            <Alert color="success">Welcome {account.login}.</Alert>
            <button type="button" className="btn btn-success">
              Schedule an Appointment
            </button>
            <div className="divider" />
            <button type="button" className="btn btn-danger">
              Add a Vehicle
            </button>
            <p className="lead">Make car appointments Fair!</p>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              Welcome back! Please
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                sign in.
              </Link>
            </Alert>

            <Alert color="warning">
              You don&apos;t have an account yet?&nbsp;
              <Link to="/account/register" className="alert-link">
                Register a new account
              </Link>
            </Alert>
          </div>
        )}
        <p>Current API's we need to implement:</p>

        <ul>
          <li>
            <a href="https://api.carmd.com/member/docs#intro" target="_blank" rel="noopener noreferrer">
              CarMD API
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/maps/documentation/places/web-service" target="_blank" rel="noopener noreferrer">
              Google Places API
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Home;
