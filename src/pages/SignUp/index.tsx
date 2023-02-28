import { SignUpFormType } from "@/types";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { RePasswordInput } from "./RePasswordInput";
import { SignUpButton } from "./SignUpButton";

export const SignUp = () => {
    const methods = useForm<SignUpFormType>({
        defaultValues: {
            email: "",
            password: "",
            rePassword: "",
            // name: "",
        },
    });
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="flex w-96 border-2 p-3 border-black bg-white flex-col items-center pt-5">
                <span className="text-5xl">회원가입</span>
                <div className="flex flex-col w-full h-full bg-blue-50 mt-5 gap-3">
                    <FormProvider {...methods}>
                        <EmailInput />
                        <PasswordInput />
                        <RePasswordInput />
                        {/* <NameInput /> */}
                        <SignUpButton />
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};
