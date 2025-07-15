# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Ant Design Pro 的 React 企业级管理后台项目，使用 UmiJS v4 作为框架，TypeScript 作为开发语言。



## 标准工作流程

处理新任务时请遵循以下工作流程：

1. 首先，仔细思考问题，阅读代码库中的相关文件，并在@tasks/todo.md文件中追加撰写计划。

2. 该计划应包含可勾选的待办事项清单。

3. 开始工作前，请与我确认，我将审核该计划。

4. 然后开始处理待办事项，完成一项勾选一项。

5. 最后，在@tasks/todo.md文件中添加"回顾"部分，总结你所做的更改及其他相关信息。

在适当的时候记得定期提交代码。



## 常用命令

### 包管理
- 使用 `pnpm` 而不是 npm，由于项目配置了 pnpm workspace
- 安装依赖：`pnpm install`

### 开发和构建
- 开发环境启动：`pnpm start` 或 `pnpm dev`
- 无 mock 启动：`pnpm start:no-mock`
- 构建项目：`pnpm build`
- 预览构建结果：`pnpm preview`

### 代码质量
- 运行 lint：`pnpm lint` (包括 biome lint 和 TypeScript 检查)
- Biome lint：`pnpm biome:lint`
- TypeScript 检查：`pnpm tsc`

### 测试
- 运行测试：`pnpm test` 或 `pnpm jest`
- 测试覆盖率：`pnpm test:coverage`
- 更新测试快照：`pnpm test:update`

### 其他
- 生成 OpenAPI：`pnpm openapi`
- i18n 清理：`pnpm i18n-remove`

## 项目架构

### 技术栈
- **框架**: UmiJS v4 + React 19
- **UI组件库**: Ant Design v5 + Pro Components
- **样式方案**: antd-style (CSS-in-JS)
- **状态管理**: UmiJS 内置的 model (基于 zustand)
- **国际化**: UmiJS i18n 插件
- **代码规范**: Biome (替代 ESLint + Prettier)
- **测试**: Jest + Testing Library

### 目录结构重点
- `src/pages/`: 页面组件，按功能模块划分 (dashboard, form, list, profile 等)
- `src/components/`: 公共组件
- `src/services/`: API 接口定义和类型
- `src/locales/`: 国际化文件，支持多语言
- `config/`: UmiJS 配置文件
- `mock/`: Mock 数据

### 路由结构
项目采用约定式路由 + 配置式路由结合：
- 主要模块：Dashboard (分析/监控/工作台)、Form (基础/步骤/高级表单)、List (搜索/基础/卡片列表)、Profile、Result、Exception、Account
- 用户认证相关页面独立布局 (`/user` 路径)

### 代码规范
- 使用 Biome 进行代码格式化和 lint
- 配置了 Husky + Commitlint 进行 git hooks
- 支持 CSS-in-JS，建议使用 antd-style
- TypeScript 严格模式启用

### 国际化
- 默认语言：zh-CN (简体中文)
- 支持语言：zh-CN (简体中文), en-US (英文)
- 配置文件位于 `src/locales/` 目录
- 已精简语言支持，移除了繁体中文、日文、葡萄牙文、波斯文、孟加拉文、印尼文等语言

### Mock 和 API
- 开发环境支持 mock 数据
- 配置了 OpenAPI 代码生成
- API 基于 `@umijs/max` 的 request 配置

## 开发注意事项

### 样式开发
- 优先使用 antd-style 的 CSS-in-JS 方案
- 避免使用传统的 .less 文件（项目正在迁移中）
- 遵循 Ant Design 设计规范

### 组件开发
- 新组件放在 `src/components/` 下
- 页面级组件直接在对应页面目录下创建
- 使用 TypeScript 进行类型定义

### 权限和路由
- 基于 UmiJS 的 access 插件进行权限控制
- 路由配置在 `config/routes.ts` 中维护
- 支持嵌套路由和权限包装器

### 测试
- 测试文件放在对应功能模块目录下
- 使用 Jest + Testing Library 进行单元测试
- 测试配置支持 DOM 环境模拟