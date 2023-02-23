export type LoginFormInput = {
    id: string;
    pw: string;
};

export type SignUpFormType = {
    email: string;
    pw: string;
    rePw: string;
    name: string;
    phoneNumber: string;
    gender: "MALE" | "FEMALE" | "UNKNOWN";
};

export type BoardType = {
    id: string;
    createdAt: string;
    content: string;
};
