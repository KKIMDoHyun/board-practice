import React from "react";
import { useRoutes } from "react-router";

import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UnAuthorizedRoute } from "./UnAuthorizedRoute";

export const Routes = (isAuthorized: boolean) => {
    return useRoutes([
        {
            path: "/",
            element: isAuthorized ? <Home /> : <UnAuthorizedRoute />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);
};
