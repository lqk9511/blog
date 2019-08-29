---
sidebarDepth: 2
---
# 移动端适配方案 viewport
### 背景
今年3月份的时候新入职了一家公司有需求要做自己公司APP上面的小程序。就是类似于微信小程序那种结构。

其中有遇到了一个问题，就是移动端的适配问题，之前我一直用的rem的适配方案（[不知道的可以点这里](https://www.jianshu.com/p/c5fc2c5c2b53)），也没有什么太大的问题。但是又想着都 9102 了会不会有点捞～于是就找找看看有没有更好的替代方案（结合时代的）。
## 响应式 Web 设计 - Viewport 
### 什么是 Viewport ？
>viewport是用户网页的可是区域。翻译中文就是“视区”，手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。
### 关于 Viewport 的三个理论
>来自于 [PPK(Peter-Paul Koch)](https://twitter.com/ppk) 关于 viewport 的三个观点（[so~1](https://www.quirksmode.org/mobile/viewports.html),[so~2](https://www.quirksmode.org/mobile/viewports2.html),[so~3](https://www.quirksmode.org/mobile/metaviewport/)），有很多文章的观点都出自那里（包括本文）。
- **layout viewport**（布局视区）：在移动端浏览器上面，视觉视区限制了布局视区，为了能在移动设备上正常显示那些为pc端浏览器设计的网站，移动设备上的浏览器都会把自己默认的 viewport 设为980px或其他值，一般都比移动端浏览器可视区域大很多，所以就会出现浏览器出现横向滚动条的情况 。布局视区的宽度是可以用 `document.documentElement.clientWidth` 来获取。上一张偷来的图，帮助理解。![img](https://raw.githubusercontent.com/lqk9511/gallery/master/blog/552720562-569ef61a18464_articlex.png)
- **visual viewport**（视觉视区）：用户透过窗口可以看到的内容区域的大小，用户可以以滑动或者其他的方式来查看页面其他内容，通过 `window.screen.width` 来获取它的宽度，同样上一张偷来的图，帮助理解。![img](https://raw.githubusercontent.com/lqk9511/gallery/master/blog/3629381303-5aed280720e97_articlex.png)
- **ideal viewport**（理想视区）：在我们理想的状态下面，比如说有一段14 px 的文字，或者是其他的页面内容，无论在什么设备下面都展现出差不多的大小。ideal viewport 并没有一个固定的尺寸，不同的设备拥有有不同的 ideal viewport。所有的 iphone 的ideal viewport宽度都是320px，无论它的屏幕宽度是320还是640，也就是说，在 iphone 中，css 中的320px就代表 iphone 屏幕的宽度。但是安卓设备就比较复杂了，有320px的，有360px的，有384px的等等。
## 如何使用 Viewport
### 利用 meta 标签设置 viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
```
先介绍一下都有什么属性以及意思吧，大家自然就知道这段代码是什么意思了
- `width`：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
- `height`：和 width 相对应，指定高度。
- `initial-scale`：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
- `minimum-scale`：允许用户缩放到的最大比例。
- `maximum-scale`：允许用户缩放到的最小比例。
- `user-scalable`：用户是否可以手动缩放。

所以说上面的那段代码的意思就是：设置页面的 layout viewport 等于 ideal viewport 宽度，初始化的页面缩放比为1，用户最大/最小的缩放比都为1，页面不允许用户手动缩放。
### 代码里面的书写方式
vw单位换算： 视口宽度为 100vw 占满整个视口区域，那么 1vw 相当于占整个视口宽度的1%，所以 1px= 1/375*100 vw 所有的页面元素都可以直接进行计算换算成 vw 单位，但是这样计算和百分比方案计算比较类似，都会比较麻烦。

但是这么麻烦的东西肯定会有工具来解决的 `postcss-px-to-viewport` 这样的话你的代码原来怎么写现在还是怎么写。工具会预处理css，讲 px 单位按照设定的值转换为 vw 单位，同时也要设定一些配置，下面是配合Vue-cli3.0的使用：
```json
// package.json
  ...,
  "devDependencies": {
    ...,
    "postcss-px-to-viewport": "^1.1.0",
    ...
  }
```
```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: '375', // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      // propList: ['*', '!background-image'],
      selectorBlackList: [
        // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        'ignore'
      ],
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false // 允许在媒体查询中转换`px`
      // exclude: /(\/|\\)(node_modules)(\/|\\)/
    }
  }
}
```
代码书写：
![img](https://raw.githubusercontent.com/lqk9511/gallery/master/blog/WechatIMG61.jpeg)
实际页面：
![img](https://raw.githubusercontent.com/lqk9511/gallery/master/blog/WechatIMG60.png)
写到这里基本上都结束了，就可以开心的使用了。
## 参考文章
这两个本来都是不收费的（对现在是付费的）
- [https://www.w3cplus.com/mobile/vw-layout-in-vue.html](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)
- [https://www.w3cplus.com/css/vw-for-layout.html](https://www.w3cplus.com/css/vw-for-layout.html)