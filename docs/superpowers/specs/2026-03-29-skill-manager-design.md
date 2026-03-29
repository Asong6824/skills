# Claude Code Skill 可视化管理工具 - 设计规格书

**日期**: 2026-03-29
**版本**: v2.0 (Stitch Design System)
**设计系统**: The Precision Atelier

---

## 1. 背景与目标

### 1.1 痛点

1. **视野不清**: 用户不清楚已安装哪些 Skill，哪些在全局目录 (`~/.claude/skills/`)，哪些在项目目录
2. **操作门槛高**: 团队成员不熟悉命令行和 `.` 开头的隐藏文件，无法独立管理 Skill
3. **搜索困难**: 缺乏可视化的 Skill 市场浏览和搜索体验

### 1.2 目标

构建一个本地桌面端应用，实现 Claude Code Skill 的可视化全生命周期管理。

### 1.3 设计愿景

采用 **"The Precision Atelier"** 设计哲学 — 拒绝标准 web 框架的模板化外观，追求编辑级的高端桌面体验。灵感来自 Cupertino 风格界面的清晰度，注重氛围深度、刻意留白和触觉层次感。

**核心原则：深度即清晰度** — 不使用线条分隔元素，而是通过光影和表面物理层次来实现。

---

## 2. 设计系统 - The Precision Atelier

### 2.1 颜色系统

| Token | 色值 | 用途 |
|-------|------|------|
| `primary` | #0058BC | 主色调（San Francisco Blue）|
| `primary_container` | #0070EB | 主色容器 |
| `on_primary` | #FFFFFF | 主色文字 |
| `on_primary_container` | #FEFCFF | 主色容器文字 |
| `secondary` | #405E96 | 次要色 |
| `secondary_container` | #A1BEFD | 次要色容器 |
| `on_secondary` | #FFFFFF | 次要色文字 |
| `surface` | #F9F9FB | 背景底色 |
| `surface_container` | #EEEEEf | 表面容器 |
| `surface_container_low` | #F3F3F5 | 侧边栏/工具面板 |
| `surface_container_lowest` | #FFFFFF | 主卡片/工作区 |
| `surface_container_high` | #E8E8EA | 分段控件轨道 |
| `surface_container_highest` | #E2E2E4 | 工具提示/浮动菜单 |
| `on_surface` | #1A1C1D | 主要文字 |
| `on_surface_variant` | #414755 | 次要文字 |
| `outline` | #717786 | 边框 |
| `outline_variant` | #C1C6D7 | 幽灵边框（15%透明度）|
| `background` | #F9F9FB | 页面背景 |
| `error` | #BA1A1A | 错误状态 |

### 2.2 排版系统

使用单一字体 **Inter**，像印刷杂志一样严谨使用。

| 样式 | 字号 | 字重 | 字间距 | 用途 |
|------|------|------|--------|------|
| `display-lg` | 3.5rem | - | -0.02em | 大标题 |
| `display-md` | 2.75rem | - | -0.02em | 段落标题 |
| `title-lg` | 1.375rem | - | - | 章节标题 |
| `title-md` | 1.125rem | - | - | 副标题 |
| `body-lg` | 1rem | - | +0.01em | 正文 |
| `body-sm` | 0.875rem | - | +0.01em | 辅助正文 |
| `label-sm` | 0.6875rem | - | +0.01em | 标签/元数据 |

### 2.3 间距系统

| Token | 数值 | 用途 |
|-------|------|------|
| `spacing-1` | 0.25rem | 内部组件间距 |
| `spacing-2` | 0.5rem | 元素间距 |
| `spacing-3` | 0.75rem | 紧凑间距 |
| `spacing-4` | 1rem | 列表项间距 |
| `spacing-6` | 1.5rem | 卡片内间距 |
| `spacing-8` | 2rem | 内容块间距 |
| `spacing-12` | 3rem | 大区块间距 |
| `spacing-16` | 4rem | 页面边距 |

### 2.4 圆角系统

| Token | 数值 | 用途 |
|-------|------|------|
| `rounded-sm` | 8px | 小元素 |
| `rounded-md` | 12px | 内部组件 |
| `rounded-lg` | 16px | 主窗口/卡片 |
| `rounded-xl` | 24px | 大容器 |
| `rounded-full` | 全圆角 | 药丸形按钮 |

### 2.5 表面层次

将 UI 视为物理桌面，使用 `surface-container` 层创建嵌套重要性：

1. **基础层**: `surface` (#F9F9FB) — 画布
2. **凹陷区域**: `surface_container_low` (#F3F3F5) — 侧边栏或工具面板
3. **提升组件**: `surface_container_lowest` (#FFFFFF) — 主卡片或活动工作区元素
4. **交互覆盖层**: `surface_container_highest` (#E2E2E4) — 工具提示或浮动菜单

### 2.6 无线条规则

**禁止使用 1px 实线来分隔区块。** 结构边界必须仅通过背景色变化来定义：
- 侧边栏使用 `surface_container_low`，主内容区使用 `surface`
- 使用 `spacing-8` 或背景色调变化来分隔内容

### 2.7 玻璃态与渐变规则

浮动元素（模态框、弹出窗口）使用 **玻璃态** 效果：
- 使用半透明 `surface_container_lowest` + `backdrop-blur` 20-30px
- 主操作按钮使用从 `primary` 到 `primary_container` 的 145 度角渐变

### 2.8 环境阴影

当元素必须"浮动"（如下降菜单）时，使用 **环境阴影**：
- 颜色：`on_surface` 的 10% 透明度
- 样式：`box-shadow: 0 12px 40px rgba(26, 28, 29, 0.08)`
- 避免使用深灰色或纯黑色阴影

### 2.9 幽灵边框

如果需要边框用于无障碍（如输入框），使用 **幽灵边框**：
- `outline_variant` (#C1C6D7) 15% 透明度
- 应该是建议性的，而非硬性边界

---

## 3. 技术架构

### 3.1 技术选型

| 层级 | 技术 |
|------|------|
| 桌面框架 | Tauri v2 |
| 前端框架 | React 18 + TypeScript |
| 状态管理 | Zustand |
| 样式方案 | Tailwind CSS |
| UI 设计系统 | Stitch Design System (The Precision Atelier) |
| 搜索集成 | `npx skills` CLI (Vercel skill.sh) |
| 存储机制 | 文件系统扫描 + JSON 元数据 |

### 3.2 架构图

```
┌─────────────────────────────────────────────────────────────┐
│                      Claude Code Skill Manager               │
│                         (Tauri + React)                      │
│                    Design System: Precision Atelier          │
├─────────────────────────────────────────────────────────────┤
│  Frontend (React + Tailwind CSS)                           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │ Skill   │ │ Sidebar │ │ Browser  │ │ Search   │       │
│  │Workspace │ │         │ │ Panel    │ │ Panel    │       │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘       │
│       └──────────┬┴──────────┬┴──────────┘              │
│                  ▼                                         │
│            ┌──────────┐                                   │
│            │ Zustand  │  (Skill 列表、当前选中、搜索状态)  │
│            └────┬─────┘                                   │
├─────────────────┼──────────────────────────────────────────┤
│  Backend (Rust/Tauri)                                      │
│       ┌─────────┴─────────┐                              │
│       ▼                   ▼                                │
│  ┌─────────┐        ┌──────────┐                         │
│  │ FS Scan │        │ Command   │                         │
│  │ Handler │        │ Executor  │                         │
│  └────┬────┘        └────┬─────┘                         │
│       │                  │                                │
│       ▼                  ▼                                │
│  ~/.claude/skills   npx skills CLI                        │
│  (Symlink Dir)       (skill.sh 市场)                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. 界面规格

### 4.1 布局结构

```
┌──────────────────────────────────────────────────────────────────┐
│  [图标] Claude Code Skill 管理器            [─] [□] [✕]          │
├────────────────┬─────────────────────────────────────────────────┤
│                │                                                  │
│  ◉ 全局        │   Skill Workspace                                 │
│                │   ┌─────────────────────────────────────────┐   │
│  📁 项目 A    │   │  skill: baoyu-translate                  │   │
│    └ 3 skills │   │  ─────────────────────────────           │   │
│                │   │  # Baoyu Translate                       │   │
│  📁 项目 B    │   │                                          │   │
│    └ 5 skills │   │  > 这是一个翻译 Skill...                   │   │
│                │   │                                          │   │
│                │   │  ## 使用方法                               │   │
│  [+ 添加项目]  │   │  ...                                      │   │
│                │   │                                          │   │
│────────────────┤   └─────────────────────────────────────────┘   │
│ 🔍 搜索市场    │   ┌─────────────────────────────────────────┐   │
│                │   │ 📁 文件结构                               │   │
│                │   │ ├─ skill.md                              │   │
│                │   │ └─ assets/                               │   │
│                │   │    └─ icon.png                           │   │
│                │   └─────────────────────────────────────────┘   │
├────────────────┴─────────────────────────────────────────────────┤
│  就绪  │  全局: 12 skills  │  项目: 2 个                        │
└──────────────────────────────────────────────────────────────────┘
```

### 4.2 界面说明

#### Skill Workspace (主工作区)
- 顶部标题栏：应用名称 + 系统窗口控件
- 左侧边栏：全局/项目切换器
- 中央主区域：
  - 文件树视图：展示 Skill 的目录结构
  - Markdown 查看器：渲染 Skill 源码
- 右下角：状态栏，显示统计信息

#### Search Skills (搜索面板)
- 搜索输入框
- 搜索结果列表（名称、描述、来源）
- 安装按钮（全局/项目）
- 分类筛选标签

#### Settings & Edit (设置与编辑)
- 全局 Skill 目录路径配置
- 项目目录列表管理（添加/移除）
- Skill 编辑器（Markdown）
- 主题设置

### 4.3 组件清单

| 组件 | 类型 | 说明 |
|------|------|------|
| `<TitleBar>` | 系统 | 窗口标题栏，包含窗口控件 |
| `<StatusBar>` | 信息 | 显示统计信息 |
| `<Sidebar>` | 布局 | 左侧导航，surface_container_low 背景 |
| `<ProjectItem>` | 可交互 | 侧边栏项目条目 |
| `<SkillList>` | 列表 | 当前上下文下的 Skill 列表 |
| `<SkillItem>` | 可交互 | 单个 Skill 条目，hover 时提升背景 |
| `<BrowserPanel>` | 布局 | 右侧内容区，surface_container_lowest 背景 |
| `<FileTree>` | 树形 | Skill 文件结构，no dividers |
| `<MarkdownViewer>` | 渲染 | Skill 内容展示 |
| `<SearchPanel>` | 面板 | 搜索市场抽屉 |
| `<SearchResult>` | 列表 | 搜索结果条目 |
| `<SettingsDialog>` | 对话框 | 设置弹窗，glassmorphism 效果 |
| `<EditorDialog>` | 对话框 | 编辑弹窗 |
| `<ConfirmModal>` | 反馈 | 确认操作弹窗 |
| `<SegmentedControl>` | 控件 | 分段控件，用于视图切换 |
| `<Chip>` | 标签 | 分类标签，surface_container_high 背景 |

### 4.4 组件样式规范

#### 按钮

**Primary 按钮**
- 背景：从 `primary` (#0058BC) 到 `primary_container` (#0070EB) 的 145 度角渐变
- 圆角：`md` (12px)
- 文字：`on_primary` (#FFFFFF)

**Tertiary/Ghost 按钮**
- 无背景容器
- 文字：`primary` (#0058BC)
- Hover：背景变为 `surface_container_high`，0% 边框

#### 列表和卡片

**严格规则**：禁止使用分隔线。
- 列表项之间使用 `spacing-4` (1rem) 的垂直空白分隔
- 卡片使用 `surface_container_lowest` 在 `surface` 背景上通过背景色变化定义边界

#### 输入框

- 背景：`surface_container_low`
- 无边框
- 圆角：`md` (12px)
- Focus 状态：使用 `surface_tint` 40% 透明度的 2px 幽灵边框

#### 分段控件

- 轨道：`surface_container_high`
- 活动滑块：`surface_container_lowest` + 环境阴影

---

## 5. 屏幕设计

### 5.1 Skill Workspace 界面

**布局**：经典三栏布局

```
┌──────────────────────────────────────────────────────────────────┐
│  [≡] Skill Manager                          [─] [□] [×]          │
├────────────────┬─────────────────────────────────────────────────┤
│  ◉ 全局 Skills │                                                  │
│  └ baoyu-translate │  Skill Workspace                              │
│  └ claude-api     │  ┌──────────────────┬───────────────────┐     │
│  └ loop             │  │ 📁 SkillFiles  │ # Skill Name         │     │
│  └ simplify          │  │ ├─ skill.md   │ ## Description       │     │
│                     │  │ ├─ README.md │                       │     │
│  📁 Projects         │  │ └─ assets/   │ Content preview...    │     │
│  └ project-Skills   │  │   └─ icon.png │                       │     │
│                     │  └──────────────────┴───────────────────┘     │
│  ───────────────── │  ┌─────────────────────────────────────────┐  │
│  🔍 Search Skills  │  │ Enabled  │  v1.0.0  │  [Edit] [Delete] │  │
└────────────────────┴──└─────────────────────────────────────────┘──┘
```

**设计要点**：
- 侧边栏：`surface_container_low` (#F3F3F5) 背景
- 工作区：`surface` (#F9F9FB) 背景
- 内容卡片：`surface_container_lowest` (#FFFFFF) 带轻微阴影
- 列表项 hover：`surface_container_high` (#E8E8EA) 背景

### 5.2 Search Skills 界面

**布局**：搜索栏 + 筛选 + 结果网格

```
┌──────────────────────────────────────────────────────────────────┐
│  Search Skills                                        [×]         │
├──────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐     │
│  │ 🔍 Search skills...                                    │     │
│  └─────────────────────────────────────────────────────────┘     │
│                                                                   │
│  [All] [Productivity] [Development] [Communication] [AI]         │
│                                                                   │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐       │
│  │ ┌─────────────┐ │ │ ┌─────────────┐ │ │ ┌─────────────┐ │       │
│  │ │   Icon      │ │ │ │   Icon      │ │ │ │   Icon      │ │       │
│  │ └─────────────┘ │ │ └─────────────┘ │ │ └─────────────┘ │       │
│  │ baoyu-translate│ │ claude-api     │ │ loop            │       │
│  │ Translate...   │ │ AI Assistant... │ │ Recurring tasks │       │
│  │ ⭐⭐⭐⭐⭐ (42)   │ │ ⭐⭐⭐⭐ (128)  │ │ ⭐⭐⭐ (28)     │       │
│  │ [+ Add Global] │ │ [+ Add to Proj]│ │ [View Details] │       │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘       │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

**设计要点**：
- 搜索框：`surface_container_low` 背景，无边框，12px 圆角
- Chip 标签：`surface_container_high` 背景，`md` 圆角
- 结果卡片：`surface_container_lowest` 背景，hover 时环境阴影
- 安装按钮：渐变 primary 背景

### 5.3 Settings & Edit 界面

**布局**：标签页切换

```
┌──────────────────────────────────────────────────────────────────┐
│  Settings                                           [×]          │
├──────────────────────────────────────────────────────────────────┤
│  [General] [Projects] [Appearance] [Advanced]                     │
│  ─────────────────────────────────────────────────────────────  │
│                                                                   │
│  General Settings                                                  │
│  ─────────────────                                                 │
│                                                                   │
│  Global Skills Directory                                           │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │ /Users/username/.claude/skills                        │     │
│  └─────────────────────────────────────────────────────────┘     │
│                                                                   │
│  [Browse...] [Reset to Default]                                  │
│                                                                   │
│  □ Auto-scan on startup                                           │
│  □ Show disabled skills                                           │
│  □ Confirm before delete                                           │
│                                                                   │
│                                [Cancel]              [Save]       │
└──────────────────────────────────────────────────────────────────┘
```

**设计要点**：
- 标签页：使用分段控件样式
- 设置项：左侧标签 `on_surface_variant`，右侧控件
- 输入框：`surface_container_low` 背景，无边框
- 按钮：Primary 渐变，Secondary ghost 样式

---

## 6. 数据模型

### 6.1 Skill 实体

```typescript
interface Skill {
  id: string;                    // 唯一标识 (路径 hash)
  name: string;                  // Skill 名称
  description: string;           // 描述（从 md 头部提取）
  version?: string;              // 版本号
  author?: string;               // 作者
  tags: string[];               // 标签分类
  sourcePath: string;            // 源文件绝对路径
  scope: 'global' | 'project';  // 作用域
  projectPath?: string;         // 所属项目路径（scope=project 时）
  isEnabled: boolean;            // 是否启用（符号链接是否存在）
  files: SkillFile[];            // 文件列表
  lastModified: number;         // 最后修改时间
}

interface SkillFile {
  name: string;
  path: string;
  isDirectory: boolean;
  children?: SkillFile[];
}
```

### 6.2 项目配置

```typescript
interface ProjectConfig {
  path: string;           // 项目根目录
  name: string;           // 项目名称
  skillDir: string;       // .claude/skills 路径
  lastScanned: number;   // 最后扫描时间
}
```

### 6.3 本地索引 (JSON)

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
      "description": "A translation skill for Chinese content",
      "version": "1.0.0",
      "tags": ["translation", "chinese", "ai"],
      "sourcePath": "/Users/xxx/.agents/skills/baoyu-translate",
      "scope": "global",
      "isEnabled": true,
      "lastModified": 1711600000
    }
  ]
}
```

---

## 7. Rust 指令清单

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

## 8. 错误处理

| 场景 | 处理方式 |
|------|----------|
| Skill 目录不存在 | 提示用户并引导创建 |
| 符号链接失效 | 标记为「已断开」状态，允许重新关联或删除 |
| npx skills CLI 未安装 | 提示安装并提供命令 |
| npx skills 认证失败 | 提示登录 skill.sh |
| 权限不足 | 提示权限问题，建议以正确权限运行 |
| 文件被外部修改 | 重新扫描并刷新列表 |

---

## 9. 非功能需求

| 需求 | 说明 |
|------|------|
| **性能** | 启动扫描 < 2s，搜索响应 < 3s |
| **跨平台** | 优先 macOS，支持 Windows |
| **离线可用** | 基础功能（查看/启用/禁用）离线可用 |
| **数据安全** | 不上传任何用户数据 |
| **可访问性** | 支持键盘导航，色彩对比度符合 WCAG 2.1 AA |

---

## 10. 设计参考

- **设计工具**: Stitch (Google Stitch)
- **设计系统**: The Precision Atelier
- **设计项目 ID**: 15621786846012543657
- **设计屏幕**:
  - Skill Workspace: 3fc9def1847d4315a66f4797cd56fda2
  - Search Skills: c566c348a15142bf81334fc17554aaf7
  - Settings & Edit: 69c765eb7dbc41dca045875ed8d1ed18
  - Design System: assets-39c3a75273ef4d148a71aaa759e26859
