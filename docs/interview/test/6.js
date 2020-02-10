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

const dfsDeepCloneResult = dfsDeepClone(testTarget);
console.log(JSON.stringify(dfsDeepCloneResult));
