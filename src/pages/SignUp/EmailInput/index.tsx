import { SignUpFormType } from "@/types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const EmailInput = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<SignUpFormType>();
    return (
        <div className="flex flex-col gap-1">
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
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "이메일을 입력하세요.",
                    },
                    pattern: {
                        value: /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                        message: "이메일 형식이 아닙니다",
                    },
                }}
            />
            {errors.email?.message && (
                <span className="text-xs text-red-600 font-bold">
                    {errors.email.message}
                </span>
            )}
        </div>
    );
};
