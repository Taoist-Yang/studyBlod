// 循环  遍历  迭代

//循环： 语言层面上的语法 -> 重复执行一段程序的方案
//遍历： 业务层面上的做法 -> 观察活着获取集合中的元素的一种做法
//迭代： 实现层面上的概念 -> 实现遍历的底层方案其实就是迭代

var arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i); //重复执行这段程序
// }

//ECMAScript3 -> 没有正对可迭代对象的具体的遍历方法

//ECMAScript5 -> 7个专门针对数组的遍历方法
//ECMAScript 5 -> for in 对象的遍历方法

// arr.forEach(function (item, index, array) {
//     console.log(item, index, array)
// })

//forEach map filter reduce reduceRight some erery

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for...in
// for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性。

// var arr = [1, 2, 3];
//
// var m = new Map([[{a: 1}, 1],[{b: 2}, 2], [{c: 3}, 3]])
// var s = new Set(['a', 'c', 'b'])
//类数组
// var arr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3,
//     slice: Array.prototype.slice,
//     splice: Array.prototype.splice,
//     push: Array.prototype.push
// }

// for (var key in arr) {
//     console.log(key, arr[key]);
// }

// for (var key in obj) {
//     console.log(key, obj[key]);
//     //找的是对象的属性键名
// }

// console.log(m)
// for (let k in m) {
//     console.log(k)
// }
// for (let k of m) {
//     console.log(k)
// }
// console.log(s)
// for (let k in s) {
//     console.log(k)
// }

//for of
//for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句


//生成器 -> 生成 返回一个迭代器
// function * generator (arr) {
//     for(let v of arr) {
//         yield v
//     }
// }
//
// const iterator = generator(arr);
//
// console.log(iterator.next().value)
// console.log(iterator.next().done)
// console.log(iterator.next())
// console.log(iterator.next())

function generator (arr) {
    let nextIndex = 0;

    return {
        next () {
            /*
            * {
            *   value: ?,
            *   done: ?
            * }*/
            return nextIndex < arr.length
            ?
                {
                    value: arr[nextIndex++], done: false
                }
            :
                {value: undefined, done: true}
        }
    }
}

// const iterator = generator(arr);
//
// console.log(iterator.next().value)
// console.log(iterator.next().done)
// console.log(iterator.next())
// console.log(iterator.next())

const o = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
}

Object.prototype[Symbol.iterator] = iterator;

function iterator () {
    var index = 0;
    var _this = this;

    return {
        next () {
            return index < _this.length
            ?
                {value: _this[index ++], done: false}
            :
                {value: undefined, done: true}
        }
    }
}

for (let v of o) {
    console.log(v)
}


