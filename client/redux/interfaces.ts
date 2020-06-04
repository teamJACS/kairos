import * as types from '../redux/constants/actionTypes'

export interface IAuthState {
  auth: IState
}

export interface IState {
  userId: string | null
}

export interface IAuthAction<T> {
  type: typeof types.GET_USER
  payload: T
}