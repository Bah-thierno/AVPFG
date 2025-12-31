import fs from 'fs';

// Read the file
const content = fs.readFileSync('src/data/cities.ts', 'utf8');

// Replace the escaped characters
const fixed = content.replace(/`r`n\s+status:/g, '\r\n        status:');

// Write back
fs.writeFileSync('src/data/cities.ts', fixed, 'utf8');

console.log('File fixed!');
