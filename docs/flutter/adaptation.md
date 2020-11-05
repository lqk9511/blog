# Flutter 系列之 适配篇

## 晴天霹雳

哼着小曲儿，揣着裤小兜。走着六亲不认的步伐（没有 BUG），你要问我去干嘛？抱歉，俺这是去上班。突然间口袋手机一阵震动，嗡，嗡。拿出来一下，我套。XX 项目测试 Bug 的推送！心想这个项目不都基本上完测了啊。心中疑惑，点开一看。

**“项目页面在不同屏幕手机如： iPhone 5 / SE / iPad 上面 页面展现跟 UI 设计稿不一致！”**

难道我大 `Flutter` 就没有自己解决这个问题？

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/thunder.jpeg?raw=true" alt="晴天霹雳">

## 狂风暴雨

迈着我的小碎步匆匆到公司，直奔测试同学那边，测试的同学拿着各种类型的手机，在我眼前晃了晃。我发现比我想象的要严重！我细细的比对了 UI 设计稿跟各种类型的手机，发现有的小手机上面的样式直接就错乱了，比如：一行放不下直接被折叠的。同时也破灭了我心中的小确幸（妄想 `Flutter` 自己做了）

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/20200303033130802.gif?raw=true" alt="冷冷的冰雨在我脸上胡乱的拍">

然后我的惰性思维开始作祟了。能不能不解决！

随即我就想到了那个著名的理论，**“既然解决不了问题，那就解决提出问题的人儿～”**

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/killyou.gif?raw=true" alt="逐渐起了杀心">

好了又是没有 BUG 的一天，美滋滋～

...

等等各位别报警，还有下文呢～ 接着往下看

## 我需要一把油纸伞

测试打断了我的思路，问我这个问题啥时候能解决。我说我回去研究一下，你先测一测别的。

我溜了回来，这不是还没到解决不了的地步呢，暂时放他一马！

### 踩点

想要有预谋的做成一件事，你首先要了解她，知道她的前因后果，就想要找个女盆友一样，要... 咳咳扯多了。

经过我一番调查，发现跟我想的一样，`Flutter` 不同型号的手机表现不一致，是移动端的老问题了。这里主要影响因素有两点

- 分辨率（物理像素）

  - `iPhone 11 Pro Max` 和 `iPhone SE` 的分辨率分别为 `2688 x 1242` 和 `1136 x 640`。这表示手机分别在垂直和水平上所具有的像素点数。

- 设备像素比 （`device pixel ratio` 简称 `dpr` 物理像素和设备独立像素的比值）

那么这样就有可能造成这样色儿的：

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/WX20201104-104544.png?raw=true" alt="固定宽度比较图">

### 谋划

我们知道前因后果就该谋划怎么去解决她了。

这里我们采用 Viewport 的设计方案，把屏幕按照设计稿的尺寸平均分，最后按照 UI 设计稿给出的值，计算出图形在各个手机屏幕的大小，这样就能得到一个相对适配效果。

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/WX20201104-113112.png?raw=true" alt="公式">

使用后的效果：

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/WX20201104-113713.png?raw=true" alt="使用后效果图">

### 实行（如何撑我们的油纸伞）

那具体的我们怎么去用这个东西呢？ 很简单：

引入我们的包文件

```yaml
dependencies:
  flutter:
    sdk: flutter

  flutter_screen_adapter: ^0.0.1
```

引入

```dart
import 'package:flutter_screen_adapter/flutter_screen_adapter.dart';
```

初始化

```dart
class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {

    /// 在这里初始化
    /// 注意一定要在 `WidgetsApp` or `MaterialApp widget` 中初始化
    /// 否则就会找不到 `MediaQuery` 发生报错

    ScreenAdapter.init(context);
    return ...
  }
}
```

设置元素大小

```dart
Container(
  width: ScreenAdapter.value(100),
  height: ScreenAdapter.value(100),
  child: null
),
```

提供的属性

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/WX20201104-142815@2x.png?raw=true" alt="属性图"  >

这里就列举两个常用的

```dart
...

/// 根据设备信息得到自适应值
/// 用来使用不同屏幕达到跟设计稿一致效果
///
/// [vertical] 是否是垂直自适应数值，默认是水平
static double value(num value, {vertical = false});

/// 获取当前设备屏幕宽度
///
static double get screenWidth;

...
```

## 阳光彩虹小白马

那么到这里就可以撑起我的油纸伞啦～不过也雨过天晴了。

还有一个重要的点就是 测试小哥看到这里长舒一口气（保住了性命，同时拿开了架在我脖子上的\*\*\*）。

最后再奉上我们的 Demo 图：

<img src="https://github.com/lqk9511/gallery/blob/master/blog/flutter/demo.png?raw=true" alt="demo" width="414px" >
