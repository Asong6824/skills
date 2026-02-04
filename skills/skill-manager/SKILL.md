---
name: skill-manager
description: Meta-skill for creating, editing, and managing Antigravity skills and workflows. Use when asked to create new skills, update existing ones, or sync to GitHub.
license: MIT
metadata:
  author: hanruochong
  version: "1.0.0"
  repo: "https://github.com/Asong6824/skills"
---

# Skill Manager

帮助创建、编辑和管理 Antigravity Skills 和 Workflows 的元技能。

---

## ⚠️ 关键规则

### 1. 文件位置

| 类型 | 位置 |
|-----|------|
| Skills | `~/skills/skills/<skill-name>/` |
| Workflows | `~/skills/workflows/<workflow-name>.md` |

### 2. 符号链接

`~/.agent/skills` 是指向 `~/skills/skills` 的符号链接，**不要直接修改 `~/.agent/skills` 目录**。

---

## Skill 创建流程

### Step 1: 确定技能范围

询问用户：

1. 技能名称（小写，用连字符连接，如 `data-analysis`）
2. 技能描述（一句话说明用途）
3. 是否需要子目录（rules/, strategies/, examples/ 等）

### Step 2: 创建目录结构

```bash
mkdir -p ~/skills/skills/<skill-name>
```

### Step 3: 创建 SKILL.md

必须包含 YAML frontmatter：

```markdown
---
name: <skill-name>
description: <brief description>
license: MIT
metadata:
  author: hanruochong
  version: "1.0.0"
---

# <Skill Title>

## 触发条件
描述何时激活此技能...

## 规则
具体的执行规则...

## 示例
使用示例...
```

### Step 4: 创建子文件（可选）

- `rules/` - 规则文件
- `strategies/` - 策略文件
- `examples/` - 示例文件
- `scripts/` - 辅助脚本

---

## Workflow 创建流程

### Step 1: 确定工作流范围

询问用户：

1. 工作流名称（小写，如 `deploy`, `review`）
2. 工作流描述
3. 具体步骤

### Step 2: 创建 Workflow 文件

```markdown
---
description: <工作流描述>
---

# <工作流标题>

## 步骤

1. 第一步
2. 第二步
...
```

位置：`~/skills/workflows/<name>.md`

---

## GitHub 同步流程

每次创建或修改 skill/workflow 后，执行：

```bash
cd ~/skills
git add -A
git status  # 确认变更
git commit -m "<描述变更内容>"
git push origin main
```

---

## 更新 README 索引

每次添加新 skill 或 workflow 后，更新 `~/skills/README.md`：

### Skills 表格

```markdown
| 技能 | 描述 |
|-----|------|
| [skill-name](skills/skill-name/SKILL.md) | 描述 |
```

### Workflows 表格

```markdown
| 工作流 | 描述 |
|-------|------|
| [workflow-name](workflows/workflow-name.md) | 描述 |
```

---

## 命令速查

| 操作 | 命令 |
|-----|------|
| 列出所有技能 | `ls ~/skills/skills/` |
| 列出所有工作流 | `ls ~/skills/workflows/` |
| 查看 git 状态 | `cd ~/skills && git status` |
| 推送到远程 | `cd ~/skills && git push` |
| 拉取更新 | `cd ~/skills && git pull` |
