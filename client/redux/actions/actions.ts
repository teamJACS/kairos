import * as types from '../constants/actionTypes'
import { IAuthAction } from '../interfaces'


export const setUserId = (userId: string | null): IAuthAction<string | null> => ({
  type: types.GET_USER,
  payload: userId
})