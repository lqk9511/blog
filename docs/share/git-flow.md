---
sidebarDepth: 2
---

# git-flow

:::tip 开卷有益
好的习惯 受用一生
:::

在网上冲浪的时候，可以看到各种的 git-flow 的介绍、翻译等。但是个人觉得都讲的太过官方化，有些晦涩。下面是我在工作中整理出来的一套流程（个人觉得会清晰一点）。

## 分支介绍

主要常用分支：

- 主分支 `master`（发布正式使用的都是这个分支）

- 开发分支 `dev`（所有功能分支在开发的时候需要验证，除了在本地验证，还可以合入 `dev` 发布验证）

- 测试分支 `test`（所有的功能分支开发完成后会合入 `test`发布，就是我们所说的提测）

- 预生产分支 `pre` （测试完毕后，还是会在预发环境下面再次 check 一面，才会上生产）

- 功能分支 `feature/版本号`（通常是我们需要开发的需求，起名最好跟版本号走）

- 修复分支 `hotfix/bug号`（通常是生产上出现了一些问题，需要紧急修复，起名最好按照 bug 号）

## git 开发流程

::: warning 注意
无论是开发新的版本，还是需要修复紧急的线上问题，都需要遵循以下步骤以及规范。
:::

### 从 `master` 分支拉取最新的代码

```sh
# 切到 master 分支
git checkout master
# gcm 「简写，如果你装了 zsh（母鸡请search） 可以直接使用简写，以下命令行代码后都会跟简写」

# 获取最新的代码
git pull --rebase --autostash
# gupa

# 切一个新的分支，功能分支起名「feature/版本号」，修复分支起名「hotfix/版本号」
git checkout -b feature/1.0.0
# gcb feature/1.0.0
```

### `commit` 提交规范

```sh
# 完成了怎么样的事情
git commit -m 'feat#版本号: xxx'
# gcmsg 'feat#版本号: xxx'

# 12345(bugId)什么样子的bug
git commit -m 'fixed#12345: xxx'

# 关于什么的重构
git commit -m 'refactor: xxx'

# 不会修改src或测试文件的更改。例如更新构建任务，程序包管理器
git commit -m 'chore: xxx'

# 代码样式，不影响代码含义的更改（空白，格式，缺少分号等）
git commit -m 'style: xxx'

# 添加缺少的测试或更正现有测试
git commit -m 'test: xxx'

# 还原提交
git commit -m 'revert: xx'
```

### 多人同时开发同一个分支时

```sh
# 当远程的提交多于本地提交时，需要先 rebase
git pull --rebase --autostash
# gupa

git push
# gp
```

### 功能开发完毕，提测

::: warning 注意
需要在提测的同时，提交一个 MR，由团队 Leader 安排小伙伴跟你一起对你这个版本代码进行 Review，提 MR 步骤请看下面
:::

```sh
# 切到test分支
git checkout test
# gco test

# 拉取test代码
git pull --rebase --autostash
# gupa

# 合并功能分支
git merge --no-ff feature/1.0.0
# gm --no-ff feature/1.0.0
# --no-ff：不使用 fast-forward 方式合并，保留分支的commit历史
# --squash：使用 squash 方式合并，把多次分支commit历史压缩为一次
# https://segmentfault.com/q/1010000002477106

# push到远程
git push
# gp
```

### 提交 MR（Merge Request）

```sh
# 切到master分支
git checkout master
# gcm

# 拉取最新master代码
git pull --rebase --autostash
# gupa

# 再切到当前开发的分支
git checkout feature/xxx
# gco feature/xxx

# rebase master
git rebase master
# grbm

# 如果rebase 产生冲突，手动解决冲突，然后
git add .
# ga .
git rebase --continue
# grbc

# rebase 完之后
git push
# gp

# 注意：当 rebase 过程中需要解决冲突
# 在 rebase 完成之后
# git push 无效后 需要用下面的命令
# !!! 用这个命令前 一定要确保本地代码跟线上代码的同步
# git pull --rebase 再一次
git push --force-with-lease
# gpf
```

### 发布预发环境

发布过程同「提测」，合并分支修改为 `pre`

::: danger 注意
禁止把 `dev`、`test`、`pre`、`master`分支 `merge` 入自己当前正在开发的 `feature` 分支中
:::

### 测试

在测试、修改 bug、测试、修改 bug 等一系列的循环过程后。发现你的 bug 没有了，测试那边也找不出你的问题了，那么恭喜你，终于可以上线了。找对应的负责人合并代码，并且等待前后端都确认无误，就可以发布上线了。

## 小结

git flow 的工作流程其实是很灵活的，核心的流程其实没多少（个人以为）。完全可以根据自己公司的情况去制定一个符合公司开发流程的 flow（配合公司的开发环境啊，或者是 CI/CD 流程啊）。同时也可以看看我分享的其他的关于 git 的一些常用操作。

> [工作中 Git 飞行姿势](./git.md)

> [更优雅的提交你的 Git Commit Message](./git-commit-message.md)

---

欢迎斧正，觉得对你有那么一点点帮助的，就请点个 [Star](https://github.com/lqk9511/blog)✨
