import { SignUpFormType } from "@/types";
import React from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SignUpButton = () => {
    const navigate = useNavigate();
    const { handleSubmit } = useFormContext<SignUpFormType>();
    const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
        console.log(data);
        navigate("/sign-in");
    };

    return (
        <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
            onClick={handleSubmit(onSubmit)}
        >
            로그인
        </button>
    );
};
