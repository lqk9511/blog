## 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

&emsp;&emsp;一般人有相关开发经验的童鞋，看到题目下意识的就会想到 `key` 应该就是确定 dom 节点唯一的标识。但是具体呢？

&emsp;&emsp;`Vue` 的官网是这么描述的：

> `key` 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。[列表渲染-key ](https://cn.vuejs.org/v2/guide/list.html#%E7%BB%B4%E6%8A%A4%E7%8A%B6%E6%80%81) | [Api-key](https://cn.vuejs.org/v2/api/#key)

&emsp;&emsp;`React` 的官网是这么描述的：

> `key` 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。一个元素的 `key` 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 `key`。如果列表项目的顺序可能会变化，我们不建议使用索引来用作 `key` 值，因为这样做会导致性能变差，还可能引起组件状态的问题。如果你选择不指定显式的 `key` 值，那么 React 将默认使用索引用作为列表项目的 `key` 值。[列表&Key](https://zh-hans.reactjs.org/docs/lists-and-keys.html#keys) | [深入解析 key 为什么是必须的](https://zh-hans.reactjs.org/docs/reconciliation.html#recursing-on-children)

- 为什么要在列表组件里面写 key

  - 给每个 vnode 添加一个唯一的标识，使得 diff 算法能更快，更准确的拿到 oldVnode 中对应 vnode

- 作用

  - 避免 diff 算法中 sameNode 函数 `a.key === b.key` 带来的 node 就地复用的问题
  - 相对来说提高了遍历速度

> vue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中（建议先了解一下diff算法过程）。
在交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。[原地址](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)

Vue 中部分源码：

```js
// vue项目  src/core/vdom/patch.js  -488行
// 以下是为了阅读性进行格式化后的代码

// oldCh 是一个旧虚拟节点数组
if (isUndef(oldKeyToIdx)) {
  oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
}
if (isDef(newStartVnode.key)) {
  // map 方式获取
  idxInOld = oldKeyToIdx[newStartVnode.key];
} else {
  // 遍历方式获取
  idxInOld = findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
}
```
创建map函数
``` js
function createKeyToOldIdx (children, beginIdx, endIdx) {
  let i, key
  const map = {}
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key
    if (isDef(key)) map[key] = i
  }
  return map
}
```
遍历寻找
``` js
// sameVnode 是对比新旧节点是否相同的函数
 function findIdxInOld (node, oldCh, start, end) {
    for (let i = start; i < end; i++) {
      const c = oldCh[i]
      
      if (isDef(c) && sameVnode(node, c)) return i
    }
  }
```

key 的运用也是区分业务场景的，如果是单纯的静态列表的展示，并且没有什么列表项状态什么改变，我们称之为简单模版。[这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出](https://cn.vuejs.org/v2/guide/list.html#%E7%BB%B4%E6%8A%A4%E7%8A%B6%E6%80%81)。基于这个前提下，可以更有效的复用节点，diff速度来看也是不带key更加快速的，因为带key在增删节点上有耗时。这就是vue文档所说的默认模式。

但是我们通常的业务场景往往是复杂的，多变的，这就需要我们去增加 key 来确保 vnode 的唯一性，保证业务层面的正确性。