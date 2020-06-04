import * as types from '../redux/constants/actionTypes'

export interface IAuthState {
  user: string | null
}

export interface IAuthAction<T> {
  type: typeof types.GET_USER
  payload: T
}