import { LoginFormInput } from "@/types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const EmailInput = () => {
    const { control } = useFormContext<LoginFormInput>();

    return (
        <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur } }) => (
                <input
                    className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                    onBlur={onBlur}
                    placeholder="이메일을 입력하세요."
                />
            )}
            rules={{
                required: {
                    value: true,
                    message: "이메일을 입력하세요.",
                },
            }}
        />
    );
};
