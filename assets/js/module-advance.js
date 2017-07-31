webpackJsonp([4,6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _test = __webpack_require__(86);
	
	var all = _interopRequireWildcard(_test);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// ***** 如果子组件中有default 那么import的时候可以没有{} 加上后反而取不到组件值 【可能是类似取对象和取值得原理】 因为是唯一值啦
	console.log(all.default); //且 因为是如果想 import和export的名称不一样的话，那么设置default就可以了
	
	//在同一个js中可以引用同一个js多次
	console.log(_test.name2);
	
	// 当然可以{default as name}来取到组件default的值再重命名
	console.log(_test.name3);
	
	console.log(_test.changeName);
	
	console.log(all.name1); //undefined
	console.log(all.default); //12  -- 也就是name1的值，所以其实export default其实是暴露一个叫default的变量
	
	//***** 另外顶部this是指向undefined  并不是window

/***/ },

/***/ 86:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlLWFkdmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC90ZXN0Mi5qcyJdLCJuYW1lcyI6WyJhbGwiLCJjb25zb2xlIiwibG9nIiwibmFtZTEiLCJkZWZhdWx0IiwibmFtZTIiLCJuYW1lMyIsIm5hbWU0IiwiY2hhbmdlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztLQVlZQSxHOzs7O0FBWjJCO0FBQ3ZDQyxTQUFRQyxHQUFSLENBV1lGLEdBWFosVSxDQUF1Qzs7QUFFQTtBQUN2Q0MsU0FBUUMsR0FBUjs7QUFFeUQ7QUFDekRELFNBQVFDLEdBQVI7O0FBR0FELFNBQVFDLEdBQVI7O0FBR0FELFNBQVFDLEdBQVIsQ0FBWUYsSUFBSUcsS0FBaEIsRSxDQUErQjtBQUMvQkYsU0FBUUMsR0FBUixDQUFZRixJQUFJSSxPQUFoQixFLENBQStCOztBQUUvQix3Qzs7Ozs7Ozs7Ozs7O0FDaEJBOzs7QUFHQTs7Ozs7QUFLQTs7OztBQUlBOzs7Ozs7QUFNQTs7OztBQUtBLEtBQUlELFFBQVEsRUFBWjttQkFDZUEsSzs7O0FBRWYsS0FBSUUsUUFBUSxNQUFaO1NBQ1FBLEssR0FBQUEsSzs7O0FBRVIsS0FBSUMsUUFBUSxLQUFaO1NBQ1FBLEssR0FBQUEsSzs7O0FBRVIsS0FBSUMsUUFBUSxLQUFaO1NBQ2lCQyxVLEdBQVRELEsiLCJmaWxlIjoianMvbW9kdWxlLWFkdmFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNkIGZyb20gJy4uL2RlcC90ZXN0Mi5qcyc7ICAgICAvLyAqKioqKiDlpoLmnpzlrZDnu4Tku7bkuK3mnIlkZWZhdWx0IOmCo+S5iGltcG9ydOeahOaXtuWAmeWPr+S7peayoeaciXt9IOWKoOS4iuWQjuWPjeiAjOWPluS4jeWIsOe7hOS7tuWAvCDjgJDlj6/og73mmK/nsbvkvLzlj5blr7nosaHlkozlj5blgLzlvpfljp/nkIbjgJEg5Zug5Li65piv5ZSv5LiA5YC85ZWmXG5jb25zb2xlLmxvZyhhc2QpOyAgICAgICAgICAgICAgICAgICAgICAvL+S4lCDlm6DkuLrmmK/lpoLmnpzmg7MgaW1wb3J05ZKMZXhwb3J055qE5ZCN56ew5LiN5LiA5qC355qE6K+d77yM6YKj5LmI6K6+572uZGVmYXVsdOWwseWPr+S7peS6hlxuXG5pbXBvcnQge25hbWUyfSBmcm9tICcuLi9kZXAvdGVzdDIuanMnOyAvL+WcqOWQjOS4gOS4qmpz5Lit5Y+v5Lul5byV55So5ZCM5LiA5LiqanPlpJrmrKFcbmNvbnNvbGUubG9nKG5hbWUyKTtcblxuaW1wb3J0IHtuYW1lMyBhcyBjaGFuZ2VDYXROYW1lfSBmcm9tICcuLi9kZXAvdGVzdDIuanMnOyAgLy8g5b2T54S25Y+v5Lule2RlZmF1bHQgYXMgbmFtZX3mnaXlj5bliLDnu4Tku7ZkZWZhdWx055qE5YC85YaN6YeN5ZG95ZCNXG5jb25zb2xlLmxvZyhjaGFuZ2VDYXROYW1lKTtcblxuaW1wb3J0IHtjaGFuZ2VOYW1lfSBmcm9tICcuLi9kZXAvdGVzdDIuanMnO1xuY29uc29sZS5sb2coY2hhbmdlTmFtZSk7XG5cbmltcG9ydCAqIGFzIGFsbCBmcm9tICcuLi9kZXAvdGVzdDIuanMnO1xuY29uc29sZS5sb2coYWxsLm5hbWUxKTsgICAgICAgIC8vdW5kZWZpbmVkXG5jb25zb2xlLmxvZyhhbGwuZGVmYXVsdCk7ICAgICAgLy8xMiAgLS0g5Lmf5bCx5pivbmFtZTHnmoTlgLzvvIzmiYDku6Xlhbblrp5leHBvcnQgZGVmYXVsdOWFtuWunuaYr+aatOmcsuS4gOS4quWPq2RlZmF1bHTnmoTlj5jph49cblxuLy8qKioqKiDlj6blpJbpobbpg6h0aGlz5piv5oyH5ZCRdW5kZWZpbmVkICDlubbkuI3mmK93aW5kb3dcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlLWFkdmFuY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMTYvMTIvMTMuXG4gKi9cbi8qKiDkuI3og73nm7TmjqVleHBvcnTkuIDkuKrmlbDlgLzmiJbogIXkvKrmlbDlgLxcbiAqICAxLiDlj6/ku6VleHBvcnQgdmFyIG51bSA9IDE7XG4gKiAgMi4g5Y+v5LulZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrKCkge31cbiAqICovXG5cbi8qKiDkvYbmmK/lj6/ku6VcbiAqICBleHBvcnQge251bSwgY2FsbGJhY2t9XG4gKiAqL1xuXG4vKiog5oiW6ICF5L2g5Y+v5Lul5L2/55SoZGVmYXVsdCzkvYbmmK/or7forrDnnYDkuIDkuKptb2R1bGXlj6rog73mnInkuIDkuKpkZWZhdWx0XG4gKiAxLiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe31cbiAqIDIuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGxiYWNrKCl7fVxuICogMy4gZXhwb3J0IGRlZmF1bHQgbnVtO1xuICogKi9cblxuLyoqIGV4cG9ydCBkZWZhdWx05ZCO5LiN6IO96LefICDlj5jph4/lo7DmmI7or63lj6VcbiAqICBleHBvcnQgZGVmYXVsdCB2YXIgYSA9IDE7IOaKpemUmVxuICogKi9cblxuXG52YXIgbmFtZTEgPSAxMjtcbmV4cG9ydCBkZWZhdWx0IG5hbWUxO1xuXG52YXIgbmFtZTIgPSAnTWljayc7XG5leHBvcnQge25hbWUyfTtcblxudmFyIG5hbWUzID0gJ2NhdCc7XG5leHBvcnQge25hbWUzfTtcblxudmFyIG5hbWU0ID0gJ2RvZyc7XG5leHBvcnQge25hbWU0IGFzIGNoYW5nZU5hbWV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcC90ZXN0Mi5qcyJdLCJzb3VyY2VSb290IjoiIn0=