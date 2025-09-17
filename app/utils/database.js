import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://fanbzgypecpkimywdtpz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbmJ6Z3lwZWNwa2lteXdkdHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1OTQ2NTAsImV4cCI6MjA3MzE3MDY1MH0.5_3DuS5QGM1vOcBaHfzN7QiF32P4idQBmWBYPv6bL_A"
)

export default supabase