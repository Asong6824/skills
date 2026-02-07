---
description: 散文作家写作风格分析工作流
---

# 写作风格分析工作流

基于 `style-analysis` 技能的标准化分析流程。

## 技能位置

完整技能文档与工具：

```
~/.agent/skills/style-analysis/SKILL.md
```

## 核心流程

### 1. 文件预处理 (Pre-process)

如果是非 Markdown 文件，使用脚本转换：

```bash
python3 ~/.agent/skills/style-analysis/scripts/convert_and_analyze.py <文件或目录路径>
```

### 2. 数据采样 (Data Sampling)

**目标**：建立“高频关注点数据库”。

- 统计名词分布：
  - 🧺 **篮子 A**：宏观/抽象（历史、命运）
  - 🧺 **篮子 B**：中观/人际（家族、对话）
  - 🧺 **篮子 C**：微观/物质（器物、感官）

### 3. 逻辑拓扑 (Logic Topology)

**目标**：绘制“叙述路径图”。

- 标记段落功能流动：
  - `[定位]` → `[考据]` → `[感官]` → `[闪回]` → `[议论]`

### 4. 语调校准 (Tone Calibration)

**目标**：审计语言质感。

- **形容词审计**：情绪类 vs 物理类
- **动词精度**：万能动词 vs 专用动词

## 输出产物

- **风格分析报告**：包含注意力光谱、思维拓扑图、语言质感定义。
