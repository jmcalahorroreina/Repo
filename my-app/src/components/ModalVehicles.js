import React,{useState,useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { useSelector, useDispatch } from 'react-redux';
import {postVehiclesRequest,putVehiclesRequest} from '../actions/TestActions'
import getVehicleId from '../services/getVehicleId';
 

 export default function ModalVehicles(props)
{
    
    const dispatch = useDispatch();
    const modal = useSelector(state => state.vehiclesReducer);

    const [vehicle,setVehicule] = useState(
        {
           
        }
    )

    const handleModalClose = () => 
    {
        props.onClose();
    }
    
    const handleNewVehicle = () => 
    {
        if(!vehicle.order || !vehicle.register || !vehicle.frame  )
            return alert("Los campos pedido,matrícula y bastidor son obligatorios")
        dispatch(postVehiclesRequest(vehicle));
    }
    const handleEditVehicle = () => 
    {
        if(!vehicle.order || !vehicle.register || !vehicle.frame  )
            return alert("Los campos pedido,matrícula y bastidor son obligatorios")

        dispatch(putVehiclesRequest(vehicle));
    }
    const handleChangeInput = (e) =>
    {
        
        let new_vehicle = Object.assign({},vehicle);
        new_vehicle[e.target.id] = e.target.value;
        setVehicule(new_vehicle);

    }

    useEffect(() => {
        const getVehicleInfo = async () => {
            const vehicule_selected = await getVehicleId(modal.vehicleId)
            setVehicule(
                vehicule_selected
            )      };

        if(modal.isEditing && modal.vehicleId)
            getVehicleInfo();
        else
            setVehicule(
                {}
            )  
      }, [modal.vehicleId,modal.isEditing]);
  
    return (
        <Modal
              show={modal.isEditing || modal.isAdding}
              onHide ={handleModalClose}
              animation={true}
            >
              <Modal.Header closeButton>
                <Modal.Title>{modal.isEditing ? "Edición de Vehículo" : "Alta Vehículo"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                <center>
                <Row>
                    <Col >
                    <h6>Número de Pedido*</h6>
                    <div className="form-group">
                        <input type="number" disabled={modal.isEditing} id="order" value={vehicle.order || ''} className="form-control" onChange={handleChangeInput} />
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <h6>Bastidor*</h6>
                    <div className="form-group">
                        <input type="text" id="frame"  value={vehicle.frame || ''} className="form-control" onChange={handleChangeInput} />
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <h6>Matrícula*</h6>
                    <div className="form-group">
                        <input type="text" id="register" value={vehicle.register || ''} className="form-control" onChange={handleChangeInput} />
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <h6>Modelo</h6>
                    <div className="form-group">
                        <input type="text" id="model" value={vehicle.model || ''} className="form-control" onChange={handleChangeInput} />
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <h6>Fecha de Entrega</h6>
                    <div className="p-field p-col-12 p-md-4">
                            <Calendar id="date"
                            readOnlyInput
                             dateFormat="dd/mm/yy" value={vehicle.date ? new Date(vehicle.date) : ''} onChange={handleChangeInput} showIcon />
                    </div>
                    </Col>
                </Row>
                </center>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                {modal.isEditing ?
                    <Button variant="danger" size={"sm"} onClick={handleEditVehicle}>
                        Guardar Cambios
                    </Button>
                    :
                    <Button variant="danger"  size={"sm"}  onClick={handleNewVehicle}>
                        Dar de Alta
                    </Button>
                }
              </Modal.Footer>
            </Modal>
    )

}

