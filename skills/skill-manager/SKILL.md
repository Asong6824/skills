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
2. 技能描述（一句话说明用途，用于触发）

### Step 2: 使用自动化脚本创建

利用 `skill-creator` 提供的脚本快速生成标准化结构：

```bash
# 语法：script_path <skill-name> --path <target-path>
python3 ~/.gemini/antigravity/skills/skill-creator/scripts/init_skill.py <skill-name> --path ~/skills/skills
```

该脚本会自动创建：

- 目录结构
- 标准化的 `SKILL.md` (包含 YAML frontmatter 和模板)
- `scripts/`, `references/`, `assets/` 及其示例文件

### Step 3: 定制内容

1. 编辑生成的 `SKILL.md`：
   - 填入具体的触发条件和规则
   - 在 `metadata` 中补充作者信息（author: hanruochong）
2. 清理不需要的资源：
   - 删除不需要的示例文件（如不需要脚本则删除 `scripts/`）

### Step 4: 验证（可选）

使用校验脚本检查格式：

```bash
python3 ~/.gemini/antigravity/skills/skill-creator/scripts/quick_validate.py ~/skills/skills/<skill-name>
```

```



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
