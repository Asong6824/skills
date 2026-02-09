---
description: 创建或更新 Skill/Workflow 并同步到 GitHub
---

# Skill/Workflow 管理工作流

## 目录约定

| 目录 | 用途 |
|-----|------|
| `.agent/skills/` | ✅ Antigravity 专用 (项目级) |
| `~/.agent/skills/` | Antigravity 全局 |
| `.agents/skills/` | Universal 共享 (`npx skills add` 创建) |

---

## 从社区安装 Skill

// turbo

```bash
npx -y skills search "<关键词>"
npx -y skills add <owner/repo@skill-name> -y
```

安装后：

1. `cp -r .agents/skills/<name> ~/skills/skills/`
2. 创建 `~/skills/workflows/<name>.md`
3. 更新 `~/skills/README.md`

---

## 创建新 Skill

1. 读取 `~/.agent/skills/skill-manager/SKILL.md` 获取完整指南
2. 在 `~/skills/skills/<name>/` 创建目录
3. 创建 `SKILL.md` 及必要子文件
4. 更新 `~/skills/README.md` 索引

---

## 同步到 GitHub

// turbo

```bash
cd ~/skills && git add -A && git commit -m "<变更描述>" && git push origin main
```
