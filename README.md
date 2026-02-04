# Antigravity Skills

This repository contains custom skills for Antigravity AI assistant.

## Structure

Each skill is organized as a folder containing:

- **SKILL.md** (required): Main instruction file with YAML frontmatter and detailed markdown instructions
- **scripts/** (optional): Helper scripts and utilities
- **examples/** (optional): Reference implementations and usage patterns
- **resources/** (optional): Additional files, templates, or assets

## SKILL.md Format

```markdown
---
name: skill-name
description: Brief description of what this skill does
---

# Skill Title

Detailed instructions for the skill...
```

## Usage

Skills are automatically detected by Antigravity when placed in this directory. Reference them in your prompts or they may be suggested based on context.
