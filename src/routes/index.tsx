import { SignUp } from "@/pages/SignUp";
import React from "react";
import { useRoutes } from "react-router";

import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { UnAuthorizedRoute } from "./UnAuthorizedRoute";

export const Routes = (isAuthorized: boolean) => {
    return useRoutes([
        {
            path: "/",
            element: isAuthorized ? <Home /> : <UnAuthorizedRoute />,
        },
        {
            path: "/sign-in",
            element: <SignIn />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);
};
