import React from "react";

export const Board = () => {
    return (
        <div className="flex bg-slate-400 w-1/2 h-full gap-5 flex-col p-2">
            <div className="flex bg-white border-black border-2 w-full h-72">
                {/* 작성자 정보 */}
                <div className="flex bg-slate-300 w-full h-14"></div>
                {/* 글 */}
                <div className="flex bg-slate-300 w-full h-14"></div>
                <div></div>
                {/* 버튼 */}
                <div></div>
            </div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
            <div className="flex bg-white border-black border-2 w-full h-72"></div>
        </div>
    );
};
