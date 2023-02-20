import React from "react";

import { Routes } from "..";

export const AppRoutes = () => {
    const isAuthorized = false;
    return <div className="flex">{Routes(isAuthorized)}</div>;
};
