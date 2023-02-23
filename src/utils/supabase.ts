import { Database } from "@/types/schema";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oznuouydknzbfghzmmbb.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96bnVvdXlka256YmZnaHptbWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyNzc2NjYsImV4cCI6MTk5MTg1MzY2Nn0.wODQ0lnMJNa4B0plzzcaKGxtQ4CbGZ77h1Z_7MPqkVk";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
