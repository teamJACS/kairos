import * as types from '../constants/actionTypes'
import { IAuthAction } from '../interfaces'


export const auth = (userId: string): IAuthAction<string> => ({
  type: types.GET_USER,
  payload: userId
})