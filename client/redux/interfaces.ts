export interface IAuthState {
  auth: IState
}

export interface IJobIdState {
  job: IJobState
}

export interface IState {
  userId: string | null
}

export interface IAction<TType, TPay> {
  type: TType
  payload?: TPay
}

export interface IJobState {
  jobId: string | null
}