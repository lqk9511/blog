// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
var arrTest = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10
];

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

const isTypeOf = (obj, type) =>
  Object.prototype.toString.call(obj).slice(8, -1) === typeMap[type];

const checkEvery = element => {
  // 判断逻辑都可以写在这里
  if (isTypeOf(element, "array")) return true;
  return false;
};

// - 数组扁平化
function filterArray(target) {
  let result = [];
  function flatArray(tar) {
    for (let index = 0; index < tar.length; index++) {
      const element = tar[index];
      // 如果 element 还是一个数组
      if (checkEvery(element)) {
        flatArray(element);
      } else {
        result.push(element);
      }
    }
  }
  flatArray(target);
  return result;
}

console.log(filterArray(arrTest));
// - 去除重复部分数据
// 修改上面的代码
function filterArray(target) {
  // 使用 set
  let result = new Set();
  function flatArray(tar) {
    for (let index = 0; index < tar.length; index++) {
      const element = tar[index];
      // 如果 element 还是一个数组
      if (checkEvery(element)) {
        flatArray(element);
      } else {
        // 修改为set add
        result.add(element);
      }
    }
  }
  flatArray(target);
  return [...result];
}

console.log(filterArray(arrTest));

// - 升序

function filterArray(target) {
  // 使用 set
  let result = new Set();
  function flatArray(tar) {
    for (let index = 0; index < tar.length; index++) {
      const element = tar[index];
      // 如果 element 还是一个数组
      if (checkEvery(element)) {
        flatArray(element);
      } else {
        // 修改为set add
        result.add(element);
      }
    }
  }
  flatArray(target);
  // 升序
  return [...result].sort((a, b) => a - b);
}

console.log(filterArray(arrTest));

// 一行代码风
// 但是在我本地 node v10.16.0 不支持 Array.flat() 方法
// 需要去浏览器中尝试
const filterArray2 = target =>
  Array.from(new Set(target.flat(Infinity))).sort((a, b) => a - b);

console.log(filterArray2(arrTest));
