import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Context} from '../providers/Provider'

const useAuthorized = (navTo = "/C401") => {
    const [{authorized}, ] = useContext(Context)
    const navigate = useNavigate();

    console.log("hook")
    useEffect(() => {
        console.log(authorized)
        if (authorized !== true) {
          navigate(navTo);
        }
      }, [authorized]);
}

export default useAuthorized;