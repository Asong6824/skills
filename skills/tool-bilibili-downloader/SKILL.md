---
name: tool-bilibili-downloader
description: Download audio from Bilibili videos using yutto, optimized for transcription workflows.
metadata:
  author: hanruochong
  version: "1.0.0"
  repo: "https://github.com/Asong6824/skills"
---

# Bilibili Audio Downloader

This skill wraps the `yutto` command-line tool to download audio-only streams from Bilibili videos. It is designed to prepare content for speech-to-text workflows (e.g., MacWhisper).

## Prerequisites

- `yutto` must be installed (`pip install yutto` or `brew install yutto`).
- Network access to Bilibili.

## Usage

### Basic Audio Download

Download the highest quality audio from a video:

```bash
yutto <BV_ID_OR_URL> --audio-only --no-danmaku --dir <OUTPUT_DIR>
```

### Batch Download (Series/List)

Download all episodes in a series or playlist:

```bash
yutto <BV_ID_OR_URL> --batch --audio-only --no-danmaku --dir <OUTPUT_DIR>
```

## Configuration

- **Audio Only**: Always use `--audio-only` to save bandwidth and storage.
- **No Danmaku**: Use `--no-danmaku` as chat comments are irrelevant for transcription.
- **Output Directory**: By default, target the MacWhisper watch folder (e.g., `/Users/hanruochong/data collection/待转录`).
