import { SignUpFormType } from "@/types";
import { PasswordReg } from "@/utils/regExp";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { InputCss } from "../commonCss";

export const PasswordInput = () => {
    const {
        control,
        formState: { errors, isSubmitted },
    } = useFormContext<SignUpFormType>();

    return (
        <div className="flex flex-col">
            <span className="text-sm font-bold mb-1">비밀번호</span>
            <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange } }) => (
                    <input
                        value={value}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        className={InputCss(
                            isSubmitted,
                            errors.password?.message
                        )}
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "*비밀번호를 입력하세요.",
                    },
                    pattern: {
                        value: PasswordReg,
                        message: "*비밀번호 형식이 잘못되었습니다.",
                    },
                }}
            />
            {errors.password?.message && (
                <span className="text-xs text-red-600 font-bold mt-1">
                    {errors.password.message}
                </span>
            )}
        </div>
    );
};
