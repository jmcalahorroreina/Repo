import React,{useMemo} from 'react'
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import {deleteVehiclesRequest, showModalAdd, showModalEdit, closeModal} from '../actions/TestActions'
import ModalVehicles from './ModalVehicles'
import PropTypes from "prop-types";
import moment from 'moment'

export default function TableVehicles (props)
{
   
    const dispatch = useDispatch();
    const {title,data} = props;
   

    const handleShowModal = () =>
    {
       
        dispatch(showModalAdd())
    }
 
    const handleCloseModal = () =>
    {
        dispatch(closeModal())
    }

    const columns = useMemo(() => 
    {
        return [
           {
                name: 'Pedido',
                selector: 'order',
                sortable: true,
           },
           {
            name: 'Bastidor',
            selector: 'frame',
            sortable: true,
            },
            {
                name: 'Matrícula',
                selector: 'register',
                sortable: true,
                },
            {
                name: 'Modelo',
                selector: 'model',
                sortable: true,
                },
            {
                name: 'Fecha de Entrega',
                selector: 'date',
                sortable: true,
                cell: (row) => {
                    if(!row.date)
                    return "";
                    
                    return moment(row.date).format("DD/MM/YYYY");
                  },
           },
          
            {
                cell:(row) => 
                {
                    return   <>
                    <Button variant={"warning"}
                     onClick={() =>  dispatch(showModalEdit(row.order))}><i className="pi pi-pencil"></i></Button>
                    &nbsp;
                    <Button variant={"danger"}
                     onClick={() =>   dispatch(deleteVehiclesRequest(row.order))}><i className="pi pi-trash"></i></Button>
                    </>
                }
            },
        ]
    },[dispatch]);

    const paginationOptions = { rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };

 return (
     <>
        <DataTable
        title={title}
        columns={columns}
        data={data}
        pagination
        persistTableHead
        pagination
        paginationRowsPerPageOptions={[10,50]}
        paginationComponentOptions={paginationOptions}
        >
        </DataTable>
        <Button variant={"success"} onClick={handleShowModal}>
            Añadir Vehículo
        </Button>
        <ModalVehicles onClose={handleCloseModal}
    />
    </>)
}

TableVehicles.defaultProps = {
    data:[]
  };
  
TableVehicles.propTypes = {
/** Rows de la tabla */
data: PropTypes.array,
};
