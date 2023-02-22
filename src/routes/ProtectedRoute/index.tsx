import { isAuthorizedAtom } from "@/stores/login";
import { useAtomValue } from "jotai";
import { redirect } from "react-router-dom";

type TRoute = {
    children: any;
};
export const ProtectedRoute = ({ children }: TRoute) => {
    const isAuthorized = useAtomValue(isAuthorizedAtom);
    if (!isAuthorized) {
        return redirect("/sign-in");
    }
    return children;
};
