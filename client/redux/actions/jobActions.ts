import * as types from '../constants/actionTypes'
import { IAction } from '../interfaces'

export const getJob = (jobId: string): IAction<string, string> => ({
  type: types.GET_JOB,
  payload: jobId
})