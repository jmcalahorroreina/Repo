import TableVehicles from './TableVehicles';
import React from 'react';
import {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchVehiclesRequest} from '../actions/TestActions'
import Card from "react-bootstrap/Card";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ()
 {
  const [init, setInit] = useState(false);

  const vehicles = useSelector(state => state.vehiclesReducer.vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!init) {
      setInit(true);
      dispatch(fetchVehiclesRequest());
    }
  }, [init, vehicles, dispatch]);

    return ( 
      <>
      <Card>
              <Card.Header>LISTA DE VEHÍCULOS</Card.Header>
              <Card.Body>
                <Row>
                    <Col>
                    <TableVehicles
                    data={vehicles}
                    />
                  </Col>
                </Row>
              </Card.Body>
        </Card>
        
      </>
    );
}


