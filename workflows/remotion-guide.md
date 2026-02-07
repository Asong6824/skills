---
description: Reference guide for Remotion video creation best practices and patterns.
---

# Remotion Best Practices Guide

This workflow provides access to a comprehensive set of best practices and patterns for creating videos with Remotion (React).

## Skill Location

`~/.agent/skills/remotion-best-practices/SKILL.md`

## Usage

This skill is primarily a knowledge base. You can ask the agent to reference specific topics when writing Remotion code.

### Common Topics & Commands

**Animations**
> "How do I animate text in Remotion?"
> "Explain Remotion interpolation and easing."

**Assets & Media**
> "Best way to import and use images in Remotion?"
> "How to handle audio loading and timing?"

**Composition & Metadata**
> "How to dynamically calculate video duration?"
> "Setting up parameterized compositions."

**Performance**
> "How to optimize rendering speed?"
> "Using `prefetch` for assets."

## Available Rules

The skill covers the following areas (see `rules/` directory for details):

- **3D**: Three.js integration
- **Animations**: General patterns, sequences, transitions
- **Audio/Video**: Manipulating media, waveforms
- **Layout**: CSS, Tailwind, measuring nodes
- **Data**: Charts, maps, dynamic data

## Generating Code with Best Practices

To ensure generated Remotion code follows best practices, explicitly mention the skill or specific rules in your prompt.

### Example Prompts

**Basic Component**
> "Create a `HelloWorld` component using `remotion-best-practices` for typography and layout."

**Complex Animation**
> "Generate a sequence of images using `remotion-best-practices`. Reference the `sequencing.md` and `images.md` rules."

**Performance Optimization**
> "Refactor this composition to improve rendering speed, applying rules from `remotion-best-practices/rules/performance.md`."

### Agent Instruction

When asking for code, the agent will:

1. Read the relevant rule files from `~/.agent/skills/remotion-best-practices/rules/`.
2. Apply the patterns (e.g., using `absoluteFill`, `useCurrentFrame`, `spring` animations correctly).
3. Generate code that adheres to these standards.
