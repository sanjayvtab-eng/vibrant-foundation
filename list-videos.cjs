const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://pxkwgedplrygvqxbckxf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4a3dnZWRwbHJ5Z3ZxeGJja3hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzgyMTMwMywiZXhwIjoyMTAzMzk3MzAzfQ.2tOJB5ZialnZShCnmx4WRLfmtZ13kB3x-PdKgP4htHc';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase.storage.from('videos').list();
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Files in bucket:', data.map(f => f.name));
  }
}

main();
