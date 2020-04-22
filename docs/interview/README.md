# 前端面试题

刷题，同时丰富自己。每日一题，或者几题，提神又醒脑 🧠。

## 1-10

1.  [写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](./question/1.md)
2.  [`['1', '2', '3'].map(parseInt)` what & why ?](./question/2.md)
3.  [什么是防抖和节流？有什么区别？如何实现？](./question/3.md)
4.  [介绍下 Set、Map、WeakSet 和 WeakMap 的区别？](./question/4.md)
5.  [介绍下深度优先遍历和广度优先遍历，如何实现？](./question/5.md)
6.  [请分别用深度优先思想和广度优先思想实现一个拷贝函数？](./question/6.md)
7.  [ES5/ES6 的继承除了写法以外还有什么区别？](./question/7.md)
8.  [setTimeout、Promise、Async/Await 的区别？](./question/8.md)
9.  [Async/Await 如何通过同步的方式实现异步？](./question/9.md)
10. [异步笔试题](./question/10.md)

---

## 11-20

11. [算法手写题](./question/11.md)
12. [JS 异步解决方案的发展历程以及优缺点](./question/12.md)
13. [Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？](./question/13.md)
14. [情人节福利题，如何实现一个 new](./question/14.md)
15. [简单讲解一下 http2 的多路复用](./question/15.md)
16. [谈谈你对 TCP 三次握手和四次挥手的理解](./question/16.md)
17. [A、B 机器正常连接后，B 机器突然重启，问 A 此时处于 TCP 什么状态?](./question/17.md)
18. [React 中 setState 什么时候是同步的，什么时候是异步的？](./question/18.md)
19. [React setState 笔试题，下面的代码输出什么？](./question/19.md)
20. [介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？](./question/20.md)

---

## 21-30

21. [有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣](./question/21.md)
22. [介绍下重绘和回流（Repaint & Reflow），以及如何进行优化](./question/22.md)
23. [介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景](./question/23.md)
24. [聊聊 Redux 和 Vuex 的设计思想](./question/24.md)
25. [说说浏览器和 Node 事件循环的区别](./question/25.md)
26. [介绍模块化发展历程](./question/26.md)
27. [全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？](./question/27.md)
28. [cookie 和 token 都存放在 header 中，为什么不会劫持 token？](./question/28.md)
29. [聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的](./question/29.md)
30. [两个数组合并成一个数组](./question/30.md)

---

## 31-40

31. [改造下面的代码，使之输出 0 - 9，写出你能想到的所有解法](./question/31.md)

    ```js
    for (var i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log(i)
      }, 1000)
    }
    ```

32. [介绍一下 http 常用状态码](./question/32.md)
33. [Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。](./question/33.md)
34. [下面的代码打印什么内容，为什么？](./question/34.md)

    ```js
    var b = 10
    ;(function b() {
      b = 20
      console.log(b)
    })()
    ```

35. [简单改造下面的代码，使之分别打印 10 和 20。](./question/35.md)

    ```js
    var b = 10
    ;(function b() {
      b = 20
      console.log(b)
    })()
    ```

36. [聊聊浏览器读取缓存策略](./question/36.md)
37. [使用迭代的方式实现 flatten 函数](./question/37.md)
38. [为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？](./question/38.md)
39. [下面代码中 a 在什么情况下会打印 1？](./question/39.md)

    ```js
    var a = ?;
    if(a == 1 && a == 2 && a == 3){
      console.log(1);
    }
    ```

40. [介绍下 BFC 及其应用](./question/40.md)

---

## 41-50

41. [在 Vue 中，子组件为何不可以修改父组件传递的 Prop](./question/41.md)

    如果修改了，Vue 是如何监控到属性的修改并给出警告的。

42. [下面代码输出什么？](./question/42.md)

    ```js
    var a = 10
    ;(function () {
      console.log(a)
      a = 5
      console.log(window.a)
      var a = 20
      console.log(a)
    })()
    ```

43. [实现一个 sleep 函数](./question/43.md)

    比如 sleep(1000) 意味着等待 1000 毫秒，可从 Promise、Generator、Async/Await 等角度实现

44. [使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果](./question/44.md)

45. [介绍 HTTPS 握手过程](./question/45.md)

46. [HTTPS 握手过程中，客户端如何验证证书的合法性](./question/46.md)

47. [输出以下代码执行的结果并解释为什么](./question/47.md)

    ```js
    var obj = {
      '2': 3,
      '3': 4,
      length: 2,
      splice: Array.prototype.splice,
      push: Array.prototype.push,
    }
    obj.push(1)
    obj.push(2)
    console.log(obj)
    ```

48. [双向绑定和 vuex 是否冲突](./question/48.md)

49. [call 和 apply 的区别是什么，哪个性能更好一些](./question/49.md)

50. [为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？](./question/50.md)

---

## 51-60

51. [实现 (5).add(3).minus(2) 功能](./question/51.md)

52. [Vue 的响应式原理中 Object.defineProperty 有什么缺陷？](./question/52.md)
    为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？

53. [怎么让一个 div 水平垂直居中](./question/53.md)

54. [输出以下代码的执行结果并解释为什么](./question/54.md)

    ```js
    var a = { n: 1 }
    var b = a
    a.x = a = { n: 2 }

    console.log(a.x)
    console.log(b.x)
    ```

55. [冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？](./question/55.md)

56. [某公司 1 到 12 月份的销售额存在一个对象里面](./question/56.md)

    如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。

57. [要求设计 LazyMan 类，实现以下功能](./question/57.md)

58. [分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景](./question/58.md)

59. [箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？](./question/59.md)

60. [给定两个数组，写一个方法来计算它们的交集](./question/60.md)

    > 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

---

## 61-70

61. [已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。](./question/61.md)

    > `<img src="1.jpg" style="width:480px!important;">`

62. [介绍下如何实现 token 加密](./question/62.md)

63. [redux 中的 reducer 为什么最好是纯函数](./question/63.md)

64. [模拟实现一个 Promise.finally](./question/64.md)

65. [`a.b.c.d` 和 `a['b']['c']['d']`，哪个性能更高？](./question/65.md)

66. [ES6 代码转成 ES5 代码的实现思路是什么](./question/66.md)

67. [数组编程题](./question/67.md)

> 随机生成一个长度为 10 的整数类型的数组，例如 `[2, 10, 3, 4, 5, 11, 10, 11, 20]`，将其排列成一个新数组，要求新数组形式如下，例如 `[[2, 3, 4, 5], [10, 11], [20]]`。

---

> 部分题目来自于[前端 100 问](https://juejin.im/post/5d23e750f265da1b855c7bbe)
