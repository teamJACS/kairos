import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import jobReducer from './reducers/jobReducer'

export default combineReducers({
  auth: authReducer,
  job: jobReducer
})