// config.js - Configuration Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://sxhtqikqklriyjttnyme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYnVoYXB1Zm9hcmpwZmxxY3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5ODMyOTgsImV4cCI6MjA3NDU1OTI5OH0.bNRvqHfSmk5-PVnUzVfxgU_FWpaKpqgx-VF1_4ec6v4';

// Création du client Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
