---
description: 创建或更新 Skill/Workflow 并同步到 GitHub
---

# Skill/Workflow 管理工作流

## 创建新 Skill

1. 读取 `~/.agent/skills/skill-manager/SKILL.md` 获取完整指南
2. 在 `~/skills/skills/<name>/` 创建目录
3. 创建 `SKILL.md` 及必要子文件
4. 更新 `~/skills/README.md` 索引

## 创建新 Workflow

1. 在 `~/skills/workflows/<name>.md` 创建文件
2. 更新 `~/skills/README.md` 索引

## 同步到 GitHub

```bash
cd ~/skills
git add -A
git commit -m "<变更描述>"
git push origin main
```
