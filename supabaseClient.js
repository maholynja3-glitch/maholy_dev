import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://luthgaipelusugtrqtaw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1dGhnYWlwZWx1c3VndHJxdGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MDIxNzgsImV4cCI6MjA4OTQ3ODE3OH0.bt6LFkCwo52-BzTX6yK9VgtK7RXhORGyGhmXWPDI29I'

export const supabase = createClient(supabaseUrl, supabaseKey)