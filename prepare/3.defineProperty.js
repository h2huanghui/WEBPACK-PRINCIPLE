let ageValue;
let obj = {};
Object.defineProperty(obj, "age", {
    // value:10
    get() {
        return ageValue;
    },
    set(newValue) {
        ageValue = newValue;
    }
})
// console.log(obj.age)
obj.age = 10
console.log(obj.age)