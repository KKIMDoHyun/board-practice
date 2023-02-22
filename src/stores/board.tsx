import { BoardType } from "@/types";
import { atom } from "jotai";

export const uuid = () =>
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[x]/g, () =>
        Math.floor(Math.random() * 16).toString(16)
    );

export const boardAtom = atom<BoardType[]>([]);
