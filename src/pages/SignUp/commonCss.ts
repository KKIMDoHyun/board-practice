export const InputCss = (isSubmitted: boolean, message: string | undefined) => {
    return !isSubmitted
        ? "border-2 border-black h-10 p-1"
        : message
        ? "border-2 border-red-600 h-10 p-1"
        : "border-2 border-green-600 h-10 p-1";
};
