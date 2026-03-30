# Claude Code Skill Manager

A desktop application for managing Claude Code Skills with a visual interface.

## Features

- **Visual Skill Management** - Browse and manage installed Skills in a modern desktop UI
- **Global & Project Scope** - View Skills from both global (~/.claude/skills) and project directories
- **Skill Marketplace** - Search and install Skills from the community marketplace
- **File Tree Viewer** - Explore Skill structure with file tree navigation
- **Markdown Editor** - View and edit Skill documentation with syntax highlighting

## Tech Stack

- **Desktop Framework:** [Tauri v2](https://tauri.app/)
- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Design System:** The Precision Atelier (Stitch Design System)

## Getting Started

### Prerequisites

- Node.js 18+
- Rust 1.70+
- npm 9+

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run tauri dev
```

### Build

```bash
npm run tauri build
```

## Project Structure

```
src/                  # React frontend
├── components/
│   ├── ui/          # Base UI components
│   └── layout/      # Layout components
├── App.tsx
└── main.tsx

src-tauri/           # Rust backend
├── src/
│   ├── lib.rs       # Tauri commands
│   └── main.rs      # Entry point
└── tauri.conf.json  # Tauri configuration

docs/                # Design documents and plans
SPEC.md              # Project specification
```

## Design System

The UI follows "The Precision Atelier" design philosophy with:

- **Colors:** San Francisco Blue (#0058BC) as primary
- **Typography:** Inter font family
- **Spacing:** 4px base unit with 8px increments
- **Surface Levels:** Layered backgrounds for depth without lines

## License

MIT
