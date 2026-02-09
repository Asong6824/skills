---
description: UI/UX 设计系统生成与查询工作流
---

# UI/UX Pro Max 工作流

基于 `ui-ux-pro-max` 技能的 UI/UX 设计标准流程。

## 技能位置

`~/.agent/skills/ui-ux-pro-max/SKILL.md`

## 核心步骤

### 1. 生成设计系统（必需）

// turbo

```bash
python3 ~/.agent/skills/ui-ux-pro-max/scripts/search.py "<产品类型> <行业> <关键词>" --design-system -p "项目名称"
```

示例：

```bash
python3 ~/.agent/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard fintech" --design-system -p "MyApp"
```

### 2. 补充详细搜索（按需）

```bash
# 风格搜索
python3 ~/.agent/skills/ui-ux-pro-max/scripts/search.py "glassmorphism dark" --domain style

# 排版搜索
python3 ~/.agent/skills/ui-ux-pro-max/scripts/search.py "elegant luxury" --domain typography

# UX 最佳实践
python3 ~/.agent/skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux
```

### 3. 技术栈指南

```bash
python3 ~/.agent/skills/ui-ux-pro-max/scripts/search.py "layout responsive" --stack html-tailwind
```

可用 stacks: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `shadcn`

### 4. 持久化设计系统（可选）

```bash
python3 ~/.agent/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "项目名称"
```

## 关键规则

- 始终以 `--design-system` 开始
- 不要使用 emoji 作为图标，使用 SVG 图标（Heroicons, Lucide）
- 确保 4.5:1 的颜色对比度
- 所有可点击元素添加 `cursor-pointer`
