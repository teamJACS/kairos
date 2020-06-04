import * as types from '../constants/actionTypes'


export interface IState {
  user: string | null
}

const initialState: IState = {
  user: null
}

const authReducer = (state = initialState, action: any) => {
  switch (action) {
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