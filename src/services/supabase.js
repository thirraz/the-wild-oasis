import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://mfwvipvynxwcnkuaiujf.supabase.co"
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1md3ZpcHZ5bnh3Y25rdWFpdWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MTQ4OTIsImV4cCI6MjAwNjk5MDg5Mn0.bdIG_2x_ckQTCNwjh25kAHAfNnLcQUswLrMxY1dP22M"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
