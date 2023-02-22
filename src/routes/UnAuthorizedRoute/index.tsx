import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const UnAuthorizedRoute = () => {
    const location = useLocation();
    return (
        <Navigate
            to="/sign-in"
            state={{
                prev: location.state,
                location,
            }}
        />
    );
};
