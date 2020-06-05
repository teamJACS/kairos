import * as types from '../constants/actionTypes'
import { IAction } from '../interfaces'


export const setUserId = (userId: string | null): IAction<string, string | null> => ({
  type: types.GET_USER,
  payload: userId
})