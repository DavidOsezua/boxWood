import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qclbuxrxnullpyesilgt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbGJ1eHJ4bnVsbHB5ZXNpbGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NjA1MDAsImV4cCI6MjA2NTAzNjUwMH0.zJwIue5D_PFSF_49_Utb9gnmFR73P6Ehy5zSHlDwYcA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
