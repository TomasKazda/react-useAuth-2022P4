import {createContext, useReducer, useEffect} from "react";

const LOCAL_STORAGE_ID = "mystorageidsCnt2G9B";

export const LOGIN = "LOGIN";
export const RESET = "RESET";

const copyMultidimensionalArray = arr => JSON.parse(JSON.stringify(arr));

const initialState = {authorized: false};

let storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));

const dataReducer = (state, action) => {
    switch (action.type) {
        case LOGIN: {
            return {...state, authorized: true};
        }
        case RESET: {
            return  initialState;
        }
        default: {
            return state;
        }
    }
}

export const Context = createContext();

export const Provider = ({children, ...rest}) => {
    const [store, dispatch] = useReducer(dataReducer, storedData || initialState);
    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(store));
    },[store])
    return (
        <Context.Provider value={[store, dispatch]}>
            {children}
        </Context.Provider>
    );
}