import * as types from '../constants/actionTypes'
import { IJobState, IAction } from '../interfaces';


const initialState: IJobState = {
  jobId: null
}

const jobReducer = (state = initialState, action: IAction<string, IJobState>) => {
  switch (action.type) {
    case types.GET_JOB:
      return {
        ...state,
        jobId: action.payload
      };
    default:
      return { ...state }
  }
}

export default jobReducer;