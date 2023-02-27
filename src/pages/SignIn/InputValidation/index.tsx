import { LoginFormInput } from "@/types";
import React from "react";
import { useFormContext } from "react-hook-form";

export const InputValidation = () => {
    const {
        formState: { errors },
    } = useFormContext<LoginFormInput>();
    const errorList: string[] = [];
    if (errors.id?.message) errorList.push(errors.id.message);
    if (errors.password?.message) errorList.push(errors.password.message);
    return (
        <div className="flex mb-2">
            <span className="text-xs text-red-500 font-bold">
                {errorList[0]}
            </span>
        </div>
    );
};
