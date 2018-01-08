//require("main.scss");

import {num, name, hello, people, Animal, foo, haha} from '../dep/test.js';        // ***** 修改名字得不到组件的值 => 名称必须对应
                                                                            // ***** 如果子组件中没有default 那么import的时候必须有{}
console.log(num, name);  // => 可以传递变量

hello();    // => 传递方法

console.log(people);  // =>  传递对象
people.eat();

console.log(Animal);
var dog = new Animal('dog');   // => 传递通过prototype拓展的方法的对象
console.log(dog);
dog.sayHello();

/*TODO 组件的值是动态绑定的，可以实时得到组件的值  因为他跟common规范不同  它输出的是值得引用*/
console.log(foo);             //***** => 组件的值是动态绑定的，可以实时得到组件的值  因为他跟common规范不同  它输出的是值得引用
setTimeout(() => console.log(foo), 1000);

/*暴露的如果是属性  那么值不是实时的，暴露的方法抛出属性 才是实时的*/
var sss = require('../dep/test3');
console.log(sss.a);
sss.init();
setTimeout(function(){
    console.log(sss.a);    //{}
    sss.init()             //{name:12}
}, 2000);

var s = 1;
setTimeout(() => {       // ***** => 箭头函数 没有大括号会把 逗号前箭头之后的部分当做返回值  有大括号的只能手动加上return
    s = 'asd';
}, 1000);

// ***** 另外 export是不能放在块级作用域的  => SyntaxError
