import { SignUpFormType } from "@/types";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { EmailInput } from "./EmailInput";
import { SignUpButton } from "./SignUpButton";

export const SignUp = () => {
    const methods = useForm<SignUpFormType>({
        defaultValues: {
            email: "",
            pw: "",
            rePw: "",
            name: "",
            phoneNumber: "",
            gender: "UNKNOWN",
        },
    });
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="flex w-96 h-3/5 border-2 border-black bg-white flex-col items-center pt-5">
                <span className="text-5xl">회원가입</span>
                <div className="flex flex-col w-full h-full bg-blue-50 mt-5">
                    <FormProvider {...methods}>
                        <EmailInput />
                        <SignUpButton />
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};
