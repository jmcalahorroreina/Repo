import {
  FETCH_VEHICLES_REQUEST,
  FETCH_VEHICLES_RESPONSE,
  POST_VEHICLE_REQUEST,
  PUT_VEHICLE_REQUEST,
  DELETE_VEHICLE_REQUEST,
  SHOW_MODAL_ADD,
  SHOW_MODAL_EDIT,
  CLOSE_MODAL

} from "../constants/actions"

export const fetchVehiclesRequest = () => {
  return {
    type: FETCH_VEHICLES_REQUEST
  };
}
export const fetchVehiclesResponse = () => {
  return {
    type: FETCH_VEHICLES_RESPONSE
  };
}
export const postVehiclesRequest = (vehicle) => {
  return {
    type: POST_VEHICLE_REQUEST,
    payload:vehicle
  };
}
export const putVehiclesRequest = (vehicle) => {
  return {
    type: PUT_VEHICLE_REQUEST,
    payload:vehicle
  };
}
export const deleteVehiclesRequest = (id) => {
  return {
    type: DELETE_VEHICLE_REQUEST,
    payload:{id:id}
  };
}

export const showModalAdd = () => {
  return {
    type: SHOW_MODAL_ADD
  };
}
export const showModalEdit = (id) => {
  return {
    type: SHOW_MODAL_EDIT,
    payload:{vehicleId:id}
  };
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
}


  
  
 



