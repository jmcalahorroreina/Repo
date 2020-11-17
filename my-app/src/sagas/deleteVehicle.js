import { call, takeEvery,put } from 'redux-saga/effects'
import deleteVehicle from '../services/deleteVehicle'
import {FETCH_VEHICLES_REQUEST,DELETE_VEHICLE_REQUEST} from "../constants/actions"

export function * deleteVehicleRequest (id) {
  try {
    yield call(deleteVehicle,id)
    yield put({type: FETCH_VEHICLES_REQUEST})
  } catch (error) {
    console.log(error)
  }
}

export function * watchDeleteVehicleRequest () {
  yield takeEvery(DELETE_VEHICLE_REQUEST, deleteVehicleRequest)
}