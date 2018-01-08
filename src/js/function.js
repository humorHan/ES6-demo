/**
 * Created by humorHan on 2018/1/5.
 */
/*默认值*/
function f1(name = '通用姓名', age = 2) {
    console.log(name, age);
}
f1();
f1('ZhangSan', 20);

/*参数变量是默认声明的，所以不能用let或const再次声明。*/
function f2(x = 5) {
    //let x = 1; // error
    //const x = 2; // error
}
f2();

/*使用参数默认值时，函数不能有同名参数。*/
/*
 function foo(x, x, y) {
 // ...
 }

 // 报错
 function foo(x, x, y = 1) {
 // ...
 }*/

/*结合解构一起用*/
/*function foo({x, y = 5}) {
 console.log(x, y);
 }

 foo({}) // undefined 5
 foo({x: 1}) // 1 5
 foo({x: 1, y: 2}) // 1 2
 foo() // TypeError: Cannot read property 'x' of undefined*/

/*定义了默认值的参数，应该是函数的尾参数，如果非尾部的参数设置默认值，实际上这个参数是没法省略的。*/
function f(x = 1, y) {
    return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined])
//f(, 1) // 报错
f(undefined, 1) // [1, 1]

/*TODO 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。*/
let xx = 1;

function ff(y = xx) {
    let xx = 2;
    console.log(y);
}

ff(); // 1

/*TODO ES6 引入 rest 参数（形式为...变量名），用于获取函数的[多余参数], rest 参数搭配的变量是一个数组*/
function add(a, ...values) {
    let sum = 0;
    console.log(values);   //【5，3】
    for (var val of values) {
        sum += val;
    }

    return sum;
}

add(2, 5, 3); // 10

/*箭头函数*/
var fff = v => v;

/*TODO 箭头函数中大括号会被解释为代码块 所以想返回对象的嘛需要加上一对括号*/
let getTempItem = id => ({id: id, name: "Temp"});

/**
 *
 （1）函数体内的this对象，就是 箭头函数 定义时所在的对象，而不是使用时所在的对象。

 （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

 （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

 （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
 *
 */

function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

var id = 21;

foo.call({id: 42});
// id: 42


/*嵌套*/
let insert = (value) => ({
    into: (array) => ({
        after: (afterValue) => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});