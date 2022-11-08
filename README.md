# eslint-config-spark

## 创建

`npm init`

安装相关依赖

## 项目目录

index.js eslint-config-spark入口文件，仅引入base.js

base.js 基础内置规则，仅依赖rules/common.js

rules 所有类型规则集合

## 使用

.eslintrc.js下

```js
extends: ['spark']
extends: ['spark/vue']
extends: ['spark/react']
extends: ['spark/taro']
```
