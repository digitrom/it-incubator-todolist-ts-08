import {TodolistType} from "../App";

export const TodolistsReducer = (state: TodolistType[], action: KingType): TodolistType[] => {
    switch (action.type) {
        case "REMOVE-TODOLISTS": {
            return state.filter(el=> el.id !== action.payload.id)
        }
        default:
            return state
    }
}
type KingType = RemoveTodolistsACType

export type RemoveTodolistsACType = ReturnType<typeof removeTodolistsAC>
export const removeTodolistsAC = (id: string) => {
    return {
        type: "REMOVE-TODOLISTS",
        payload: {
            id
        }
    } as const
}