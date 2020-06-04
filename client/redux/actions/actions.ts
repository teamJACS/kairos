import * as types from '../constants/actionTypes'
import { IAuthAction } from '../interfaces'


export const setUserId = (userId: string): IAuthAction<string> => ({
  type: types.GET_USER,
  payload: userId
})