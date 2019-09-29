(function (modules) {
  var installedModules = {}
  var installedChunks = { main: 0 }
  function webpackJsonpCallback(data) {
    let chunkIds = data[0]
    let moreModules = data[1]
    let resolves = []
    for (let i = 0; i < chunkIds.length; i++) {
      let chunckId = chunkIds[i]
      resolves.push(installedChunks[chunckId][0]) //installedChunks[chunckId] = [resolve,reject,promise]
      installedChunks[chunckId] = 0 //0表示已经加载成功
    }
    //合并modules
    for (let moduleId in moreModules) {
      modules[moduleId] = moreModules[moduleId]
    }
    while (resolves.length > 0) //数组的shift()表示去除第一个元素(第一个resolve方法)
      resolves.shift()()
  }

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId]
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    }
    //第一个参数传this指针,后面是参数 在module.exports这个对象的作用域中调用modules[moduleId]对应的方法
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    module.l = true
    return module.exports //模块的导出对象
  }
  //mode用二进制来判断 权限7 111 可读可写可执行
  __webpack_require__.t = function (value,mode) { 
    value = __webpack_require__(value)
    let ns = Object.create(null)
    Object.defineProperty(ns, '__esModule', { value: true }) //这是一个esModule
    Object.defineProperty(ns, 'default', { value })
    return ns; //{ __esModule:true,default: 'title'}
  }

  __webpack_require__.e = function (chunkId) { //title
    let promises = []; //先声明一个promise
    let installChunkData = installedChunks[chunkId] //取得老的代码数据
    let promise = new Promise(function (resolve, reject) {
      installChunkData = installedChunks[chunkId] = [resolve, reject] //installChunkData有两个参数,分别是resolve和reject
    }) //如果调用了resolve方法,则此promise会变成成功态
    installChunkData[2] = promise //installChunkData第三个参数是promise installChunkData=[resolve,reject,promise]

    var script = document.createElement('script') //创建一个脚本
    script.src = chunkId + '.bundle.js' //脚本的路径
    document.head.appendChild(script) //插入脚本
    return Promise.all(promises)
  }
  var jsonArray = (window["webpackJsonp"] = window["webpackJsonp"] || [])
  //jsonArray=window["webpackJsonp"]=[] 第一次执行
  var oldJsonpFunction = jsonArray.push.bind(jsonArray) //绑定this,不管谁调用oldJsonpFunction方法,this都指向jsonArray
  var parentJsonFunction = oldJsonpFunction //老数组的push方法存储一下
  //重写jsonArray的push方法,重置赋值为webpackJsonpCallback
  jsonArray.push = webpackJsonpCallback

  return __webpack_require__('./src/index.js')

})({
  './src/index.js': (function (module, exports, __webpack_require__) {
    let button = document.createElement('button')
    button.innerHTML = 'Click me'
    button.addEventListener('click', () => {
      __webpack_require__
        .e("title")
        .then(__webpack_require__.t.bind(null, "./src/title.js", 7))
        .then(result => { //{ __esModule:true,default: 'title'}
          console.log(result.default)
        })
    })
    document.body.appendChild(button)

  })
})