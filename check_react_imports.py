import os
import re

root_dir = '/home/acracia/Code/pythiafigma/src/app/components'

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            if 'React.' in content:
                has_default = bool(re.search(r'import\s+React\b', content))
                has_namespace = bool(re.search(r'import\s+\*\s+as\s+React\b', content))
                has_named = bool(re.search(r'import\s+\{[^}]+\}\s*from\s*[\'"]react[\'"]', content))
                
                if not (has_default or has_namespace):
                    print(f"File: {filepath}")
                    print(f"  Default: {has_default}, Namespace: {has_namespace}, Named: {has_named}")
