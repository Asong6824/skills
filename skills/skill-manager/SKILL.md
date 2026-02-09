---
name: skill-manager
description: Meta-skill for creating, editing, and managing Antigravity skills and workflows. Use when asked to create new skills, update existing ones, or sync to GitHub.
metadata:
  author: hanruochong
  version: "1.0.1"
  repo: "https://github.com/Asong6824/skills"
---

# Skill Manager

## 什么时候使用

当用户要求创建、更新或管理 Skill 时使用。**注意：所有的 Skill 更新必须同步更新 GitHub 仓库。**

---

## Naming Convention (命名规范)

为保持仓库整洁，请遵循以下命名前缀：

| 类型 | 前缀 | 示例 |
|---|---|---|
| **写作类** | `writing-` | `writing-travel`, `writing-life-essay` |
| **分析类** | `analysis-` | `analysis-style` |
| **工具类** | `tool-` | `tool-git`, `tool-docker` |

---

## 📁 目录约定 (Directory Convention)

| 目录 | 用途 | 说明 |
|-----|------|------|
| **`.agent/skills/`** | Antigravity 专用 | ✅ 正确的 Antigravity 约定，项目级别 |
| **`~/.agent/skills/`** | Antigravity 全局 | 个人偏好，跨项目共享 |
| **`.agents/skills/`** | Universal 共享 | `npx skills add` 创建，多 agent 共享 (Codex, Gemini CLI 等) |

> **注意**: `npx skills add` 会在 `.agents/` 创建实际文件，并自动 symlink 到 `.agent/skills/`。

---

## 🔍 从社区安装 Skill (Install from Community)

使用 `npx skills` 搜索并安装社区技能：

```bash
# 搜索技能
npx -y skills search "<关键词>"

# 安装技能 (-y 自动选择 agent)
npx -y skills add <owner/repo@skill-name> -y

# 示例
npx -y skills search "framer-motion"
npx -y skills add pproenca/dot-skills@framer-motion-best-practices -y
```

安装后需要手动：

1. 复制到 `~/skills/skills/` 以便 GitHub 同步
2. 创建对应的 workflow 文件
3. 更新 `~/skills/README.md` 索引

## 🚀 核心工作流：创建并发布 Skill (Create & Publish)

这是一个**完整的、原子的**操作流程。请务必**按顺序执行完所有步骤**，不要中途停止。

### Step 1: 自动化初始化 (Init)

利用脚本快速生成 Skill 目录结构：

```bash
# 自动生成目录、SKILL.md、scripts/ 等
python3 ~/.gemini/antigravity/skills/skill-creator/scripts/init_skill.py <skill-name> --path ~/skills/skills
```

### Step 2: 定制与开发 (Develop)

1. **编辑 SKILL.md**：填入具体的触发条件、规则和示例。确保 `metadata` 包含作者信息。
2. **开发脚本**：在 `scripts/` 目录下添加必要的辅助脚本（可选）。
3. **清理**：删除不需要的示例文件（如 `example.py`, `api_reference.md` 等）。
4. **验证**：

    ```bash
    python3 ~/.gemini/antigravity/skills/skill-creator/scripts/quick_validate.py ~/skills/skills/<skill-name>
    ```

### Step 3: 创建 Workflow 文档 (Document)

**必须**为每个 Skill 创建一个对应的 Workflow 文档，以便用户快速查阅：

1. 创建文件：`~/skills/workflows/<skill-name>.md`
2. 写入模板：

    ```markdown
    ---
    description: <简短描述>
    ---

    # <Skill Name> 工作流

    基于 `<skill-name>` 技能的标准流程。

    ## 技能位置
    `~/.agent/skills/<skill-name>/SKILL.md`

    ## 核心步骤
    1. ...
    2. ...
    ```

### Step 4: 更新索引 (Index)

编辑 `~/skills/README.md`，在两个表格中分别添加条目：

1. **Skills 表格**：
    `| [<skill-name>](skills/<skill-name>/SKILL.md) | <描述> |`
2. **Workflows 表格**：
    `| [<skill-name>](workflows/<skill-name>.md) | <描述> |`

### Step 5: 同步到 GitHub (Sync)

**这一步是必须的！**

```bash
cd ~/skills
git add -A
git commit -m "feat: add <skill-name> skill and workflow"
git push origin main
```

---

## 🛠 辅助工作流：仅更新 (Update Only)

当只需修改现有 Skill 时：

1. 修改 `~/skills/skills/<skill-name>` 下的文件。
2. (可选) 更新 `~/skills/workflows/<skill-name>.md`。
3. **立即同步**：

    ```bash
    cd ~/skills
    git add -A
    git commit -m "update: improve <skill-name> logic"
    git push origin main
    ```
