const TreeRoot = {
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
};

// 递归实现
function myDfs1(root) {
  const result = []; // 存放最终结果
  // 递归方法
  const dfs = target => {
    result.push(target.value); // 添加单个节点自己
    const children = target.children;
    // 检测子节点，存在就递归遍历
    if (children && children.length) {
      children.forEach(element => {
        // 我们可以看每次递归的值
        // 其实就是结果值的节点
        // console.log(element);
        // console.log("----------------------");
        dfs(element);
      });
    }
  };

  dfs(root);
  return result;
}

const myDfs1Result = myDfs1(TreeRoot);
console.log(myDfs1Result);

// 非递归实现
function myDfs2(root) {
  const result = []; // 存放最终返回
  const stack = []; // 存放遍历对象

  if (root) {
    stack.push(root); // 推入处理对象
    while (stack.length) {
      const element = stack.pop();
      result.push(element.value);
      const children = element.children;
      if (children && children.length) {
        for (let index = children.length - 1; index >= 0; index--) {
          // 我们可以看一下堆栈每次被推入的值
          // 其实就是结果值的节点
          // console.log(children[index]);
          // console.log("----------------------");
          stack.push(children[index]);
        }
      }
    }
  }

  return result;
}

const myDfs2Result = myDfs2(TreeRoot);
console.log(myDfs2Result);

function myBfs(root) {
  const result = []; // 存放最终值
  const queue = [];
  if (root) {
    queue.push(root); // 推入队列
    while (queue.length) {
      const elementRoot = queue.shift();
      const children = elementRoot.children;
      result.push(elementRoot.value);
      // 检测字节点，存在添加队列 先进先出
      if (children && children.length) {
        children.forEach(element => {
          // 我们可以看一下队列每次被推入的值
          // 其实就是结果值的节点
          // console.log(element);
          // console.log("----------------------");
          queue.push(element);
        });
      }
    }
  }

  return result;
}

// const myBfsResult = myBfs(TreeRoot);
// console.log(myBfsResult);
