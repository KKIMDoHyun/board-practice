import { isAuthorizedAtom } from "@/stores/auth";
import { useAtom } from "jotai";
import React from "react";

export const TopBar = () => {
    const [isAuthorized, setIsAuthorized] = useAtom(isAuthorizedAtom);
    return (
        <div className=" flex bg-slate-700 h-10 items-center justify-between pr-5 pl-5 sticky top-0 w-full">
            <span className="text-white text-2xl">게시판</span>
            {isAuthorized && (
                <span
                    className="text-white cursor-pointer"
                    onClick={() => {
                        setIsAuthorized(false);
                    }}
                >
                    {"로그아웃"}
                </span>
            )}
        </div>
    );
};
