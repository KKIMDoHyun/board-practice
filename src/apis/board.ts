import { supabase } from "@/utils/supabase";

export const getBoards = async () => {
    const { data: boards } = await supabase.from("boards").select();
    return boards;
};
