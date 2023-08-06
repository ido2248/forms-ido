import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import jwt_decode from "jwt-decode"

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    const decoded = auth?.accessToken
        ? jwt_decode(auth.accessToken)
        : undefined

        const roles = decoded?.UserInfo?.roles || []

    /*return(
        roles.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ form: location}} replace />
                : <Navigate to="/login" state={{ form: location}} replace />
    );*/
    return (
        auth?.user
            ? <Outlet />
            : <Navigate to="/login" />
    )
}

export default RequireAuth;