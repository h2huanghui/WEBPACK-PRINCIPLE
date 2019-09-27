let obj = Object.create(null)
if (!Object.create) {
    Object.create = function (proto) {
        function F() {
            F.prototype = proto;
            return new F(); //实例的 __proto__ = proto
        }
    }
}

console.log(obj)
let obj2 = new Object()
console.log(obj2)