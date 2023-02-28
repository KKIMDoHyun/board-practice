import { isAuthorizedAtom } from "@/stores/login";
import { LoginFormInput } from "@/types";
import { useAtom } from "jotai";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { EmailInput } from "./EmailInput";
import { InputValidation } from "./InputValidation";
import { LoginButton } from "./LoginButton";
import { PwInput } from "./PwInput";

export const SignIn = () => {
    const [isAuthorized] = useAtom(isAuthorizedAtom);

    const navigate = useNavigate();
    console.log(isAuthorized);
    const methods = useForm<LoginFormInput>({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    return (
        <div className="flex items-center justify-center w-screen h-full flex-col">
            <div className="flex w-96 h-2/5 border-2 border-black flex-col p-2 items-center justify-center gap-6">
                <span className="text-5xl">로그인</span>
                <div className="flex flex-col w-full">
                    <FormProvider {...methods}>
                        <EmailInput />
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
