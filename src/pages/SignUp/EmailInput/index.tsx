import { SignUpFormType } from "@/types";
import { EmailReg } from "@/utils/regExp";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { InputCss } from "../commonCss";

export const EmailInput = () => {
    const {
        control,
        formState: { errors, isSubmitted },
    } = useFormContext<SignUpFormType>();
    return (
        <div className="flex flex-col">
            <span className="text-sm font-bold mb-1">이메일</span>
            <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (
                    <input
                        value={value}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                        placeholder="email을 입력하세요."
                        className={InputCss(isSubmitted, errors.email?.message)}
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "*이메일을 입력하세요.",
                    },
                    pattern: {
                        value: EmailReg,
                        message: "*이메일 형식이 아닙니다",
                    },
                }}
            />
            {errors.email?.message && (
                <span className="text-xs text-red-600 font-bold mt-1">
                    {errors.email.message}
                </span>
            )}
        </div>
    );
};
