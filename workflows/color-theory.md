---
description: 颜色理论与调色板和谐设计工作流
---

# 颜色理论专家工作流

基于 `color-theory-palette-harmony-expert` 技能的颜色设计流程。

## 技能位置

`~/.agent/skills/color-theory-palette-harmony-expert/SKILL.md`

## 适用场景

✅ **使用此技能：**

- 拼贴画的调色板匹配
- 暖/冷色交替算法
- 色相排序的照片序列
- 使用 Earth-Mover Distance 的调色板兼容性
- 避免颜色单调的多样性惩罚

❌ **不适用：**

- 基本 RGB 操作 → 使用标准图像处理
- UI 配色方案 → 使用 ui-ux-pro-max

## 核心概念

### 1. OKLCH 颜色空间（2026+ 现代标准）

```css
/* CSS 原生支持 */
color: oklch(70% 0.15 145);
```

- L: 亮度 0-1
- C: 色度 0-0.4+
- H: 色相 0-360°

### 2. 暖/冷分类

```
暖色: 红(0-30°), 橙(30-60°), 黄(60-90°)
冷色: 绿(120-180°), 青(180-210°), 蓝(210-270°)
```

### 3. 调色板兼容性分数

```python
compatibility = (
    emd_similarity * 0.35 +
    hue_harmony * 0.25 +
    lightness_balance * 0.15 +
    chroma_balance * 0.10 +
    temperature_contrast * 0.15
)
```

## 推荐资源

- [oklch.com](https://oklch.com/) - 交互式 OKLCH 颜色选择器
- [Evil Martians OKLCH](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) - OKLCH 采用指南
- [Harmonizer](https://harmonizer.evilmartians.com/) - 调色板和谐工具
