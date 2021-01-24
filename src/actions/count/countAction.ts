export const SETCOUNT = 'SETCOUNT';
interface SetCountI {
    type: typeof SETCOUNT,
    payload: {
        count: number
    }
}
export const setCount = (count: number): SetCountI => ({
    type: SETCOUNT,
    payload: {
        count
    }
})
export type countActionType = SetCountI;