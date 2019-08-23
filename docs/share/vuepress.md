# VuePress
主要是记录使用的过程中遇到的一些问题。
## 环境配置信息
``` js
vuepress/1.0.3 darwin-x64 node-v10.16.0
```
因为一直使用的默认的主题，然后我还配置了一堆的东西，然后就会发现下面的信息。其实是不需要配置这么东西的。
``` js
"devDependencies": {
    "@vuepress/plugin-active-header-links": "^1.0.0-rc.1",
    "@vuepress/plugin-back-to-top": "^1.0.0-rc.1"
}
```
配置上面的后运行`vuepress dev docs`之后项目其实还是可以跑起来的，但是页面的这些插件的效果其实是没有的。
``` js
warning [vuepress] cannot resolve plugin "@vuepress/active-header-links"
warning [vuepress] cannot resolve plugin "@vuepress/back-to-top"
```
## yml配置文件相关东西

  `.vuepress`文件夹下面的`config.yml`，因为官网上面说的是支持`YML`、`toml`文件格式的，因为装逼使然，我刚刚开始的时候用的`YML`文件，结果踩了其中一个不大不小的坑（其实是我自己马虎），刚刚开始的时候我是这么配置的。
  ```yml
title: Hello Vuepress
description: Just playing around
# 懂得都懂终身代号
port: 9527
head: 
  - link
  - rel: icon
    href: /favicon.ico
  ```
这样配置没有问题，跑一下程序没有问题，非常nice。但是！你会发现页面上面会出现一些奇怪的东西[图]并且在你刷新页面或者加载页面的时候这个`<>`就会闪现一下，而且当你的页面`404`的时候它会直接显示出来。为了解决这个问题，排查了好久，差点就去github上面提issue了，幸好没有去。

最后排查自己的代码后是自己的文件配置写错了导致的:joy:简直尬一批。
```yml
title: Hello Vuepress
description: Just playing around
port: 9527
head: 
  # 注意这里是一个二维数组
  -
    - link
    - rel: icon
      href: /favicon.ico
```
