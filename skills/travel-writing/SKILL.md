---
name: alan-booth-travel-writing
description: Travel writing style guide inspired by Alan Booth's "The Roads to Sata". Apply when writing travel narratives, travelogues, or journey descriptions. Focuses on sensory grounding, human warmth, and immersive storytelling without satirical elements.
license: MIT
metadata:
  author: hanruochong
  version: "2.0.0"
  source: "縱走日本二千哩 (The Roads to Sata)"
  language: ["zh", "en"]
---

# Alan Booth Travel Writing Style

Comprehensive guide for writing warm, immersive travel narratives inspired by Alan Booth's《縱走日本二千哩》. This skill combines **intent recognition**, **writing strategies**, and **style rules** to generate appropriate content.

---

## ⚠️ Critical Rules (必须遵守)

### 1. 输出语言：简体中文

虽然参考书籍是繁体版，但所有生成内容**必须使用简体中文**。

### 2. 内容来源规则

| 内容类型 | 来源 |
|---------|------|
| 历史、地理、文化背景 | 可参考原著或通用知识 |
| 个人体验、路途描写、人物故事 | **必须基于用户提供的素材**，不可虚构 |

**工作流程**：

- 用户说「介绍一下 X」→ 可直接生成历史/地理信息
- 用户说「我到达 X 时...」但未提供细节 → **先询问用户具体经历**
- 用户提供旅行细节 → 根据风格规则润色成亚兰·布斯风格

### 3. 历史准确性

历史/地理信息必须准确，避免常识性错误：

- ❌「苏俄」用于19世纪（苏联1922年才成立）→ ✅「俄国」
- ❌ 错误的年代、人物、事件
- 如不确定，宁可省略或使用模糊表达

### 4. 游记简洁原则

这是**游记**，不是历史论文或百科全书：

- ❌ 详细罗列政策目的、条款内容
- ❌ 与旅行体验无关的背景知识
- ✅ 只保留与旅行者感受相关的历史背景
- ✅ 点到为止，留白给读者

### 5. 引用原著规则

原著写于1980年代，部分数据可能过时：

- ❌ 定量引用：「幌延有二十二家酒吧」
- ✅ 定性引用：「《纵走日本两千里》中提到，幌延的酒吧多得惊人」
- ✅ 标注来源：「书中写道...」「据亚兰·布斯描述...」

### 6. 融入当地视角

历史/地理介绍中可引入日本人的看法或当代数据：

- ✅「北海道常年位列日本人最想去的旅行地前三名」
- ✅「在日本人心目中，北海道是...」
- ✅ 引用当代调查、民众印象

---

```
用户指令 → 意图识别 → 选择策略 → 应用风格 → 生成内容
```

1. **意图识别**：分析用户指令，确定描写类型
2. **选择策略**：读取对应的 `strategies/*.md` 文件，获取结构框架
3. **应用风格**：全程应用 `rules/*.md` 中的写作风格规则
4. **生成内容**：按结构框架和风格规则生成内容

---

## Step 1: Intent Recognition (意图识别)

根据用户指令，识别以下 7 种描写类型：

| 描写类型 | 触发模式 | 策略文件 |
|---------|---------|---------|
| **地区宏观介绍** | 「介绍一下 X」「X 是什么地方」「说说 X」 | `strategies/region-overview.md` |
| **抵达/路途描写** | 「我到达 X」「第 N 天」「路上」「途中」 | `strategies/arrival-journey.md` |
| **人物速写** | 「描写这个人」「他/她是什么样的人」 | `strategies/character-sketch.md` |
| **食物描写** | 「这道菜」「吃 X」「品尝」 | `strategies/food-description.md` |
| **历史典故叙述** | 「X 的故事」「X 的典故」「历史上」 | `strategies/historical-narrative.md` |
| **文化/宗教场所** | 「X 寺/神社/教堂」「参观 X」 | `strategies/cultural-site.md` |
| **重大历史事件** | 「广岛/长崎」「战争」「灾难」「纪念馆」 | `strategies/major-event.md` |

### 识别规则

1. **优先匹配最具体的模式**
2. **对于模糊指令，默认使用 `region-overview`**（如「介绍一下北海道」）
3. **如果用户明确表示个人体验**（「我到达」「我走进」），使用 `arrival-journey`

---

## Step 2: Apply Strategy (应用策略)

根据识别结果，读取对应的策略文件，按其结构框架组织内容。

每个策略文件包含：

- **触发条件**
- **结构框架**（必需/推荐/可选元素）
- **原著示例**
- **写作要点**

---

## Step 3: Apply Style Rules (应用风格规则)

无论使用哪种策略，始终应用以下风格规则：

### Priority 1: Sensory Anchoring (CRITICAL)

| 规则 | 说明 |
|-----|------|
| `sense-specific-color` | 用精确颜色，不用泛称（亮蓝 not 蓝） |
| `sense-texture` | 包含触感（滑、粗糙、冰涼） |
| `sense-temperature` | 温度作为身体体验 |
| `sense-sound` | 捕捉环境声音 |
| `sense-smell` | 记录气味 |
| `sense-comparison` | 与日常事物对比（像柳橙廣告） |

### Priority 2: Human Connection (CRITICAL)

| 规则 | 说明 |
|-----|------|
| `human-action-portrait` | 用动作揭示性格 |
| `human-dialogue-economy` | 对话简短，无修饰语 |
| `human-gift-record` | 记录小恩惠 |
| `human-body-state` | 用身体感受锚定叙事 |
| `human-no-judgment` | 描述，不讽刺评价 |

### Priority 3: Narrative Rhythm (HIGH)

| 规则 | 说明 |
|-----|------|
| `rhythm-sentence-variation` | 长句写景，短句写动作 |
| `rhythm-time-markers` | 具体时间（下午三點） |
| `rhythm-place-personality` | 赋予地点个性 |

### Priority 4: Cultural Integration (MEDIUM)

| 规则 | 说明 |
|-----|------|
| `culture-song-quote` | 穿插当地歌谣 |
| `culture-observe-ritual` | 描述亲眼所见的习俗 |
| `culture-local-speech` | 捕捉方言特色 |

---

## Anti-Patterns to Avoid

| 模式 | 问题 | 修复 |
|-----|-----|-----|
| 百科全书式罗列 | 无叙事性 | 用故事串联信息 |
| 过度解释 | 扼杀神秘感 | 信任读者 |
| 抽象形容词 | 无画面感 | 用感官细节 |
| 煽情 | 廉价 | 克制、让事实说话 |
| 讽刺/嘲笑 | 制造距离 | 保持温暖 |
| 泛化（「日本人都是...」） | 虚假权威 | 用「我遇到的这个人...」 |

---

## Example: Intent → Strategy → Output

### 用户指令：「介绍一下北海道」

1. **意图识别** → `region-overview`
2. **读取策略** → `strategies/region-overview.md`
3. **结构框架**：
   - 开篇定位（1869年开拓使设立）
   - 城市规划/地理特征（与本州对比）
   - 历史沿革（开拓政策、三大目的）
   - 文化特质（「很不日本」的特征）
   - 引用屯垦者民谣
   - 今昔对比
4. **应用风格**：精确颜色、今昔对比、民谣引用
5. **生成内容**

### 用户指令：「我到达札幌时」

1. **意图识别** → `arrival-journey`
2. **读取策略** → `strategies/arrival-journey.md`
3. **结构框架**：
   - 时间锚点（下午四点）
   - 身体感受（疲劳、寒冷）
   - 感官印象（雪的声音、空气的味道）
   - 偶遇人物（列车员、老太太）
   - 抵达时刻
4. **应用风格**：身体锚定、动作肖像、简洁对话
5. **生成内容**

---

## Reference Material

源文档位于：

```
/Users/hanruochong/data collection/游记/縱走日本二千哩.md
```

策略文件位于：

```
~/.agent/skills/travel-writing/strategies/
├── region-overview.md      # 地区宏观介绍
├── arrival-journey.md      # 抵达/路途描写
├── character-sketch.md     # 人物速写
├── food-description.md     # 食物描写
├── historical-narrative.md # 历史典故叙述
├── cultural-site.md        # 文化/宗教场所
└── major-event.md          # 重大历史事件
```
