/**
 * Created by humorHan on 16/12/16.
 */
var s = 1;
// let s = 1;  //Duplicate declaration "s" => 不可重复声明变量


for (let i = 0; i < 10; i++) {
    console.log(i);   //0 1 2 3 4 5 6 7 8 9
}
//console.log(i);  // i is not defined  => 局部作用域


/***
 *  下面两组
 *  用let定义变量  console.log()是5说明这时候i是局部作用域的 ;
 *  用var定义变量  console.log()是10说明这时候i是全局作用域的 每次声明b[i]都会更新i的值;
 */
var a = {};
for (let i = 0; i < 10; i++) {
    a[i] = function(){
        return i;
    }
}
console.log(a[5]());   //5

var b = {};
for (var i = 0; i < 10; i++) {
    b[i] = function(){
        return i;
    }
}
console.log(i);        //10
console.log(b[5]());   //10


console.log(foo); // 输出undefined         => 前端常常设计到的变量声明提前(PS: 不知道js变量声明提前的童鞋需要抓紧去补一下了 这个还是蛮重要的)
//console.log(bar); // 报错bar is not defined  => let声明的变量不会变量声明提前
var foo = 2;
//let bar = 2;


//有上面这么多好处  那let就万能咯？？？   当然也是有可能存在坑的
// 块级作用域下使用let，则必须在声明之后使用该变量 否则会报错  ES6中称为<<暂时性死区>>

var tmp = 123;
if (true) {
    console.log(tmp);     // tmp is not defined  => <<<>>>>
    let tmp;
    console.log(tmp);     // 如果注释掉上边一个console 那这里不会报错  而是输出undefined （这是正常的，因为访问的是局部作用域下的tmp，要习惯这个思维哟~）
}

// <<typeof>>
//所以由上边的例子引出另外一个问题
//typeof操作符在let出现以前是绝对安全的，但是有了let就未必了
typeof x; // 报错 x is not defined
let x;
//而对于一个未声明的变量则结果是"undefined"
typeof undeclared_variable // "undefined"  （众所周知这并不是报错  但是程序中使用该变量的时候肯定是报出未定义错误滴）


// 块级作用域的又例子
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);   // 5
}


// 关于ES6中函数在块级作用域下（目前不会当成let定义函数  还是相当于var定义）的情况这里不赘述（因为ES6不限制浏览器厂商实现）
// 当然为了代码的整洁性 可维护性 以及避免不必要的错误我还是建议不在ES6环境if中定义函数