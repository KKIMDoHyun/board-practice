import { SignUpFormType } from "@/types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const NameInput = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<SignUpFormType>();

    return (
        <div className="flex flex-col gap-1">
            <Controller
                control={control}
                name="name"
                render={({ field: { value, onChange } }) => (
                    <input
                        value={value}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                        placeholder="이름을 입력하세요."
                        className="border-2 border-black h-10"
                    />
                )}
                rules={{
                    required: {
                        value: true,
                        message: "이름을 입력하세요.",
                    },
                    minLength: {
                        value: 2,
                        message: "최소 2글자 이상 입력하십시오.",
                    },
                }}
            />
            {errors.name?.message && (
                <span className="text-xs text-red-600 font-bold">
                    {errors.name.message}
                </span>
            )}
        </div>
    );
};
