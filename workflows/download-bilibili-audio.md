---
description: Download Bilibili video audio to MacWhisper watch folder for auto-transcription.
---

# Bilibili to Transcription Workflow

This workflow downloads the audio track from a Bilibili video (or series) directly into the MacWhisper "Watch Folder", triggering automatic transcription.

## Prerequisites

- Skill: `tool-bilibili-downloader`
- Tool: `yutto`
- MacWhisper Pro (optional, for Watch Folder automation)

## Steps

1. **Get Bilibili URL or BV ID**
    - Copy the full URL or just the BV ID (e.g., `BV1...`) of the video or playlist.

2. **Execute Download Command**
    - Run the following command, replacing `<BV_ID>` with your video ID:

    ```bash
    yutto <BV_ID> --audio-only --no-danmaku --dir "/Users/hanruochong/data collection/待转录"
    ```

    - **For Lists/Series**: Add `-b` (batch) to download all episodes:

    ```bash
    yutto <BV_ID> -b --audio-only --no-danmaku --dir "/Users/hanruochong/data collection/待转录"
    ```

3. **Verify Transcription**
    - Open MacWhisper.
    - Check the task list; the new audio file(s) should appear and start transcribing automatically.
