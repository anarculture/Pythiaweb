import os
import re

root_dir = '/home/acracia/Code/pythiafigma/src/app/components'

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if React. is used
    if 'React.' not in content:
        return
    
    # Check if React is already imported
    # Matches: import React from ... or import React, { ... } from ...
    react_import_pattern = re.compile(r'import\s+React\b')
    if react_import_pattern.search(content):
        return
    
    # Check for existing named imports from 'react'
    named_import_pattern = re.compile(r'import\s+\{\s*([^}]+)\s*\}\s*from\s*[\'"]react[\'"]')
    match = named_import_pattern.search(content)
    
    if match:
        # Merge: import { ... } from 'react' -> import React, { ... } from 'react'
        new_import = f"import React, {{ {match.group(1)} }} from 'react'"
        new_content = named_import_pattern.sub(new_import, content)
        print(f"Updating (merged): {filepath}")
    else:
        # Add to top: import React from 'react'
        new_content = "import React from 'react';\n" + content
        print(f"Updating (added): {filepath}")
    
    with open(filepath, 'w') as f:
        f.write(new_content)

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            update_file(os.path.join(root, file))
