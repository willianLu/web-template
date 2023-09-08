# 打造精品 web 模板

### 技术选型

    技术栈：Vue3, TypeScript
    UI库：Element plus
    文档：VitePress // 待实现
    代码规范：Eslint, Prettier
    GIT工具：Husky
    构建工具：Vite

### 目录结构

    ├── cli
    ├── src
    │   └── lib
    │   └── package
    │       └── template1
    │       │   └── ...
    │       │   └── public
    │       │   └── index.html
    │       │   └── page.config.js
    │       └── template2
    │           └── ...
    │           └── public
    │           └── index.html
    │           └── page.config.js
    └── index.html
    └── ... // 配置相关

### 目录使用说明

| 目录           | 级别 | 说明                                                        |
| :------------- | :--- | :---------------------------------------------------------- |
| cli            | 1    | 运行与打包脚本文件夹                                        |
| src            | 1    | 主要开发目录                                                |
| index.html     | 1    | 默认 html 模板                                              |
| ...            | 1    | 多为配置文, 如：vite.config.ts                              |
| lib            | 2    | 公共库，包含 components、utils、hooks、directives、views 等 |
| package        | 2    | 模板项目文件夹                                              |
| template1      | 3    | 模板名称，模板开发目录                                      |
| public         | 4    | 模板项目静态文件夹                                          |
| index.html     | 4    | 模板项目独立的 html 文件，需要修改配置替换                  |
| page.config.js | 4    | 模板独立的 vite 配置文件，会与公共的配置进行合并            |
| ...            | 4    | 开发相关文件                                                |

### 项目内引用别名说明

| 别名      | 说明                               |
| :-------- | :--------------------------------- |
| @lib      | lib 库的引用                       |
| @         | package 文件夹的引用               |
| @template | 当前模板路径，即 package/template1 |

> 说明'@'使用的必要，为了方便 Ts 正确查找和跳转文件。  
> 例：import OneHeader from "@/template/components/header/index.vue"，查找项目 template 下的 header 组件，Ts 可以正确追踪位置。<font color="#ee5353">注：因为模版启动为动态的，所以无法省略'模板名称'</font>

### html 模版使用说明

| 模版名称            | 位置       | 说明                                                 |
| :------------------ | :--------- | :--------------------------------------------------- |
| index.html          | 1 级文件夹 | 默认 html 模版                                       |
| template/index.html | 4 级文件夹 | 项目独立的模版，需要配置 page.config.js 文件进行替换 |

```javascript
// 使用插件 vite-plugin-html
// 假设项目为 package/template
// html模版配置方法
// page.config.js 文件
export default {
  customData: {
    htmlPlugin: {
      template: 'src/package/template/index.html'
    }
  }
}
```

### svg 图标方案

> svg-icon 组件在 lib 库，@lib/components/svg-icon  
> 配置 icons 文件位置，需要设置 page.config.js 文件

```javascript
import path from 'path'
// 假设项目为 package/template
// page.config.js 文件
export default {
  customData: {
    svgIconsPlugin: {
      // 当前模板的icons文件夹地址
      iconDirs: [path.resolve(__dirname, './assets/icons')]
    }
  }
}
```

### 脚本使用

1.项目启动，dev 后需加上模板名称

```bash
npm run dev template1
```

2.项目打包，build 后需加上模板名称

```bash
npm run build template1
```
