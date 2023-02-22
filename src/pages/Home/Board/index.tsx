import { boardAtom } from "@/stores/board";
import { useAtomValue } from "jotai";
import React from "react";

export const Board = () => {
    const boards = useAtomValue(boardAtom);
    return (
        <div className="flex bg-slate-400 w-1/2 h-full gap-5 flex-col p-2">
            {boards.map((board) => {
                return (
                    <div
                        className="flex bg-white border-black border-2 w-full h-72"
                        key={board.id}
                    >
                        {/* 작성자 정보 */}
                        <div className="flex bg-slate-300 w-full h-14"></div>
                        {/* 글 */}
                        <div className="flex bg-slate-300 w-full h-14">
                            {board.content}
                        </div>
                        <div></div>
                        {/* 버튼 */}
                        <div></div>
                    </div>
                );
            })}

            <div className="flex bg-white border-black border-2 w-full h-72"></div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
        </div>
    );
};
