export type LoginFormInput = {
    id: string;
    pw: string;
};

export type BoardType = {
    id: string;
    createdAt: string;
    updatedAt: string | null;
    userId: string;
    content: string;
};
