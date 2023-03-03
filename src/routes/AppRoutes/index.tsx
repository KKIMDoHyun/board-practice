import { TopBar } from "@/components/TopBar";
import { CompleteModal } from "@/pages/SignUp/CompleteModal";
import { isAuthorizedAtom } from "@/stores/auth";
import { useAtomValue } from "jotai";
import React from "react";

import { Routes } from "..";

export const AppRoutes = () => {
    const isAuthorized = useAtomValue(isAuthorizedAtom);
    return (
        <div className="flex flex-col bg-slate-300 h-screen">
            <TopBar />
            <CompleteModal />
            {Routes(isAuthorized)}
        </div>
    );
};
