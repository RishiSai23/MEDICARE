import { createClient } from '@supabase/supabase-js';

// 🔐 Replace these with your actual keys from Supabase > Project > Settings > API
const supabaseUrl = 'https://icudwjspgmthgrjrldxg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljdWR3anNwZ210aGdyanJsZHhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MjYwNjMsImV4cCI6MjA2NjQwMjA2M30.M008pjx7hnw_ABv3McoMsz0bUtPej8nuQcbm9WZv3ho';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
