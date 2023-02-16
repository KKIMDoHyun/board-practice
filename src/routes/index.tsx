import React from "react";
import { useRoutes } from "react-router";

import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const Routes = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
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
