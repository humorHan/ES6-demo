/**
 * Created by humorHan on 2018/1/5.
 */
let [a, b] = [1, 2];
console.log(a);   //a
console.log(b);   //b

/*数据结果要一样*/
try {
    let [c] = {}; //
} catch (e) {
    console.log(e);   // ERROR Invalid attempt to destructure non-iterable instance
}

/*未结构成功的变量值是undefined*/
let [d, e] = [1];
console.log(d);  //1
console.log(e);  //undefined

/*循序有默认值*/
let [f, g = 1] = [1];
console.log(f);  //1
console.log(g);  //1

/*默认值生效的条件是，新赋值的对象的属性值严格等于undefined。*/
let [h = 1] = [undefined];
let [i = 1] = [null];

console.log(h);   //1
console.log(i);   //null

/*字符串结构*/
const [j, k] = 'hello';
console.log(j);  //h
console.log(k);  //e

/*结构含有length属性的变量*/
let {length: len} = 'hello';
console.log(len);

/*结构s数值he 布尔值*/
let {toString: s} = 123;
console.log(s === Number.prototype.toString); // true

/*函数参数的解构赋值*/
function add([x, y, z = 3]) {
    return x + y + z;
}

console.log(add([1, 2])); // 6

/*超级用途  交换值*/
let [x, y] = [1, 2];
[x, y] = [y, x];

/*提取 JSON 数据*/
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data: number } = jsonData;
console.log(id, status, number);



/*TODO 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。*/
let { foo: baz } = { foo: "aaa", bar: "bbb" };  //等价于var _foo$bar = { foo: "aaa", bar: "bbb" },baz = _foo$bar.foo;
console.log(baz); // "aaa"
console.log(foo); // error: foo is not defined