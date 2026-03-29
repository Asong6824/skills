# Claude Code Skill 可视化管理工具 - 设计规格书

**日期**: 2026-03-29
**版本**: v1.0

---

## 1. 背景与目标

### 1.1 痛点

1. **视野不清**: 用户不清楚已安装哪些 Skill，哪些在全局目录 (`~/.claude/skills/`)，哪些在项目目录
2. **操作门槛高**: 团队成员不熟悉命令行和 `.` 开头的隐藏文件，无法独立管理 Skill
3. **搜索困难**: 缺乏可视化的 Skill 市场浏览和搜索体验

### 1.2 目标

构建一个本地桌面端应用，实现 Claude Code Skill 的可视化全生命周期管理。

---

## 2. 技术架构

### 2.1 技术选型

| 层级 | 技术 |
|------|------|
| 桌面框架 | Tauri v2 |
| 前端框架 | React 18 + TypeScript |
| 状态管理 | Zustand |
| 样式方案 | Tailwind CSS |
| 搜索集成 | `npx skills` CLI (Vercel skill.sh) |
| 存储机制 | 文件系统扫描 + JSON 元数据 |

### 2.2 架构图

```
┌─────────────────────────────────────────────────────────────┐
│                      Claude Code Skill Manager               │
│                         (Tauri + React)                      │
├─────────────────────────────────────────────────────────────┤
│  Frontend (React)                                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│  │ Main    │ │ Sidebar │ │ Browser │ │ Search  │         │
│  │ Window  │ │         │ │ Panel   │ │ Panel   │         │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘         │
│       └──────────┬┴──────────┬┴──────────┘                │
│                  ▼                                          │
│            ┌──────────┐                                    │
│            │ Zustand  │  (Skill 列表、当前选中、搜索状态)   │
│            └────┬─────┘                                    │
├─────────────────┼──────────────────────────────────────────┤
│  Backend (Rust/Tauri)                                      │
│       ┌─────────┴─────────┐                               │
│       ▼                   ▼                               │
│  ┌─────────┐        ┌──────────┐                         │
│  │ FS Scan │        │ Command  │                         │
│  │ Handler │        │ Executor │                         │
│  └────┬────┘        └────┬─────┘                         │
│       │                  │                                │
│       ▼                  ▼                                │
│  ~/.claude/skills/   npx skills CLI                       │
│  (Symlink Dir)       (skill.sh 市场)                     │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 数据流

```
用户操作 → React 组件 → Zustand Store → Tauri Command → Rust Handler → 文件系统/npx skills
         ↑                                                                   │
         └─────────────────────── 事件监听/状态更新 ─────────────────────────┘
```

---

## 3. 功能规格

### 3.1 核心功能

| 功能 | 描述 |
|------|------|
| **扫描全局 Skills** | 启动时自动扫描 `~/.claude/skills/`，解析符号链接获取真实路径 |
| **添加项目目录** | 用户手动添加包含 `.claude/skills/` 的项目目录 |
| **切换上下文** | 侧边栏快速切换「全局」或某个「项目」作为当前视野 |
| **查看 Skill 内容** | 右侧面板展示选中 Skill 的 Markdown 源码 |
| **查看文件结构** | 展示 Skill 的目录树（用于有 assets 的 Skill） |

### 3.2 搜索与安装

| 功能 | 描述 |
|------|------|
| **搜索 Skill 市场** | 调用 `npx skills find <keyword>` 实时搜索 |
| **安装到全局** | 调用 `npx skills add <name> --global` |
| **安装到项目** | 调用 `npx skills add <name>` 在项目目录下执行 |

### 3.3 管理操作

| 功能 | 描述 |
|------|------|
| **启用 Skill** | 创建符号链接：`ln -s <source> ~/.claude/skills/<name>` |
| **禁用 Skill** | 删除符号链接：`unlink ~/.claude/skills/<name>` |
| **删除 Skill** | 删除源文件（全局或项目目录） |
| **编辑 Skill** | 打开 Markdown 编辑器（系统默认编辑器或内置编辑器） |

### 3.4 辅助功能

| 功能 | 描述 |
|------|------|
| **手动刷新** | 重新扫描文件系统，同步最新状态 |
| **打开终端** | 在 Skill 所在目录打开系统终端 |
| **打开文件位置** | 使用系统文件管理器定位 Skill 源文件 |

---

## 4. 界面规格

### 4.1 布局结构

```
┌──────────────────────────────────────────────────────────────────┐
│  [图标] Claude Code Skill 管理器            [─] [□] [✕]          │ ← 标题栏
├────────────────┬─────────────────────────────────────────────────┤
│                │                                                 │
│  ◉ 全局         │   ┌─────────────────────────────────────────┐   │
│                │   │  skill: baoyu-translate                  │   │
│  📁 项目 A      │   │  ─────────────────────────────           │   │
│    └ 3 skills  │   │  # Baoyu Translate                       │   │
│                │   │                                         │   │
│  📁 项目 B      │   > 这是一个翻译 Skill...                   │   │
│    └ 5 skills  │   │                                         │   │
│                │   │  ## 使用方法                             │   │
│                │   │  ...                                     │   │
│                │   │                                         │   │
│                │   └─────────────────────────────────────────┘   │
│                │                                                 │
│  [+ 添加项目]   │   ┌─────────────────────────────────────────┐   │
│                │   │ 📁 文件结构                               │   │
│────────────────┤   │ ├─ skill.md                              │   │
│ 🔍 搜索市场    │   │ └─ assets/                               │   │
│                │   │    └─ icon.png                           │   │
│                │   └─────────────────────────────────────────┘   │
├────────────────┴─────────────────────────────────────────────────┤
│  就绪  │  全局: 12 skills  │  项目: 2 个                         │ ← 状态栏
└──────────────────────────────────────────────────────────────────┘
```

### 4.2 界面说明

#### 主窗口 (Main Window)
- 标题栏：应用名称 + 系统窗口控件
- 状态栏：显示当前上下文统计信息

#### 侧边栏 (Sidebar)
- 项目切换器：全局视野 + 已添加的项目列表
- 每个项目显示 Skill 数量
- 「添加项目」入口
- 「搜索市场」入口

#### Skill 浏览器 (Browser Panel)
- 文件树视图：展示 Skill 的目录结构
- Markdown 查看器：渲染 Skill 源码
- 元信息区：名称、版本、启用状态、安装位置

#### 搜索面板 (Search Panel)
- 搜索输入框（关键字）
- 搜索结果列表（名称、描述、来源）
- 安装按钮（全局/项目）

#### 设置对话框 (Settings Dialog)
- 全局 Skill 目录路径（默认 `~/.claude/skills/`）
- 项目目录列表管理（添加/移除）
- 主题设置（可选）

#### 编辑对话框 (Editor Dialog)
- Markdown 编辑器
- 保存/取消按钮
- 实时预览切换

### 4.3 组件清单

| 组件 | 类型 | 说明 |
|------|------|------|
| `<TitleBar>` | 系统 | 窗口标题栏，包含窗口控件 |
| `<StatusBar>` | 信息 | 显示统计信息 |
| `<Sidebar>` | 布局 | 左侧项目切换 + 导航 |
| `<ProjectItem>` | 可交互 | 侧边栏项目条目 |
| `<SkillList>` | 列表 | 当前上下文下的 Skill 列表 |
| `<SkillItem>` | 可交互 | 单个 Skill 条目 |
| `<BrowserPanel>` | 布局 | 右侧内容区 |
| `<FileTree>` | 树形 | Skill 文件结构 |
| `<MarkdownViewer>` | 渲染 | Skill 内容展示 |
| `<SearchPanel>` | 面板 | 搜索市场抽屉 |
| `<SearchResult>` | 列表 | 搜索结果条目 |
| `<SettingsDialog>` | 对话框 | 设置弹窗 |
| `<EditorDialog>` | 对话框 | 编辑弹窗 |
| `<ConfirmModal>` | 反馈 | 确认操作弹窗 |

---

## 5. 数据模型

### 5.1 Skill 实体

```typescript
interface Skill {
  id: string;                    // 唯一标识 (路径 hash)
  name: string;                  // Skill 名称
  description: string;          // 描述（从 md 头部提取）
  sourcePath: string;           // 源文件绝对路径
  scope: 'global' | 'project'; // 作用域
  projectPath?: string;        // 所属项目路径（scope=project 时）
  isEnabled: boolean;           // 是否启用（符号链接是否存在）
  files: SkillFile[];          // 文件列表
  lastModified: number;        // 最后修改时间
}

interface SkillFile {
  name: string;
  path: string;
  isDirectory: boolean;
  children?: SkillFile[];
}
```

### 5.2 项目配置

```typescript
interface ProjectConfig {
  path: string;           // 项目根目录
  name: string;           // 项目名称
  skillDir: string;      // .claude/skills 路径
  lastScanned: number;   // 最后扫描时间
}
```

### 5.3 本地索引 (JSON)

存储位置: `~/.claude/skill-manager/index.json`

```json
{
  "version": 1,
  "projects": [
    {
      "path": "/Users/xxx/project-A",
      "name": "project-A",
      "skillDir": "/Users/xxx/project-A/.claude/skills",
      "lastScanned": 1711700000
    }
  ],
  "skills": [
    {
      "id": "abc123",
      "name": "baoyu-translate",
      "sourcePath": "/Users/xxx/.agents/skills/baoyu-translate",
      "scope": "global",
      "isEnabled": true,
      "lastModified": 1711600000
    }
  ]
}
```

---

## 6. Rust 指令清单

| 指令 | 参数 | 返回 |
|------|------|------|
| `scan_global_skills` | - | `Vec<Skill>` |
| `scan_project_skills` | `path: String` | `Vec<Skill>` |
| `add_project` | `path: String` | `ProjectConfig` |
| `remove_project` | `path: String` | `bool` |
| `enable_skill` | `skill: Skill` | `bool` |
| `disable_skill` | `skill: Skill` | `bool` |
| `delete_skill` | `skill: Skill` | `bool` |
| `read_skill_markdown` | `path: String` | `String` |
| `get_skill_tree` | `path: String` | `SkillFile` |
| `open_in_terminal` | `path: String` | `bool` |
| `open_in_finder` | `path: String` | `bool` |
| `execute_skill_search` | `keyword: String` | `String` (CLI 输出) |
| `execute_skill_install` | `name: String, global: bool` | `String` |
| `save_skill_markdown` | `path: String, content: String` | `bool` |

---

## 7. 错误处理

| 场景 | 处理方式 |
|------|----------|
| Skill 目录不存在 | 提示用户并引导创建 |
| 符号链接失效 | 标记为「已断开」状态，允许重新关联或删除 |
| npx skills CLI 未安装 | 提示安装并提供命令 |
| npx skills 认证失败 | 提示登录 skill.sh |
| 权限不足 | 提示权限问题，建议以正确权限运行 |
| 文件被外部修改 | 重新扫描并刷新列表 |

---

## 8. 非功能需求

| 需求 | 说明 |
|------|------|
| **性能** | 启动扫描 < 2s，搜索响应 < 3s |
| **跨平台** | 优先 macOS，支持 Windows |
| **离线可用** | 基础功能（查看/启用/禁用）离线可用 |
| **数据安全** | 不上传任何用户数据 |
