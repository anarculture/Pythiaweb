import os

root_dir = '/home/acracia/Code/pythiafigma/src/app/components'
bad_line = "import React from 'react';\n"

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            if content.startswith(bad_line):
                new_content = content[len(bad_line):]
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Reverted: {filepath}")
