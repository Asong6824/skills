# Claude Code Skill Manager - Specification

**Version:** 0.1.0
**Date:** 2026-03-30
**Status:** In Progress

## Overview

A desktop application for managing Claude Code Skills with visual interface.

## Tech Stack

- **Desktop Framework:** Tauri v2
- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS + Stitch Design System
- **State Management:** Zustand (planned)
- **Editor:** CodeMirror 6 (planned)

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| primary | #0058BC | Main actions |
| surface | #F9F9FB | Background |
| surface_container_low | #F3F3F5 | Sidebar |
| surface_container_lowest | #FFFFFF | Cards |
| on_surface | #1A1C1D | Primary text |

### Typography
- Font: Inter
- Scale: display-lg (56px), display-md (44px), title-lg (22px), body-lg (16px)

### Spacing
- Base unit: 4px (0.25rem)
- Common: spacing-4 (16px), spacing-8 (32px)

## Implemented Features

- [x] Tauri + React + TypeScript project setup
- [x] Tailwind CSS configuration with design tokens
- [x] Base UI components (Button, SegmentedControl, Chip, Input)
- [x] Layout components (TitleBar, StatusBar, Sidebar)
- [ ] Skill list display
- [ ] File tree view
- [ ] Markdown viewer
- [ ] Search/marketplace integration
- [ ] Settings dialog
- [ ] CodeMirror editor

## Architecture

```
src/
├── components/
│   ├── ui/           # Base components
│   └── layout/       # Layout components
├── App.tsx
└── main.tsx

src-tauri/
└── src/
    └── main.rs       # Tauri commands
```

## Rust Commands (Planned)

- `scan_global_skills` - Scan ~/.claude/skills
- `scan_project_skills` - Scan project .claude/skills
- `execute_skill_search` - Run npx skills find
- `get_skill_tree` - Get skill file structure
- `read_skill_markdown` - Read skill.md content

## Next Steps

See docs/superpowers/plans/ for detailed implementation plans.
