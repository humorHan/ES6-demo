/**
 * Created by humorHan on 2017/8/3.
 */
/* 知识点提示
 * Super 可以使函数可以使对象
     1. 如果是函数的话必须是出现在子类contructor中(因为子类没有this(实例)，相当于是子类中实现  父类.prototype.constructor.call(this))，
     2. 如果是对象，有两种情况，
        a. 普通方法中指向父类的原型对象
        b. 在静态方法中指向父类。

   静态方法： 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
   this指向实例
 **/

class A{
    constructor(){
        this.a = 1;
    }
    say(){
        console.log(this.a);
    }
}
class B extends A{
    constructor(){
        super();
        this.a = 2;
    }
}
let b = new B();
b.say();
let a = new A();
a.say();