console.log(Object.prototype.toString.call({ name: 'hh' }))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call(10))
console.log(Object.prototype.toString.call(true))
let useExports = {};
Object.defineProperty(useExports, Symbol.toStringTag, {
    writable: false,
    configurable: false,
    value: 'Module'
})
console.log(Object.prototype.toString.call(useExports)) //自定义对象属性

