/**
 * Created by humorHan on 16/12/13.
 */
var num = 1;
var name = 'Mike';
function hello() {
    console.log('hello ' + name);
}

var people = {
    name: 'Neal',
    age: '25',
    eat: function () {
        console.log(this.name + '正在吃东西');
    }
};

function Animal(name) {
    this.name = name;
}
Animal.prototype = {
    sayHello: function(){
        console.log('你好 ' + this.name);
    }
};

export var foo = 'bar';
setTimeout(() => foo = 'baz', 1000);  //可以动态修改值  而且会影响调用该组件的值

export {num, name, hello, people, Animal};