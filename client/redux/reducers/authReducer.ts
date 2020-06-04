import * as types from '../constants/actionTypes'
import { IState, IAction } from '../interfaces'

const initialState: IState = {
  userId: null
}

const authReducer = (state = initialState, action: IAction<string, string>) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        userId: action.payload
      };
    default:
      return { ...state }
  }
}

export default authReducer;