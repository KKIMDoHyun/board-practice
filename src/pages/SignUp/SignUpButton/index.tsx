import { SignUpFormType } from "@/types";
import { supabase } from "@/utils/supabase";
import React from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SignUpFieldProps = {
    email: string;
    password: string;
    // name: string;
};

type SupabaseSignUpPayload = SignUpFieldProps;

export const SignUpButton = () => {
    const navigate = useNavigate();
    const { handleSubmit } = useFormContext<SignUpFormType>();
    const signUp = async (payload: SupabaseSignUpPayload) => {
        try {
            console.log("DDD", payload);
            const { error } = await supabase.auth.signUp(payload);
            if (error) {
                console.log(error);
            } else {
                console.log("성공");
                navigate("/sign-in");
            }
        } catch (err) {
            console.log(err);
        }
    };
    const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
        const payload = {
            email: data.email,
            password: data.password,
        };
        signUp(payload);
    };
    return (
        <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
            onClick={handleSubmit(onSubmit)}
        >
            회원가입 완료
        </button>
    );
};
