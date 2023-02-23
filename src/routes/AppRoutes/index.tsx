import { TopBar } from "@/components/TopBar";
import { isAuthorizedAtom } from "@/stores/login";
import { useAtomValue } from "jotai";
import React from "react";

import { Routes } from "..";

export const AppRoutes = () => {
    const isAuthorized = useAtomValue(isAuthorizedAtom);
    return (
        <div className="flex flex-col bg-slate-300 h-screen">
            <TopBar />
            {Routes(isAuthorized)}
        </div>
    );
};
