const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/data/cities.ts', 'utf8');

// Replace the escaped characters
content = content.replace(/`r`n\s+status:/g, '\r\n        status:');

// Write back
fs.writeFileSync('src/data/cities.ts', content, 'utf8');

console.log('File fixed!');
