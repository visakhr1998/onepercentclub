import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rbsdzryaxdaeouajiuoe.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJic2R6cnlheGRhZW91YWppdW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTYyNDUsImV4cCI6MjAyNjMzMjI0NX0.C24lNeT1dR2AaUhYLVsyr-b5AjZNvml4PX-kk8xC9tA')