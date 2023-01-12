import React from 'react'
import {Link} from 'react-router-dom'
import requireAuth from "./hocauth"
const C401 = () => {
    return (
        <div><h1>Unauthorized... 
            <Link to="/">goto index</Link></h1>
        </div>
    )
}

export default requireAuth(C401);