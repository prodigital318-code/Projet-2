// config.js - Configuration Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://sxhtqikqklriyjttnyme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4aHRxaWtxa2xyaXlqdHRueW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjM1MzAsImV4cCI6MjA3NDQ5OTUzMH0.O8xUPR7FN6cmu-vbdjJo3OGtyoFQTawNpI29leTvo-w';

// Création du client Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
