---
description: Import local files (PDF, Office, Markdown, etc.) into NotebookLM using anything-to-notebooklm skill.
---

# Import Local Files to NotebookLM Workflow

This workflow uses the `anything-to-notebooklm` skill to process and upload local files directly to your NotebookLM project.

## Prerequisites

- Skill: `joeseesun/anything-to-notebooklm` (Installed via `npx skills add`)
- NotebookLM Authentication (Run `notebooklm auth` if prompted)

## Supported File Types

- **Documents**: PDF, Word (.docx), PPT (.pptx), Excel (.xlsx), Markdown (.md), Txt
- **E-books**: EPUB
- **Media**: Images (OCR), Audio (Transcription)
- **Archives**: ZIP files

## Usage Steps

### 1. Simple Natural Language Import

You can simply ask the agent to upload a file:

> "把这个PDF上传到 NotebookLM: /Users/username/Documents/paper.pdf"

> "将这个 Word 文档转换为 NotebookLM 笔记: /path/to/doc.docx"

### 2. Batch Import via Command

For more control or batch processing, use the explicit command structure:

```bash
# General Syntax
notebooklm source add <FILE_PATH>

# Examples
notebooklm source add /Users/hanruochong/data/report.pdf
notebooklm source add /Users/hanruochong/books/guide.epub
```

### 3. Verify in NotebookLM

- The agent will process the file (converting format if necessary, e.g., PDF/Office to text).
- It will upload it to your active NotebookLM project.
- You can check the web interface to see the new source.

## Advanced Tips

- **Mixed Content**: You can upload a ZIP file containing multiple supported formats.
- **Conversion**: The tool automatically handles format conversion (e.g., extracting text from PPT slides).
