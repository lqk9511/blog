// console.log(1);
// setTimeout(() => {
//   console.log("setTimeout 3");
// });
// console.log(2);

// 第一次宏任务开始执行
// console.log(1);
// new Promise((resolve, reject) => {
//   console.log(2);
//   resolve();
//   console.log(3);
// }).then(() => {
//   // 第一次宏任务 附带的微任务
//   // 所以要在第一次宏任务走完的时候要执行掉
//   console.log(5);
// });
// // 第二次宏任务注册
// // 推入宏任务队列
// setTimeout(() => {
//   console.log(6);
// });
// console.log(4);

//
// 被添加入下一次宏任务队列
setTimeout(_ => console.log(6));

async function test() {
  console.log(1);
  // 我的理解是
  // 遇到 await 先执行其同步内容
  // 让出执行线程（跳出当前任务）同时推入微任务队列  继续往下执行
  // 执行完之后 回来继续执行
  await new Promise((resolve, reject) => {
    console.log(2);
    resolve();
  }).then(_ => console.log(4));
  // 这里 5 没有进入微任务队列 只不是相当于被挂起了
  console.log(5);
}

test();
test();

console.log(3);
// 如果执行一次 test 函数  结果 => 123456
// 如果执行两次 test 函数  结果 => 1212344556
