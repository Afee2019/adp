# 替换 Card 组件的 bordered={false} 为 variant="borderless"

## 任务分析

经过搜索，发现项目中有26个文件中的Card组件使用了 `bordered={false}` 属性，需要将其替换为 Ant Design 5 的新语法 `variant="borderless"`。

同时发现有2个文件中的 Descriptions 组件也使用了 `bordered` 属性，但这些不需要修改，因为 Descriptions 组件的 bordered 属性语法没有变化。

## 待办事项清单

### 搜索和确认阶段
- [x] 搜索所有 tsx 文件中的 `bordered={false}` 使用情况
- [x] 确认哪些是 Card 组件，哪些是其他组件
- [x] 确认 Descriptions 组件的 bordered 属性不需要修改

### 文件修改阶段

#### Dashboard 相关文件
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/dashboard/analysis/components/IntroduceRow.tsx` (4处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/dashboard/analysis/components/TopSearch.tsx` (1处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/dashboard/analysis/components/OfflineData.tsx` (1处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/dashboard/monitor/index.tsx` (6处)

#### Form 相关文件
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/form/basic-form/index.tsx` (1处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/form/advanced-form/index.tsx` (3处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/form/step-form/index.tsx` (1处)

#### List 相关文件
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/list/basic-list/index.tsx` (1处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/list/search/projects/index.tsx` (1处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/list/search/applications/index.tsx` (1处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/list/search/articles/index.tsx` (2处)

#### Profile 相关文件
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/profile/basic/index.tsx` (1处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/profile/advanced/index.tsx` (3处)

#### Result 相关文件
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/result/fail/index.tsx` (1处)
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/result/success/index.tsx` (1处)

#### Account 相关文件
- [ ] 修改 `/Users/shawn/dev/adp/src/pages/account/center/index.tsx` (1处)

### 验证阶段
- [ ] 运行 TypeScript 检查确保语法正确
- [ ] 运行 lint 检查
- [ ] 测试构建确保没有问题

## 注意事项

1. 只修改 Card 组件的 `bordered={false}` 属性
2. 保持 Descriptions 组件的 `bordered` 属性不变
3. 确保语法正确，避免破坏现有功能
4. 注意一些文件中可能有多行的属性定义

## 修改模式

将：
```tsx
<Card bordered={false}>
```

或：
```tsx
<Card
  title="标题"
  bordered={false}
>
```

替换为：
```tsx
<Card variant="borderless">
```

或：
```tsx
<Card
  title="标题"
  variant="borderless"
>
```