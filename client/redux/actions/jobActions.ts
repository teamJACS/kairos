import * as types from '../constants/actionTypes'
import { IAction, IJobState } from '../interfaces'

export const getJabs = (title: string, company: string, date: string, notes: string, status: string): IAction<string, IJobState> => ({
  type: types.GET_JAB,
  payload: {
    title,
    company,
    date,
    notes,
    status
  }
})