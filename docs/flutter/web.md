# Flutter 系列之 web 入门

本文主要讲如何从一个 web 开发者如何转变到 `Flutter` 项目，本文不会讲如何安装 `Flutter` ，如何调试 IDE，如何配置环境，诸如此类的。这些网上一搜一堆，如果有同学有需要可以在网上自取哦～

`Flutter` 出来之后，大概在 `v1.12.13` 的这个版本的时候，我们做了一个公司内部 `CRM` 的 APP（纯 `Flutter` 项目，现在已经在线上运行），这次项目经历的周期很长，而且经手的同学也很多，也踩了很多的坑。 第二个项目是在 `v1.17.5` 的时候，后来到现在升级到，`v1.20.2`，这个项目是原生混合开发的模式，第一个小版本项目已经在线上运行，第二个小版本正在开发，运行良好。当然做 `Flutter` 中碰到了很多问题，这些问题，也都会在后续的 `Flutter` 系列中去一一告诉大家，敬请期待吧～

## 语言

`JavaScript` 是一门弱类型语言或者说是一门动态化语言，可以给任何对象在任何时候动态扩展属性（这也是有利有弊的，比如太过于灵活导致代码很难预测等），而 `Flutter` 是使用 `Dart` 作为开发语言的，`Dart` 则是一门强类型的语言，如果你之前没有接触过 `TypeScript`，`CoffeeScript` 的话，那估计写的时候会处处飘红的，而且在 dart2.0 之后会强制开启类型检查，来帮助开发者减少错误。这就和`TypeScript`，`CoffeeScript`是差不多的。如果想要了解 Dart，可以去 Dart 官网学习，也可以去网上自己搜索都可以。

## 工程化

首先我们创建 一个 `Flutter` APP 的 开发环境

```sh
flutter create --template=app projectName
```

`flutter` 的命令是在你本地装好 flutter 之后就会支持这个，当然你可以用 Android Studio 里面自动创建一个 Flutter 项目。

同时，`flutter create --template= ` 支持 `app`，`module`，`package`和`plugin` 这四个参数。对应分别创建不同的项目，这里我们只介绍 app 项目，其余的会在之后的系列中会有单独讲述，这里提一句，我们与原生混合开发的模式，就是用的 module 模式。

我们先看一下初始化项目后的目录文件

`flutter create --template=app test_flutter_app`

其实作为一个 web 开发者，初次看到这样的项目目录多少都会有点 `朦胧`，`node_modules` 呢？`package.json` 呢？

```shell
.
├── README.md
├── android # 安卓配置项目以及生成包文件
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── local.properties
│   ├── settings.gradle
│   └── testflutterapp_android.iml
├── assets # 这个目录初始化的时候是没有的 用来放图片之类的资源
├── build # 打包后才会有
├── ios # ios配置项目以及生成包文件
│   ├── Flutter
│   ├── Runner
│   ├── Runner.xcodeproj
│   └── Runner.xcworkspace
├── lib # 开发目录 主要写业务代码 .dart 文件
│   └── main.dart # APP 入口文件
├── pubspec.lock
├── pubspec.yaml # 相当于 package.json
├── test # 单元测试
│   └── widget_test.dart
└── testflutterapp.iml
```

而我们安装的插件包什么都被隐藏起来了，如果你用的 Android Studio 编辑器的话，在项目跟目录同级目录下面，会有一个 `External Libraries` 文件夹，里面会有一些项目依赖的一些信息。

```shell
.
├── Dart Packages
├── Dart SDk
└── Flutter Plugins
```

## 页面

接下来就是我们把 app 跑起来，看看页面是什么样子的。记得别忘记先 `flutter pub get` 相当于 `npm install` 或者 `yarn` 一样的效果。

运行后首页效果：

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/flutter_web_1.png?raw=true" alt="flutter page" width="150px" >

## 元素

## 跳转
