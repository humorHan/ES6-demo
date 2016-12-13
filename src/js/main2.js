import asd from '../dep/test2.js';     // ***** 如果子组件中有default 那么import的时候可以没有{} 加上后反而取不到组件值 【可能是类似取对象和取值得原理】 因为是唯一值啦
console.log(asd);                      //且 因为是如果想 import和export的名称不一样的话，那么设置default就可以了

import {name2} from '../dep/test2.js'; //在同一个js中可以引用同一个js多次
console.log(name2);

import {name3 as changeCatName} from '../dep/test2.js';  // 当然可以{default as name}来取到组件default的值再重命名
console.log(changeCatName);

import {changeName} from '../dep/test2.js';
console.log(changeName);



//***** 另外顶部this是指向undefined  并不是window