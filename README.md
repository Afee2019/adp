# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## 🌐 Internationalization

This project supports **simplified international approach** with only 2 core languages:
- **🇨🇳 Chinese Simplified (zh-CN)** - Default language
- **🇺🇸 English (en-US)** - International standard language

*Note: We've streamlined from 8 languages to 2 core languages to reduce maintenance costs and improve development efficiency.*

## Environment Prepare

Install `node_modules`:

```bash
pnpm install
```

*Note: This project uses pnpm as the package manager.*

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
pnpm start
# or without mock
pnpm start:no-mock
```

### Build project

```bash
pnpm build
```

### Check code style

```bash
pnpm lint
# or run biome lint only
pnpm biome:lint
```

### Test code

```bash
pnpm test
# or with coverage
pnpm test:coverage
```

### Other useful scripts

```bash
# Generate OpenAPI
pnpm openapi

# Clean unused i18n keys
pnpm i18n-remove

# TypeScript check
pnpm tsc
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
