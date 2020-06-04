export interface IAuthState {
  auth: IState
}

export interface IState {
  userId: string | null
}

export interface IAction<TType, TPay> {
  type: TType
  payload?: TPay
}

export interface IJobState {
  title: string | null
  company: string | null
  date: string | null
  notes: string | null
  status: string | null
}