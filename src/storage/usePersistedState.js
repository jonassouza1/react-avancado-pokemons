import { useEffect, useState } from "react"

function usePersistedState(Key, initialState) {
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