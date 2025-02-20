#!/bin/bash

# Get the list of modified and untracked files
files=$(git ls-files --modified --others --exclude-standard)

if [ -z "$files" ]; then
  echo "No files to commit."
  exit 0
fi

for file in $files; do
  git add "$file"
  git commit -m "Updated: $file"
done

echo "All files committed separately."
