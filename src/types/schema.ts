export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[];

export interface Database {
    public: {
        Tables: {
            boards: {
                Row: {
                    content: string;
                    created_at: string;
                    id: number;
                };
                Insert: {
                    content: string;
                    created_at?: string;
                    id?: number;
                };
                Update: {
                    content?: string;
                    created_at?: string;
                    id?: number;
                };
            };
            user: {
                Row: {
                    created_at: string;
                    id: number;
                    password: string;
                    userId: string;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    password: string;
                    userId: string;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    password?: string;
                    userId?: string;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
