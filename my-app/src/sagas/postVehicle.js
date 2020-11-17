import { call, takeEvery,put } from 'redux-saga/effects'
import postVehicle from '../services/postVehicle'
import {FETCH_VEHICLES_REQUEST,CLOSE_MODAL,POST_VEHICLE_REQUEST} from "../constants/actions"

export function * postVehicleRequest (vehicle) {
  try {
    yield call(postVehicle,vehicle)
    yield put({type: FETCH_VEHICLES_REQUEST})
    yield put({type: CLOSE_MODAL})
  } catch (error) {
    console.log(error)
  }
}

export function * watchPostVehicleRequest () {
  yield takeEvery(POST_VEHICLE_REQUEST, postVehicleRequest)
}