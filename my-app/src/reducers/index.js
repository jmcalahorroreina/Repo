import {combineReducers} from 'redux'
import vehiclesReducer from './vehiclesReducer'

const reducers = {
	vehiclesReducer
}

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer