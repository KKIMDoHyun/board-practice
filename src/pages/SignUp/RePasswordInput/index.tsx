import { SignUpFormType } from "@/types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const RePasswordInput = () => {
    const {
        control,
        formState: { errors },
        getValues,
    } = useFormContext<SignUpFormType>();
    return (
        <div className="flex flex-col">
            <span className="text-sm font-bold mb-1">비밀번호 재입력</span>
            <Controller
                control={control}
                name="rePassword"
                render={({ field: { value, onChange, onBlur } }) => (
                    <input
                        value={value}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                        type="password"
                        onBlur={onBlur}
                        placeholder="비밀번호를 재입력하세요."
                        className={
                            errors.rePassword?.message
                                ? "border-2 border-red-600 h-10 p-1"
                                : getValues("password") === value &&
                                  value.length > 0
                                ? "border-2 border-green-600 h-10 p-1"
                                : "border-2 border-black h-10 p-1"
                        }
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "*비밀번호를 재입력하세요.",
                    },
                    validate: (value, formValue) =>
                        value === formValue.password || "*비밀번호와 다릅니다.",
                }}
            />
            {errors.rePassword?.message && (
                <span className="text-xs text-red-600 font-bold mt-1">
                    {errors.rePassword.message}
                </span>
            )}
        </div>
    );
};
