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
          </div>
        ) : (
          <div>
            <Alert color="warning">
              If you want to
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                sign in
              </Link>
              , you can try the default accounts:
              <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;) <br />- User (login=&quot;user&quot; and
              password=&quot;user&quot;).
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
