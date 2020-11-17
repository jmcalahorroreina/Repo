import { fork, all } from 'redux-saga/effects'
import { watchfetchVehiclesRequest } from './fetchVehicles'
import { watchPostVehicleRequest } from './postVehicle'
import { watchPutVehicleRequest } from './putVehicle'
import { watchDeleteVehicleRequest } from './deleteVehicle'

export default function * root () {
  yield all([
    fork(watchfetchVehiclesRequest),
    fork(watchPostVehicleRequest),
    fork(watchPutVehicleRequest),
    fork(watchDeleteVehicleRequest)
  ])
}