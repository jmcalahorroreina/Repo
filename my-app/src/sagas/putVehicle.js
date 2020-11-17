import { call, takeEvery,put } from 'redux-saga/effects'
import putVehicle from '../services/putVehicle'
import {PUT_VEHICLE_REQUEST,FETCH_VEHICLES_REQUEST,CLOSE_MODAL} from "../constants/actions"

export function * putVehicleRequest (vehicle) {
  try {
    yield call(putVehicle,vehicle)
    yield put({type: FETCH_VEHICLES_REQUEST})
    yield put({type: CLOSE_MODAL})
  } catch (error) {
    console.log(error)
  }
}

export function * watchPutVehicleRequest () {
  yield takeEvery(PUT_VEHICLE_REQUEST, putVehicleRequest)
}