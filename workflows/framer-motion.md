---
description: Framer Motion 动画最佳实践工作流
---

# Framer Motion 最佳实践工作流

基于 `framer-motion-best-practices` 技能的动画优化流程。

## 技能位置

`~/.agent/skills/framer-motion-best-practices/SKILL.md`

## 核心规则 by 优先级

### 1. Bundle 优化 (CRITICAL)

```jsx
// ❌ 避免
import { motion } from "framer-motion";

// ✅ 推荐 - 减少 bundle 大小
import { LazyMotion, domAnimation, m } from "framer-motion";

<LazyMotion features={domAnimation}>
  <m.div animate={{ opacity: 1 }} />
</LazyMotion>
```

### 2. 防止重渲染 (CRITICAL)

```jsx
// ❌ 避免 - 每次渲染都会触发重新渲染
const [x, setX] = useState(0);
<motion.div animate={{ x }} />

// ✅ 推荐 - 使用 MotionValue
const x = useMotionValue(0);
<motion.div style={{ x }} />
```

### 3. 动画属性 (HIGH)

```jsx
// ✅ 使用 transform 属性 (GPU 加速)
animate={{ x, y, scale, rotate }}

// ❌ 避免 - 会触发重排
animate={{ width, height, left, top }}
```

### 4. Layout 动画 (HIGH)

```jsx
// 使用 layout="position" 只动画位置
<motion.div layout="position" />

// 使用 layoutId 共享元素过渡
<motion.div layoutId="shared-element" />
```

### 5. Scroll 动画 (MEDIUM-HIGH)

```jsx
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

<motion.div style={{ opacity }} />
```

### 6. 手势优化 (MEDIUM)

```jsx
// ✅ 使用 while* props
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

### 7. Spring 物理 (MEDIUM)

```jsx
// 可中断的物理动画
<motion.div
  animate={{ x }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 30
  }}
/>
```

## 交付前检查清单

- [ ] 使用 LazyMotion 而不是 motion
- [ ] 使用 useMotionValue 而不是 useState
- [ ] 只动画 transform/opacity 属性
- [ ] variants 定义在组件外部
- [ ] 检查 prefers-reduced-motion
