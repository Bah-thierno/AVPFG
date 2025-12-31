# Read the corrupted file
with open('src/data/cities.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the corrupted patterns
content = content.replace('`r`n        status:', '\n        status:')

# Write back
with open('src/data/cities.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("File fixed!")
