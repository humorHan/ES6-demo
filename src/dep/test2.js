/**
 * Created by humorHan on 16/12/13.
 */
/** 不能直接export一个数值或者伪数值
 *  1. 可以export var num = 1;
 *  2. 可以export function callback() {}
 * */

/** 但是可以
 *  export {num, callback}
 * */

/** 或者你可以使用default,但是请记着一个module只能有一个default
 * 1. export default function(){}
 * 2. export default function callback(){}
 * 3. export default num;
 * */

/** export default后不能跟  变量声明语句
 *  export default var a = 1; 报错
 * */


var name1 = 12;
export default name1;

var name2 = 'Mick';
export {name2};

var name3 = 'cat';
export {name3};

var name4 = 'dog';
export {name4 as changeName}