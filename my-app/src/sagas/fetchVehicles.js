import { call, takeEvery, put } from 'redux-saga/effects'
import getVehicles from '../services/getVehicles'
import {FETCH_VEHICLES_RESPONSE,FETCH_VEHICLES_REQUEST} from "../constants/actions"


export function * fetchVehiclesRequest () {
  try {
    const result = yield call(getVehicles)
    yield put({type: FETCH_VEHICLES_RESPONSE, vehicles: result.vehicles})
  } catch (error) {
    console.log(error)
  }
}

export function * watchfetchVehiclesRequest () {
  yield takeEvery(FETCH_VEHICLES_REQUEST, fetchVehiclesRequest)
}