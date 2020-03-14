# web 中文件下载

直接是 url 的下载

```js
export function downloadURL(url, name = '') {
  const link = document.createElement('a')
  link.download = name
  link.href = url
  if ('download' in document.createElement('a')) {
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } else {
    // 对不支持download进行兼容
    click(link)
  }
}

// clone https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    var evt = document.createEvent('MouseEvents')
    evt.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null
    )
    node.dispatchEvent(evt)
  }
}
```

如果我们得到的二进制文件流

```js
// 我们通过设置 {responseType: 'arraybuffer'}

export async function downloadFile(blob) {
  return new Promise(async (resolve, reject) => {
    try {
      const objectUrl = URL.createObjectURL(blob)
      downloadURL(objectUrl, fileName)
      // 手动标记用于内存回收，防止内存泄漏
      URL.revokeObjectURL(url)
      resolve(true)
    } catch (err) {
      console.error(err)
      reject(err)
    }
  })
}
```
