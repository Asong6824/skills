#!/usr/bin/env python3
import os
import sys
import subprocess
from pathlib import Path

def convert_to_markdown(file_path):
    """
    Convert a file to markdown using markitdown tool.
    Returns the markdown content as a string.
    """
    try:
        # Use markitdown command line tool
        result = subprocess.run(
            ["markitdown", str(file_path)], 
            capture_output=True, 
            text=True, 
            check=True
        )
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error converting {file_path}: {e}")
        return None
    except FileNotFoundError:
        print("Error: markitdown tool not found. Please install it or ensure it is in your PATH.")
        return None

def process_path(input_path):
    """
    Process a file or directory.
    If file, convert and print content.
    If directory, walk through and process supported files.
    """
    path = Path(input_path)
    
    if not path.exists():
        print(f"Error: Path {input_path} does not exist.")
        sys.exit(1)

    files_to_process = []
    if path.is_file():
        files_to_process.append(path)
    elif path.is_dir():
        # Recursively find files, excluding hidden ones
        for root, dirs, files in os.walk(path):
            # Skip hidden directories
            dirs[:] = [d for d in dirs if not d.startswith('.')]
            for file in files:
                if not file.startswith('.'):
                    files_to_process.append(Path(root) / file)
    
    # Process files
    print(f"# Analysis Content from {path}\n")
    
    for file_path in files_to_process:
        # Skip already markdown files generally, but read them directly
        # However, markitdown might handle them too.
        # Let's try to identify if conversion is needed.
        suffix = file_path.suffix.lower()
        
        content = ""
        if suffix in ['.md', '.markdown', '.txt']:
            try:
                content = file_path.read_text(encoding='utf-8', errors='replace')
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
                continue
        else:
            # Attempt conversion for other types
            print(f"Converting {file_path.name}...", file=sys.stderr)
            converted = convert_to_markdown(file_path)
            if converted:
                content = converted
            else:
                continue

        print(f"## File: {file_path.name}\n")
        print(content)
        print("\n---\n")

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 convert_and_analyze.py <file_or_directory_path>")
        sys.exit(1)
        
    input_path = sys.argv[1]
    process_path(input_path)

if __name__ == "__main__":
    main()
