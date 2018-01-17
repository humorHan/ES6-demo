/**
 * Created by humorHan on 2018/1/12.
 */
let a = new Set();

console.log(a, typeof a);  //类似数组的对象

let b = new Set([1, 2, 3, 3, 3]);

console.log([...b]); //没有重复数据
console.log(b.size); //size属性代表Set类型数据的长度

/*衍生了数组去重新方式*/
let array = [1, 2, 3, 4, 4, 5, 5];
let c = [...new Set(array)];
console.log(c);

/*TODO*/
let d = NaN;
let e = NaN;
console.log(d === e);  // true 说明Set 内部NaN===NaN的，当然，其他数据类型是不等的

let f = new Set();

f.add({});
console.log(f.size);  // 1

f.add({});
console.log(f.size);  // 2    //说明Set内部两个对象总是不相等的。


/**
 * Set类型的方法
 * add(value)：添加某个值，返回 Set 结构本身。
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * clear()：清除所有成员，没有返回值。
 */

/*Array.from 转换Set为数组*/
const items = new Set([1, 2, 3, 4, 5]);
const array2 = Array.from(items);
console.log(array2);

/**
 * 遍历Set的方法
 * keys()：返回键名的遍历器
 * values()：返回键值的遍历器
 * entries()：返回键值对的遍历器
 * forEach()：使用回调函数遍历每个成员
 */
let g = new Set(['red', 'green', 'blue']);

for (let item of g.keys()) {
    console.log(item);
}


/**
 * TODO WeakSet 和set区别和特点如下--
 * 1. 参数必须是对象---可以接受一个数组或类似数组的对象作为参数--TODO 但是他是对象的元素作为WeakSet的成员！！！！！
 * 2. 弱引用--如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中
 *
 * 因为成员都是弱引用所以不可遍历
 * WeakSet没有size属性
 */