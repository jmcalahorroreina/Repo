export function initialState () {
    return {
        vehicles:[],
        
    }
  }
  
  export  default (state = initialState(), action) =>
  {
    switch(action.type){
        case "FETCH_VEHICLES_REQUEST": 
            return state;
        case "FETCH_VEHICLES_RESPONSE": 
            return {
                ...state,
                vehicles:action.vehicles
            }
        case "POST_VEHICLE_REQUEST": 
            return state;
        case "PUT_VEHICLE_REQUEST": 
            return state;
        case "DELETE_VEHICLE_REQUEST": 
            return state;
        case "SHOW_MODAL_ADD": 
            return {
                ...state,
                isAdding:true,
                isEditing:false,
                vehicleId:-1
            }
        case "SHOW_MODAL_EDIT": 
            return {
                ...state,
                isAdding:false,
                isEditing:true,
                vehicleId:action.payload.vehicleId
            }
        case "CLOSE_MODAL": 
            return {
                ...state,
                isAdding:false,
                isEditing:false,
                vehicleId:""
            }

        default:
            return state;
        }
  }