# autostash with git pull --rebase

一个不太为人所知但非常有用的 Git 特性是 autostash。当我们处理一个项目并进行一些本地提交时，通常希望将同事推送到远程存储库的更改拉进来，并在此基础上重新进行提交。

```shell
git pull --rebase
```

如果我们有未提交的更改，则需要先存储这些更改，然后拉出远程更新，并弹出存储以继续工作。 这重复的工作。。。。但是从 Git 2.6 开始，您可以使用 **autostash** 选项自动隐藏并弹出未提交的更改。

```shell
git pull --rebase --autostash
```

除了手动调用此选项，还可以使用 git config 为存储库设置此选项：

```shell
git config pull.rebase true
git config rebase.autoStash true
```

或者，也可以为每个 Git 存储库进行全局设置：

```shell
git config --global pull.rebase true
git config --global rebase.autoStash true
```

--autostash 选项**仅**与--rebase 一起使用，您可以在[Git 文档](https://git-scm.com/docs/git-pull#git-pull---autostash)中了解更多信息。
