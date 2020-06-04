import * as types from '../constants/actionTypes'
import { IJobState, IAction } from '../interfaces';


const initialState: IJobState = {
  title: null,
  company: null,
  date: null,
  notes: null,
  status: null
}

const jobReducer = (state = initialState, action: IAction<string, IJobState>) => {
  switch (action.type) {
    case types.GET_JAB:
      return {
        ...state,
        title: action.payload,
        company: action.payload,
        date: action.payload,
        notes: action.payload,
        status: action.payload
      };
    default:
      return { ...state }
  }
}

export default jobReducer;