import * as types from '../constants/actionTypes'
import { IAuthState, IAuthAction } from '../interfaces'

const initialState: IAuthState = {
  user: null
}

const authReducer = (state = initialState, action: IAuthAction<string>) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return { ...state }
  }
}

export default authReducer;