import { isAuthorizedAtom } from "@/stores/login";
import { LoginFormInput } from "@/types";
import { supabase } from "@/utils/supabase";
import { useAtom } from "jotai";
import React from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SignInFieldProps = {
    email: string;
    password: string;
};

export const LoginButton = () => {
    const navigate = useNavigate();
    const [, setIsAuthorized] = useAtom(isAuthorizedAtom);

    const { handleSubmit } = useFormContext<LoginFormInput>();
    const signIn = async (payload: SignInFieldProps) => {
        try {
            console.log("DDD", payload);
            const { error, data } = await supabase.auth.signInWithPassword(
                payload
            );
            if (error) {
                console.log(error);
            } else {
                console.log("성공");
                console.log(data);
                setIsAuthorized(true);
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        }
    };
    const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
        console.log(data);
        signIn(data);
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
