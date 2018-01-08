/**
 * Created by humorHan on 2018/1/5.
 */
/*扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。*/
console.log(...[1, 2, 3]);// 1,2,3

function push(array, ...items) {
    array.push(...items);
}

var arr1 = [1,2,3];
var arr2 = [4,5];
var arr3 = [6];
console.log([...arr1, ...arr2, ...arr3]);