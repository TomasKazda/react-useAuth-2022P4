import React, {useContext} from 'react'
import {Context, RESET, LOGIN} from '../providers/Provider'
import { useNavigate } from "react-router-dom";
import useAuthorized from "../hooks/useAuthorized"

const Simplesetter = () => {
    useAuthorized();
    const [, dispatch] = useContext(Context)
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <p><button onClick={()=>{
                    dispatch({type: LOGIN});
                    navigate("/");
                }}>{LOGIN}</button></p>
                <p><button onClick={()=>{
                    dispatch({type: RESET});
                }}>{RESET}</button></p>
            </div>
        </div>
    )
}

export default Simplesetter;