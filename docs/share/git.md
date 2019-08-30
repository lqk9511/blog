# 工作中 Git 飞行姿势
记录使用git的一些姿势，没那么细节，但都是一些工作中常用的。
## 配置用户名称和邮箱
```sh
# 全局设置
git config --global user.name "username"
git config --global user.email "username@email.com"
# 针对项目单独配置 需要进到相对应的项目根目录
git config --local user.name "username"
git config --local user.email "username@email.com"
```
## 修改远程仓库地址
因为我每次忘记命令，结果都去改文件里面地址:joy:好气呀。
```sh
# 查看
git remote show origin 
# 直接命令添加
# 如果存在则要先删除
git remote rm origin
git remote add origin [url]
# 命令修改
git remote origin set-url [url]
# 这都记不住！（跟我一样）
# 修改config文件吧
```
## 开发新需求
记得从**最新的**`master`分支中切出来一个新的分支出去开发
```sh {1}
# 拉取master分支最新的代码
git pull --rebase
# 创建新的需求分支
git checkout -b feature/xxxx
# coding...
```
## 解决某问题
记得从**最新的**`master`分支中切出来一个新的分支出去开发
```sh {1}
# 拉取master分支最新的代码
git pull --rebase
# 创建问题分支（两种名称都可以主要是要统一）
git checkout -b hotfix/xxxx
# git checkout -b fix/xxxx
# coding...
```
## commit
每次的`commit`最好还是要做[commit内容格式化](https://lqk9511.github.io/blog/share/git-commit-message.html)的不要让别的看你的commit信息的时候都是~~update，更新，修复，新增，删除~~这些之类的太不明确的词语:triumph:，不说别人看到怎么样子，我是接受不了这样的提交信息的。
## 版本回退
在我们的实际开发中总是会有各种各样的问题，那么我们就需要它了 `reset` 版本回退。
```sh
# 对于本地的 commit 还没有提交到远程分支
# 首先看一下我们的 commit id 
git log
# 复制你想要回退的commit id
# --soft 保存文件状态到 添加暂存区后
# --mixed（默认）保存文件状态到 未添加暂存区
# --hard 不保存文件状态回退
git reset --hard [commit id]
# HEAD~ 回退到上一次 commit
# 没有加 --hard 则保存 commit 状态就是 status
git reset HEAD~
# 回退到前面三个 commit 位置
git reset HEAD~3
```
## cherry-pick
`git cherry-pick` 可以理解为**挑拣**获取某个分支的单次提交，并且作为一个新的 `commit` 引入到你当前操作分支上面。这个命令也是很有用滴～
```sh
# 基本格式
git cherry-pick [<options>] <commit-id>
# options
# --quit 退出当前的cherry-pick序列
# --continue 继续当前的cherry-pick序列
# --abort 退出当前的cherry-pick序列 恢复当前分支到没有 pick 前状态
```
## push
在我们的工作里面都会有很多次的push：
:::warning
每次的推送请保证当前分支是最新的代码
:::
```sh
# 基本格式
git push <远程主机名> <本地分支名>:<远程分支名>
# 省略远程分支名称
# 推送到跟本地分支名称相同的远程分支 如果没有则会被新建
git push origin master
# 省略本地分支名 等于推送一个空分支
# 表示会删除这指定的远程分支！
git push origin :master
# 删除远程分支（上面的等同于这条命令）
git push origin --delete master
# 强制推送 -f or --force 会强行是本地分支覆盖远程分支
# 尽量避免强制推送 除非你知道你自己在做什么
git push --force
# 这个命令在我的理解只有在做代码 rebase（下面有讲到） 的时候才会用
# 我自己的理解就是不会让你 rebase 过来的代码影响本来分支的时间线
git push --force-with-lease
# 没有option 默认推送当前分支到远程 规则同上前面几条
git push
```
## 代码rebase
当我们经历过漫长的开发周期的时候，这个需求分支终于开发完毕，可以上线了，但是我们从来都没有 `rebase` 过我们的代码。其实是建议在需求分支上面每天结束的时候`git rebase master`**同样也要保证master是最新的**，你会问什么是？为什么要？
:::warning
当然建议是在一个新的分支上面坚持这么做，否则最后的 rebase 可能会使你感到有点崩溃（当有很多次的 commit ）。
:::
1. 会让你知道你和master分支具体会有那些冲突，这些冲突会由你自己解决，而不是在你提MR的时候，由合并者去解决存在的代码冲突。
2. 同时也会加快工作的效率。
3. master上面的版本时间线会是一条笔直漂亮的线，而不是很杂乱，同时也利于版本回退。
4. 总的来说利大于弊（每天 rebase 会浪费时间？）
```sh
# 在 master 分支拉取最新代码
git pull --rebase
# 切换到开发的需求分支上面
# 我试过好像不能直接 rebase 远程 master 分支
git rebase master
# 开始 rebase 过程中容易出现的问题
# 代码冲突 rebase 就会停止下来 当前的分支会停在一个临时的分支上面让你解决冲突（不要慌） 没有什么大的问题 正常解决冲突 完事记得 git add .
# 继续 rebase
git rebase --continue 
# 如果还有冲突 还会循环上面步骤
# 还有就是 rebase 过程中停在了临时分支上面 你去 idea 上面看的时候 也没有发现什么冲突的 这时候就应该跳过这个了
git rebase --skip
# 这时候又进入正常 rebase 过程
# 剩下的就是重复上面的步骤了
# 还有就是如何停止呢 当你发现 rebase 出现的不可预测的问题 比如自己一脸懵逼 或者误操作 或者...
# 停止它 并且回到没有 rebase 之前状态
git rebase --abort
# 当 rebase 完成的时候 当前分支会自动切回来 剩下的就是我上面讲到的
git push --force-with-lease
```
## merge
到这里基本上就可以开心去提 MR 啦～

