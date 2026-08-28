const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://pxkwgedplrygvqxbckxf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4a3dnZWRwbHJ5Z3ZxeGJja3hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NzgyMTMwMywiZXhwIjoyMTAzMzk3MzAzfQ.2tOJB5ZialnZShCnmx4WRLfmtZ13kB3x-PdKgP4htHc';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const bucketName = 'videos';
  
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();
  if (listError) {
    console.error('Error listing buckets:', listError);
    return;
  }
  
  if (!buckets.find(b => b.name === bucketName)) {
    const { error: createError } = await supabase.storage.createBucket(bucketName, {
      public: true,
      allowedMimeTypes: ['video/mp4']
    });
    if (createError) {
      console.error('Error creating bucket:', createError);
      return;
    }
    console.log(`Bucket ${bucketName} created.`);
  } else {
    console.log(`Bucket ${bucketName} already exists.`);
    await supabase.storage.updateBucket(bucketName, { public: true });
  }

  const videosDir = path.join(__dirname, 'public/videos');
  if (!fs.existsSync(videosDir)) {
      console.log('No videos directory found at ' + videosDir);
      return;
  }
  
  const files = fs.readdirSync(videosDir).filter(f => f.endsWith('.mp4'));
  console.log('Found videos:', files);

  for (const file of files) {
    const filePath = path.join(videosDir, file);
    const fileBuffer = fs.readFileSync(filePath);
    
    console.log(`Uploading ${file}...`);
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(file, fileBuffer, {
        contentType: 'video/mp4',
        upsert: true
      });
      
    if (error) {
      console.error(`Error uploading ${file}:`, error);
    } else {
      console.log(`Uploaded ${file} successfully. URL: ${supabaseUrl}/storage/v1/object/public/${bucketName}/${file}`);
    }
  }
}

main();
