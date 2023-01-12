import React, {useContext} from 'react'
import {Context, LOGIN} from '../providers/Provider'

import C401 from './C401'

const Simplelister = () => {
    const [store, ] = useContext(Context)
    const [, dispatch] = useContext(Context)
    return (
        <div>
            <C401 />
            <button onClick={()=>{
                    dispatch({type: LOGIN});
                }}>{LOGIN}</button>
            <p>Secret data visible...</p>
        </div>
    )
}

export default Simplelister;