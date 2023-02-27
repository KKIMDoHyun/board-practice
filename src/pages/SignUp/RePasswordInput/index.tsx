import { SignUpFormType } from "@/types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const RePasswordInput = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<SignUpFormType>();
    return (
        <div className="flex flex-col gap-1">
            <Controller
                control={control}
                name="rePw"
                render={({ field: { value, onChange, onBlur } }) => (
                    <input
                        value={value}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                        onBlur={onBlur}
                        placeholder="비밀번호를 재입력하세요."
                        className="h-10 border-2 border-black"
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "비밀번호를 재입력하세요.",
                    },
                    validate: (value, formValue) =>
                        value === formValue.password || "비밀번호와 다릅니다.",
                }}
            />
            {errors.rePw?.message && (
                <span className="text-xs text-red-600 font-bold">
                    {errors.rePw.message}
                </span>
            )}
        </div>
    );
};
