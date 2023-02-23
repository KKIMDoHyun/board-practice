import { getBoards } from "@/apis/board";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const Board = () => {
    const {
        data: boardList,
        isLoading,
        isSuccess,
    } = useQuery<any>({
        queryKey: ["GET_BOARDS"],
        queryFn: () => getBoards(),
    });

    if (isLoading) return <div>Loading...</div>;
    if (!isSuccess) return <div>Error</div>;
    return (
        <div className="flex bg-slate-400 w-1/2 h-full gap-5 flex-col p-2">
            {boardList.map((board: any) => {
                return (
                    <div
                        className="flex bg-white border-black border-2 w-full h-72 flex-col"
                        key={board.id}
                    >
                        {/* 작성자 정보 */}
                        <div className="flex bg-slate-700 w-full h-14"></div>
                        {/* 글 */}
                        <div className="flex bg-slate-300 w-full h-full">
                            {board.content}
                        </div>
                        <div></div>
                        {/* 버튼 */}
                        <div></div>
                    </div>
                );
            })}
        </div>
    );
};
