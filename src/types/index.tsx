export type LoginFormInput = {
    email: string;
    password: string;
};

export type SignUpFormType = {
    email: string;
    password: string;
    rePassword: string;
    // name: string;
    // phoneNumber: string;
    // gender: "MALE" | "FEMALE" | "UNKNOWN";
};

export type BoardType = {
    id: string;
    createdAt: string;
    content: string;
};
