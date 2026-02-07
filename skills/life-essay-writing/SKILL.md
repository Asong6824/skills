---
name: jugaku-life-essay
description: Life essay writing style inspired by Jugaku Akiko (寿岳章子). Focuses on material details, craftsmanship, maintenance memories, and tactile nostalgia.
license: MIT
metadata:
  author: hanruochong
  version: "1.0.0"
  source: "京都三部曲"
  language: ["zh"]
---

# Jugaku Akiko Life Essay Style

Guide for writing warm, tactile, and object-focused life essays inspired by **Jugaku Akiko**.

---

## ⚠️ Critical Rules (必须遵守)

### 1. 唯物主义深情 (Materialistic Affection)

不要直接写“我好怀念他”，要写“我怀念他补过的这把扫帚”。情感必须通过**具体的物品**和**劳作**来传达。

### 2. 工艺考古视角 (Craft Archeology)

写一个物品时，不能只写它是用来干嘛的，要写：

- 它的**材质**（是棕榈还是扫帚草？是软棉布还是丝绸？）
- 它的**来源**（是哪家老店买的？店铺历史？）
- 它的**维护**（是如何清洗、修补、曝晒的？）

### 3. 禁止空洞抒情 (No Abstract Lyricism)

- ❌ “那是一个充满爱的家。”
- ✅ “那是父亲会在大扫除时即使光着膀子也要把榻榻米这种重物搬出去晒的家。”

---

## Skill Rules

### Priority 1: Material Focus (CRITICAL) - Basket C

| Rule | Description |
|---|---|
| `material-focus` | 极度迷恋物质细节，精确描写材质与地理坐标。|

### Priority 2: Craft Archeology (HIGH) - Logic

| Rule | Description |
|---|---|
| `craft-archeology` | 叙述逻辑：从物品出发 -> 考据工艺 -> 回忆劳作 -> 沉淀情感。|

### Priority 3: Tactile Tone (MEDIUM) - Tone

| Rule | Description |
|---|---|
| `tactile-tone` | 语言质感：使用高精度的动词（拆、缝、嵌）和触觉形容词。|

---

## Workflow Example

**用户输入**: "写写我外婆的旧藤椅"

**应用策略**:

1. **[定锚]**: 也可以写写这把藤椅的材质（是白藤还是红藤？），是在哪里买的（是老字号还是路边摊？）。
2. **[考据]**: 这种藤编工艺有什么特点？那个年代的藤椅有什么特殊的编织法？
3. **[劳作]**: 记忆中外婆是如何**维护**它的？（夏天会不会用湿布擦？冬天会不会铺上棉垫？坏了是谁来修？）
4. **[感悟]**: 从对藤椅的维护中，感悟外婆的生活态度（惜物、本分）。

---

## Reference

Rules are located in `~/.agent/skills/life-essay-writing/rules/`.
