// function print(n) {
//   ;(function (i) {
//     setTimeout(
//       () => {
//         console.log(i)
//       },
//       1,
//       Math.floor(Math.random() * 1000)
//     )
//   })(n)
// }
// for (var i = 0; i < 100; i++) {
//   print(i)
// }

function print(n) {
  setTimeout(
    ((i) => {
      console.log(i)
      return () => {}
    })(n),
    Math.floor(Math.random() * 1000)
  )
}
for (var i = 0; i < 100; i++) {
  print(i)
}
