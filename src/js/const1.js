/**
 * Created by humorHan on 16/12/16.
 */
const PI = 3.1415;
PI // 3.1415

//PI = 3;   //Assignment to constant variable => 常量你也敢改，咋不上天？

//const foo;  // SyntaxError: Missing initializer in const declaration =>常量不能改 所以一开始就要给个值啊   要不还不报错？

if (true) {
    const MAX = 5;
}

//MAX // Uncaught ReferenceError: MAX is not defined   => const的作用域与let命令相同：只在声明所在的块级作用域内有效。

if (true) {
    //console.log(MAX); // ReferenceError  => const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
    const MAX = 5;
}

var message = "Hello!";
let age = 25;

// 以下两行都会报错  =>  常量也不可重复声明
//const message = "Goodbye!";
//const age = 30;

const foo = {
    prop: '123'
};

foo.prop // 123

//foo = {}; // TypeError: "foo" is read-only  又在修改常量了？

//BUT 可以给常量对象添加属性  因为 常量foo储存的是一个<<地址>>，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的 （增删改<属性>可以）>>
const aaa = [];
aaa.push('Hello'); // 可执行
aaa.length = 0;    // 可执行

//扩展： 如果真的想将对象冻结，应该使用Object.freeze方法。

const fooo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
fooo.prop = 123;
//对象彻底冻结函数
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, value) => {
        if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
};


//let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
var asd = 1;
window.asd // 1
let aa = 1;
window.aa // undefined