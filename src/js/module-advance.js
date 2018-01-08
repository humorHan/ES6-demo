import asd from '../dep/test2.js';     // ***** 如果子组件中有default 那么import的时候可以没有{} 加上后反而取不到组件值 【可能是类似取对象和取值得原理】 因为是唯一值啦
console.log(asd);                      //且 因为是如果想 import和export的名称不一样的话，那么设置default就可以了

import {name2} from '../dep/test2.js'; //在同一个js中可以引用同一个js多次
console.log(name2);

import {name3 as changeCatName} from '../dep/test2.js';  // 当然可以{default as name}来取到组件default的值再重命名
console.log(changeCatName);

import {changeName} from '../dep/test2.js';
console.log(changeName);

import * as all from '../dep/test2.js';
console.log(all);
console.log(all.name1);        //undefined
console.log(all.default);      //12  -- 也就是name1的值，所以其实export default其实是暴露一个叫default的变量

/*
import aaa,{name2, name3} from '../dep/test2.js';
console.log(name2);*/



/**
 * 区别-TODO ******重要
 * 为了方便描述，假设a.js引用了test.js
 * 1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。(所以是read-only)
 *    test.js中用require暴露属性，a中引用的话，得到的不是实时的，当然如果暴露function，function中是可以得到实时的值的，
 *    而import export方式得到的都是实时的
 * 2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
 *    所以动态引入：require(name + '.js')是可以的，import不行
 */
