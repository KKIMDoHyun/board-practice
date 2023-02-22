import React, { useState } from "react";

export const Input = () => {
    const [post, setPost] = useState<string>("");

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value);
    };
    const handleAddPost = () => {
        /**
         * [TODO] 게시글 작성 API 연동해야함
         */
        if (post.length === 0) {
            console.log("내용 없음");
        } else {
            console.log("게시글 추가");
            setPost("");
        }
    };

    return (
        <div className="flex w-1/2 h-72 items-end p-4">
            <textarea
                className="border-2 border-black w-full h-full mr-4 resize-none"
                value={post}
                onChange={(e) => handleTextArea(e)}
            />
            <button
                className="flex border-2 border-black w-28 h-10 items-center justify-center bg-slate-200"
                onClick={handleAddPost}
            >
                작성
            </button>
        </div>
    );
};
