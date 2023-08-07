import { useEffect, useState,Dispatch,SetStateAction} from "react"

type Response<T>=[
    T,
    Dispatch<SetStateAction<T>>
]
function usePersistedState<T>(Key:string, initialState:T):Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(Key)

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState;
        }
    });

    useEffect(() => {
        localStorage.setItem(Key, JSON.stringify(state))
    }, [Key, state])
    return [state, setState]
}

export { usePersistedState }