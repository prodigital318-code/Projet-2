// config.js - Configuration Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://gopangnvdrsrdrrgbste.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvcGFuZ252ZHJzcmRycmdic3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNzY4Niwib3hwIjoyMDc0NzUyNjg2fQ.R8iyquMXsaT5oTK-puTu8uPeifq6co4gKVV4FiBq1p0';

// Création du client Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
