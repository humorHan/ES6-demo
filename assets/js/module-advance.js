webpackJsonp([3,5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _test = __webpack_require__(67);
	
	var _test2 = _interopRequireDefault(_test);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ***** 如果子组件中有default 那么import的时候可以没有{} 加上后反而取不到组件值 【可能是类似取对象和取值得原理】 因为是唯一值啦
	console.log(_test2.default); //且 因为是如果想 import和export的名称不一样的话，那么设置default就可以了
	
	//在同一个js中可以引用同一个js多次
	console.log(_test.name2);
	
	// 当然可以{default as name}来取到组件default的值再重命名
	console.log(_test.name3);
	
	console.log(_test.changeName);
	
	//***** 另外顶部this是指向undefined  并不是window

/***/ },

/***/ 67:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	exports.default = name1;
	
	
	var name2 = 'Mick';
	exports.name2 = name2;
	
	
	var name3 = 'cat';
	exports.name3 = name3;
	
	
	var name4 = 'dog';
	exports.changeName = name4;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlLWFkdmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC90ZXN0Mi5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibmFtZTEiLCJuYW1lMiIsIm5hbWUzIiwibmFtZTQiLCJjaGFuZ2VOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUF1QztBQUN2Q0EsU0FBUUMsR0FBUixpQixDQUF1Qzs7QUFFQTtBQUN2Q0QsU0FBUUMsR0FBUjs7QUFFeUQ7QUFDekRELFNBQVFDLEdBQVI7O0FBR0FELFNBQVFDLEdBQVI7O0FBSUEsd0M7Ozs7Ozs7Ozs7OztBQ2RBOzs7QUFHQTs7Ozs7QUFLQTs7OztBQUlBOzs7Ozs7QUFNQTs7OztBQUtBLEtBQUlDLFFBQVEsRUFBWjttQkFDZUEsSzs7O0FBRWYsS0FBSUMsUUFBUSxNQUFaO1NBQ1FBLEssR0FBQUEsSzs7O0FBRVIsS0FBSUMsUUFBUSxLQUFaO1NBQ1FBLEssR0FBQUEsSzs7O0FBRVIsS0FBSUMsUUFBUSxLQUFaO1NBQ2lCQyxVLEdBQVRELEsiLCJmaWxlIjoianMvbW9kdWxlLWFkdmFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNkIGZyb20gJy4uL2RlcC90ZXN0Mi5qcyc7ICAgICAvLyAqKioqKiDlpoLmnpzlrZDnu4Tku7bkuK3mnIlkZWZhdWx0IOmCo+S5iGltcG9ydOeahOaXtuWAmeWPr+S7peayoeaciXt9IOWKoOS4iuWQjuWPjeiAjOWPluS4jeWIsOe7hOS7tuWAvCDjgJDlj6/og73mmK/nsbvkvLzlj5blr7nosaHlkozlj5blgLzlvpfljp/nkIbjgJEg5Zug5Li65piv5ZSv5LiA5YC85ZWmXG5jb25zb2xlLmxvZyhhc2QpOyAgICAgICAgICAgICAgICAgICAgICAvL+S4lCDlm6DkuLrmmK/lpoLmnpzmg7MgaW1wb3J05ZKMZXhwb3J055qE5ZCN56ew5LiN5LiA5qC355qE6K+d77yM6YKj5LmI6K6+572uZGVmYXVsdOWwseWPr+S7peS6hlxuXG5pbXBvcnQge25hbWUyfSBmcm9tICcuLi9kZXAvdGVzdDIuanMnOyAvL+WcqOWQjOS4gOS4qmpz5Lit5Y+v5Lul5byV55So5ZCM5LiA5LiqanPlpJrmrKFcbmNvbnNvbGUubG9nKG5hbWUyKTtcblxuaW1wb3J0IHtuYW1lMyBhcyBjaGFuZ2VDYXROYW1lfSBmcm9tICcuLi9kZXAvdGVzdDIuanMnOyAgLy8g5b2T54S25Y+v5Lule2RlZmF1bHQgYXMgbmFtZX3mnaXlj5bliLDnu4Tku7ZkZWZhdWx055qE5YC85YaN6YeN5ZG95ZCNXG5jb25zb2xlLmxvZyhjaGFuZ2VDYXROYW1lKTtcblxuaW1wb3J0IHtjaGFuZ2VOYW1lfSBmcm9tICcuLi9kZXAvdGVzdDIuanMnO1xuY29uc29sZS5sb2coY2hhbmdlTmFtZSk7XG5cblxuXG4vLyoqKioqIOWPpuWklumhtumDqHRoaXPmmK/mjIflkJF1bmRlZmluZWQgIOW5tuS4jeaYr3dpbmRvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2R1bGUtYWR2YW5jZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAxNi8xMi8xMy5cbiAqL1xuLyoqIOS4jeiDveebtOaOpWV4cG9ydOS4gOS4quaVsOWAvOaIluiAheS8quaVsOWAvFxuICogIDEuIOWPr+S7pWV4cG9ydCB2YXIgbnVtID0gMTtcbiAqICAyLiDlj6/ku6VleHBvcnQgZnVuY3Rpb24gY2FsbGJhY2soKSB7fVxuICogKi9cblxuLyoqIOS9huaYr+WPr+S7pVxuICogIGV4cG9ydCB7bnVtLCBjYWxsYmFja31cbiAqICovXG5cbi8qKiDmiJbogIXkvaDlj6/ku6Xkvb/nlKhkZWZhdWx0LOS9huaYr+ivt+iusOedgOS4gOS4qm1vZHVsZeWPquiDveacieS4gOS4qmRlZmF1bHRcbiAqIDEuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7fVxuICogMi4gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsbGJhY2soKXt9XG4gKiAzLiBleHBvcnQgZGVmYXVsdCBudW07XG4gKiAqL1xuXG4vKiogZXhwb3J0IGRlZmF1bHTlkI7kuI3og73ot58gIOWPmOmHj+WjsOaYjuivreWPpVxuICogIGV4cG9ydCBkZWZhdWx0IHZhciBhID0gMTsg5oql6ZSZXG4gKiAqL1xuXG5cbnZhciBuYW1lMSA9IDEyO1xuZXhwb3J0IGRlZmF1bHQgbmFtZTE7XG5cbnZhciBuYW1lMiA9ICdNaWNrJztcbmV4cG9ydCB7bmFtZTJ9O1xuXG52YXIgbmFtZTMgPSAnY2F0JztcbmV4cG9ydCB7bmFtZTN9O1xuXG52YXIgbmFtZTQgPSAnZG9nJztcbmV4cG9ydCB7bmFtZTQgYXMgY2hhbmdlTmFtZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVwL3Rlc3QyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==