const typeMap = {
  array: "Array",
  object: "Object",
  function: "Function",
  string: "String",
  null: "Null",
  undefined: "Undefined",
  boolean: "Boolean",
  number: "Number"
};
const isTypeof = (obj, type) =>
  Object.prototype.toString.call(obj).slice(8, -1) === typeMap[type];

function getEmpty(o) {
  // console.log(o); // 可以看到每次循环的值
  if (isTypeof(o, "object")) return {};
  if (isTypeof(o, "array")) return [];
  return o;
}

const testTarget = {
  name: "jeff",
  tree: {
    value: "root",
    children: [
      {
        value: "A",
        children: [
          { value: "A-a", children: [{ value: "A-a-1" }, { value: "A-a-2" }] },
          { value: "A-b", children: [{ value: "A-b-1" }, { value: "A-b-2" }] }
        ]
      },
      {
        value: "B",
        children: [
          { value: "B-a", children: [{ value: "B-a-1" }, { value: "B-a-2" }] },
          { value: "B-b", children: [{ value: "B-b-1" }, { value: "B-b-2" }] }
        ]
      },
      {
        value: "C",
        children: [
          { value: "C-a", children: [{ value: "C-a-1" }, { value: "C-a-2" }] },
          { value: "C-b", children: [{ value: "C-b-1" }, { value: "C-b-2" }] }
        ]
      }
    ]
  },
  deepQuote: null
};

// 如果有循环引用的关系，就是环形引用
// testTarget.deepQuote = testTarget;

// 深度优先思想
// 第二个参数解决循环引用
function dfsDeepClone(target, verifyArr = []) {
  let result = null;

  if (isTypeof(target, "object")) {
    result = {};
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        const element = target[key];
        // console.log(element);
        // 验证是否遍历过这个对象
        if (verifyArr.includes(element)) {
          result[key] = element;
        } else {
          verifyArr.push(element);
          // 这里记得把 verifyArr 数组调用时候带入
          result[key] = dfsDeepClone(element, verifyArr);
        }
      }
    }
  } else if (isTypeof(target, "array")) {
    result = [];
    for (let index = 0; index < target.length; index++) {
      const element = target[index];
      // console.log(element);
      // 验证是否遍历过这个对象
      if (verifyArr.includes(element)) {
        result.push(element);
      } else {
        verifyArr.push(element);
        // 这里记得把 verifyArr 数组调用时候带入
        result.push(dfsDeepClone(element, verifyArr));
      }
    }
  } else if (isTypeof(target, "function")) {
    result = Function(
      `"use strict"; return (function() {return ${target.toString()}})`
    );
  } else {
    result = target;
  }

  return result;
}

function dfsDeepClone2(target) {
  let result = getEmpty(target); // 返回值
  let stack = []; // 循环队列
  let recordMap = new Map();
  if (target !== result) {
    // 说明是引用类型
    stack.push([target, result]);
    recordMap.set(target, result);
  }

  while (stack.length) {
    let [tar, res] = stack.pop();
    for (const key in tar) {
      let element = tar[key];
      // 判断是否是环数据
      if (recordMap.has(element)) {
        res[key] = recordMap.get(element);
        continue;
      }
      // 赋值 getEmpty 里面会返回不是引用类型的值
      res[key] = getEmpty(tar[key]);
      // 判断结果值 推入队列
      if (res[key] !== tar[key]) {
        stack.push([tar[key], res[key]]);
        // 添加记录
        recordMap.set(tar[key], res[key]);
      }
    }
  }
  return result;
}

// const dfsDeepCloneResult = dfsDeepClone2(testTarget);
// console.log(JSON.stringify(dfsDeepCloneResult));

// 广度优先思想
function bfsDeepClone(target) {
  let result = getEmpty(target); // 返回值
  let queue = []; // 循环队列
  let recordMap = new Map(); // 记录循环引用变量 解决环数据问题
  if (result !== target) {
    queue.push([target, result]);
    recordMap.set(target, result);
  }

  while (queue.length) {
    let [tar, res] = queue.shift();
    for (const key in tar) {
      let element = tar[key];
      // 判断环引用
      if (recordMap.has(element)) {
        res[key] = recordMap.get(element);
        continue;
      }
      // 判断目标值
      res[key] = getEmpty(tar[key]);
      // 如果得到结果值跟目标值不一样 添加队列 循环
      if (res[key] !== tar[key]) {
        queue.push([tar[key], res[key]]);
        // 添加记录
        recordMap.set(tar[key], res[key]);
      }
    }
  }
  return result;
}

const bfsDeepCloneResult = bfsDeepClone(testTarget);
console.log(JSON.stringify(bfsDeepCloneResult));
