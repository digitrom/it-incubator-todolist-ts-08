export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.err}
        default:
            return state
    }
}
export type setStatusType = ReturnType<typeof setStatusAC>
export type setErrorType = ReturnType<typeof setErrorAC>
export const setStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setErrorAC = (err: null | string ) => ({type: 'APP/SET-ERROR', err} as const)

type ActionsType = setStatusType | setErrorType