import { LoginFormInput } from "@/types";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { IdInput } from "./IdInput";
import { InputValidation } from "./InputValidation";
import { LoginButton } from "./LoginButton";
import { PwInput } from "./PwInput";

export const SignIn = () => {
    const navigate = useNavigate();
    const methods = useForm<LoginFormInput>({
        defaultValues: {
            id: "",
            pw: "",
        },
    });
    return (
        <div className="flex items-center justify-center w-screen h-screen flex-col">
            <div className="flex w-96 h-2/5 border-2 border-black flex-col p-2 items-center justify-center gap-6">
                <span className="text-5xl">로그인</span>
                <div className="flex flex-col w-full">
                    <FormProvider {...methods}>
                        <IdInput />
                        <PwInput />
                        <InputValidation />
                        <LoginButton />
                    </FormProvider>
                </div>
                <div>
                    <span className="text-xs font-bold">
                        회원이 아니신가요? |{" "}
                    </span>
                    <span
                        className="text-xs font-bold cursor-pointer"
                        onClick={() => {
                            navigate("/sign-up");
                        }}
                    >
                        회원가입
                    </span>
                </div>
            </div>
        </div>
    );
};
