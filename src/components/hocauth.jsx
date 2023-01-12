import React, {useContext} from 'react';
import {Context} from '../providers/Provider'

export const requireAuth = (WrappedComponent) => {
    
    return (props) => {
        const [{authorized}, ] = useContext(Context)
        if (authorized !== true) {
          return <p>I dont know You</p>;
        } else {
            console.log(WrappedComponent)
            return(
                <WrappedComponent {...props}>
                    {props.children}
                </WrappedComponent>
            );
        }
    }
}

export default requireAuth;
