import React, {useContext} from 'react'
import {Context, LOGIN} from '../providers/Provider'

const Simplelister = () => {
    const [store, ] = useContext(Context)
    const [, dispatch] = useContext(Context)
    return (
        <div>
            <button onClick={()=>{
                    dispatch({type: LOGIN});
                }}>{LOGIN}</button>
            <p>Secret data visible...</p>
        </div>
    )
}

export default Simplelister;