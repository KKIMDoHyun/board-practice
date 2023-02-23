import { isAuthorizedAtom } from "@/stores/login";
import { useAtomValue } from "jotai";
import React from "react";

import { Board } from "./Board";
import { Input } from "./Input";

export const Home = () => {
    const isAuthorized = useAtomValue(isAuthorizedAtom);
    console.log(isAuthorized);
    return (
        <div className="flex justify-center items-center flex-col scroll-auto w-full h-screen">
            <Input />
            <Board />
        </div>
    );
};
