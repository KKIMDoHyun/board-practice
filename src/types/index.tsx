export type LoginFormInput = {
    id: string;
    password: string;
};

export type SignUpFormType = {
    email: string;
    password: string;
    rePw: string;
    name: string;
    // phoneNumber: string;
    // gender: "MALE" | "FEMALE" | "UNKNOWN";
};

export type BoardType = {
    id: string;
    createdAt: string;
    content: string;
};
