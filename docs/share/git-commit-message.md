---
sidebarDepth: 2
---
# 更优雅的提交你的 Git Commit Message
:::tip
好的习惯 受用一生
:::

不知道你是否还是在工作或者平常coding当中还是在 `git commit -m 'update'`，或者是直接不写**message**的形式提交你变更的代码呢？我只能说这样的方式真的是很不友好，而且很捞～
## Message 规范
那么如何能优雅而又不失体面的提交你的代码呢？其实我们的 `git commit message` 是应该具备一些规范的。目前规范用的比较多的是 [Angular 团队的规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) 如下

每个提交消息由标题，正文和页脚组成。标头具有特殊格式，包括类型，范围和主题：
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
- **Type**：必须是下列之一
  - **feat**：一个新功能
  - **fix**：bug修复
  - **docs**：编辑文档
  - **style**：不影响代码含义的更改(空格、格式、缺少分号等，不是css的更改)
  - **refactor**：既不修复bug也不添加特性的代码更改
  - **perf**：提高性能的代码更改
  - **test**：添加缺失的或纠正现有的测试
  - **chore**：对构建过程或辅助工具和库(如文档生成)的更改
- **Subject**：主题包含对变更的简洁描述
- **Body**：具体的修改内容，可以包括与之前的对比
- **Footer**：通常是 BREAKING CHANGE 或修复的 issue 链接
## Git Commit 模版
如果你只是想要尝试一下，你可以给 git 设置 commit template 在每次 `git commit` 的时候在 vim 中显示，用来提示自己。

修改 ～/.gitconfig 添加
```
[commit]
template = ~./gitmessage
```
新建 ~/.gitmessage 内容如下
```
# head: <type>(<scope>): <subject>
# - type: feat, fix, docs, style, refactor, test, chore
# - scope: can be empty (eg. if the change is a global or difficult to assign to a single component)
# - subject: start with verb (such as 'change'), 50-character line
#
# body: 72-character wrapped. This should answer:
# * Why was this change necessary?
# * How does it address the problem?
# * Are there any side effects?
#
# footer: 
# - Include a link to the ticket, if any.
# - BREAKING CHANGE
```
## Commitizen 工具替代 git commit
工具级 commit message 生成，[commitizen](https://github.com/commitizen/cz-cli)提供的 `git cz` 来替代我们的 `git commit` 命令生成符合规范的 commit message 信息。

还需要为 commitizen 指定一个 Adapter 比如：Angular团队的[cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)使它能够按照我们指定的规范生成 commit message 信息。
### 全局安装
```sh
# 安装
yarn global add commitizen cz-conventional-changelog
# or
npm install -g commitizen cz-conventional-changelog
# 全局模式下，需要～/.czrc 配置文件 为 commitizen 指定 Adapter
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```
直接在对应的项目里面 `git cz` 就可以
### 项目级安装
```sh
# 安装
yarn add -D commitizen cz-conventional-changelog
# or
npm install -D commitizen cz-conventional-changelog
```
package.json 配置
```json
"script": {
    ...,
    "commit": "git-cz",
},
"config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }
```
下面是我走完整个 `git cz` 效果图：
![img](/WX20190826-143811@2x.png)
### 自定义 Adapter
如果 Angular 的规范不符合我们的实际，同样我们也可以通过 [cz-customizable](https://github.com/leonardoanalista/cz-customizable) 定制一套符合自己或者团队的规范。
```sh
# 全局安装
yarn global add cz-customizable 
# or
npm install -g cz-customizable

# 项目级安装
yarn add -D cz-customizable 
# or
npm install -D cz-customizable
```
记得也要修改 .czrc 或者 package.json 中 config ：
```json
{ "path": "cz-customizable" }
// or
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```
同时也要在 ～/ 或者对应项目目录下创建 .cz-config.js 文件，用来维护自己的格式。就比如这样 [my .zc-config.js](https://github.com/lqk9511/blog/blob/master/.zc-config.js)

到这里其实都算是 message 规范告一段落了。

但是还有一些比较狠的操作比如：[commitlint](https://github.com/marionebl/commitlint) 哈哈:tired_face:
### Commitlint 校验 Commit Message
如果不符合校验规范，就会直接拒绝 commit 请求的哦～

它同样也是需要一份配置：
- 如果你是用的 Angular 团队的规范，这里推荐
```sh
yarn add -D @commitlint/config-conventional @commitlint/cli
# or
npm install -D @commitlint/config-conventional @commitlint/cli
```
配置文件：需要在项目目录下创建配置文件 .commitlintrc.js
```js
module.exports = {
  extends: [
    ''@commitlint/config-conventional''
  ],
  rules: {
  }
};
```
- 如果你是自定义的 Adapter 这里推荐
```sh
yarn add -D commitlint-config-cz @commitlint/cli
# or
npm install -D commitlint-config-cz @commitlint/cli
```
配置文件：需要在项目目录下创建配置文件 .commitlintrc.js
```json
module.exports = {
  extends: [
    'cz'
  ],
  rules: {
  }
};
```
### 同时结合 Husky
这样做最佳方式是结合 git hook so～ [Husky](https://github.com/typicode/husky)
```sh
yarn add -D husky
# or
npm install -D husky
```
package.json中添加：
```json
"husky": {
    "hooks": {
      ...,
      "commit-msg": "commitlint -e $GIT_PARAMS"
    }
  },
```
或者在 .huskyrc 文件中
```json
{
  "hooks": {
    ...,
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
}
```
### 同时也可以 standard-version: 自动生成 CHANGELOG
经过上面的一顿操作，我们的 commit message 应该是比较符合我们自己预期的那样了（或者是 Angular 那套）规范，这样也是有利于我们借助 [standard-version](https://github.com/conventional-changelog/standard-version) 这样的工具自动生成 CHANGELOG ，甚至是 语义化的版本号（[Semantic Version](https://semver.org/lang/zh-CN/)）
```sh
yarn add standard-version
# or
npm install -S standard-version
```
package.json 配置或者创建 .versionrc .versionrc.json或.versionrc.js
```json
"scirpt": {
    ...,
    // 初次生成 1.0.0
    "release": "standard-version -f",
    // 1.0.0 --> 2.0.0 大版本更新
    "release-major": "standard-version -r major",
    // 1.0.0 --> 1.1.0 功能添加
    "release-minor": "standard-version -r minor",
    // 1.0.0 --> 1.0.1 bug修复
    "release-patch": "standard-version -r patch"
}
```
如果不指定参数直接使用 `standard-version` 命令，standard-version会自动分析commit message类型，如果包含 `patch` 就累加patch，有 `feat` 就自动累加minor，有 `break change` 就自动生成 major版本号，风险较大，建议指定参数。

::: tip
没有深入研究这个 :joy: 据说还有很多功能
:::

## 参考链接
- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [规范 commit 与 changelog 生成](https://github.com/Mcbai/Blog/issues/19)
- [优雅的提交你的 Git Commit Message](https://juejin.im/post/5afc5242f265da0b7f44bee4)