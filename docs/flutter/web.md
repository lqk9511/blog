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

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/flutter_web_1.png?raw=true" alt="flutter page" width="375px" >

我们可以都看到类似一个计数器的 Flutter Demo，这也就是 Flutter 初始化项目的代码。那我们看到这样的页面，是不是我们心中也会想一套 Web 方式的实现，很简单，那它 Flutter 侧要实现这样一个页面在代码层面是怎么体现的呢？

我们默认运行的是 `lib/main.dart` 入口文件里面的`main`函数

```dart
void main() {
  runApp(MyApp());
}
```

那么其实重点是 `main` 函数中执行的 `runApp` 函数中的 `MyApp` 实例。

```dart {10}
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
```

我们可以看到 `MyApp` 函数是返回了一个 `MaterialApp` 实例的，里面 home 参数传递的就是我们将要展示的首页 `MyHomePage` 类了。

在这一块我们就着重看一下 `MyHomePage` 类的实现（我们这里暂不说里面的逻辑实现）：

```dart
class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```

我们可以看到，其实跟传统的 Web 实现起来还是有差别的，整个页面都是在类中实现的包括页面的状态啊，还有事件上面的处理等，细心的同学可能已经发现了 `MyHomePage` 跟 `MyApp` 类实现的时候继承的类是不同的，分别是继承了 `StatelessWidget` , `StatefulWidget`。我是这么理解的，相当于 Web 里面的**无状态**纯展示组件，和**有状态**组件的分别。

`Flutter` 项目里面随处可见这样的 `class` 实现，大家可能也看到了，在画页面的时候好像都是一级一级的嵌套下去的。没错！`Flutter` 里面万物都是 `Widget`，也就引出了下面说的 —— 元素 也能叫 `Widget`

::: details 点击查看完整代码

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
        // This makes the visual density adapt to the platform that you run
        // the app on. For desktop platforms, the controls will be smaller and
        // closer together (more dense) than on mobile platforms.
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has·
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
```

:::

## 元素

这里说元素，其实我觉得不如直接叫 Widget，`Flutter` 里面的基础元素就是 `Widget`，就相当于 `Web` 里面各种个样的元素标签一样。

```html
<div></div>
```

那么这个一个基本的 Web 标签 在 Flutter 项目中怎么去写呢？

```dart
Container(child: null)
```

那么标签里面有别的元素标签呢？

```html
<div>我这里是HTML</div>
```

到 `Flutter` 项目

```dart
Container(child: Text('害，我这是Flutter'))
```

大家这里可以看到，在 `Flutter` 中 文本都是一个 `Text` `Widget` 对象实例来的。万物皆 `Widget` 由此可见一般。

完整的页面也都是这么一层一层的相互嵌套起来的，刚刚开始写的时候，大家可能觉得别扭，但是写习惯了来说其实还好，而且在 IDE 里面每个 `Widget` 后面的括号都会跟上自己 `Widget` 的名字，也算是另一种优化吧。

## 跳转

`Flutter` 路由跳转 跟 `Web` 中但页面应用的 `Route` 概念是相同的，同时会维护一个路由栈来进行管理，路由入栈(push)操作对应打开一个新页面，路由出栈(pop)操作对应页面关闭操作。

```dart
//  导航到新路由
Navigator.push( context,
  MaterialPageRoute(builder: (context) {
    return NewRoute();
  }));
```

`Navigator` 是一个路由管理的组件，它提供了打开和退出路由页方法。`Navigator` 通过一个栈来管理活动路由集合。通常当前屏幕显示的页面就是栈顶的路由。`Navigator` 提供了一系列方法来管理路由栈。

```dart
// 退出当前页面 返回上一层
Navigator.pop(context, "我是返回值")
```

还有一种方式是使用命名路由，需要我们先定义路由表，这就有点像我们写 `Web` 的 `Route` 定义的路由表一样。同样的我们也是要在 APP 启动的时候去注入定义的路由表：

```dart
MaterialApp(
  title: 'Flutter Demo',
  theme: ThemeData(
    primarySwatch: Colors.blue,
  ),
  //  注册路由表 也可以单独写一个文件
  routes:{
    "/":(context) => MyHomePage(title: 'Flutter Demo Home Page'), //注册首页路由
    "new_page":(context) => NewRoute(),
    ... // 省略其它路由注册信息
  } ,
  home: MyHomePage(title: 'Flutter Demo Home Page'),
);
```

使用命名路由的时候，跳转的方法有一点区别，返回的还是那样子的。

```dart
  Navigator.pushNamed(context, "new_page"); // 后面也可以用 arguments 传递参数
  //  Navigator.push(context,
  //  MaterialPageRoute(builder: (context) {
  //  return NewRoute();
  //  }));
```

## 写到最后

这篇文章其实也没有讲多么高深的东西，为的就是让大家对于 `Flutter` 的开发有一个大体上的认识（原来就是这样色儿的），那么文章的目的也就达到了。在接下来的 `Flutter` 系列当中会用以实际的业务场景，或者是某个通用的组件来详细 `Flutter` 具体的应用以及踩坑，期待下个系列吧。
