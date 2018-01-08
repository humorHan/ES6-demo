webpackJsonp([7,10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _test = __webpack_require__(102);
	
	var all = _interopRequireWildcard(_test);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// ***** 如果子组件中有default 那么import的时候可以没有{} 加上后反而取不到组件值 【可能是类似取对象和取值得原理】 因为是唯一值啦
	console.log(all.default); //且 因为是如果想 import和export的名称不一样的话，那么设置default就可以了
	
	//在同一个js中可以引用同一个js多次
	console.log(_test.name2);
	
	// 当然可以{default as name}来取到组件default的值再重命名
	console.log(_test.name3);
	
	console.log(_test.changeName);
	
	console.log(all);
	console.log(all.name1); //undefined
	console.log(all.default); //12  -- 也就是name1的值，所以其实export default其实是暴露一个叫default的变量
	
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

/***/ },

/***/ 102:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlLWFkdmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC90ZXN0Mi5qcyJdLCJuYW1lcyI6WyJhbGwiLCJjb25zb2xlIiwibG9nIiwibmFtZTEiLCJkZWZhdWx0IiwibmFtZTIiLCJuYW1lMyIsIm5hbWU0IiwiY2hhbmdlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztLQVlZQSxHOzs7O0FBWjJCO0FBQ3ZDQyxTQUFRQyxHQUFSLENBV1lGLEdBWFosVSxDQUF1Qzs7QUFFQTtBQUN2Q0MsU0FBUUMsR0FBUjs7QUFFeUQ7QUFDekRELFNBQVFDLEdBQVI7O0FBR0FELFNBQVFDLEdBQVI7O0FBR0FELFNBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBQyxTQUFRQyxHQUFSLENBQVlGLElBQUlHLEtBQWhCLEUsQ0FBK0I7QUFDL0JGLFNBQVFDLEdBQVIsQ0FBWUYsSUFBSUksT0FBaEIsRSxDQUErQjs7QUFFL0I7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7OztBQUdBOzs7OztBQUtBOzs7O0FBSUE7Ozs7OztBQU1BOzs7O0FBS0EsS0FBSUQsUUFBUSxFQUFaO21CQUNlQSxLOzs7QUFFZixLQUFJRSxRQUFRLE1BQVo7U0FDUUEsSyxHQUFBQSxLOzs7QUFFUixLQUFJQyxRQUFRLEtBQVo7U0FDUUEsSyxHQUFBQSxLOzs7QUFFUixLQUFJQyxRQUFRLEtBQVo7U0FDaUJDLFUsR0FBVEQsSyIsImZpbGUiOiJqcy9tb2R1bGUtYWR2YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc2QgZnJvbSAnLi4vZGVwL3Rlc3QyLmpzJzsgICAgIC8vICoqKioqIOWmguaenOWtkOe7hOS7tuS4reaciWRlZmF1bHQg6YKj5LmIaW1wb3J055qE5pe25YCZ5Y+v5Lul5rKh5pyJe30g5Yqg5LiK5ZCO5Y+N6ICM5Y+W5LiN5Yiw57uE5Lu25YC8IOOAkOWPr+iDveaYr+exu+S8vOWPluWvueixoeWSjOWPluWAvOW+l+WOn+eQhuOAkSDlm6DkuLrmmK/llK/kuIDlgLzllaZcbmNvbnNvbGUubG9nKGFzZCk7ICAgICAgICAgICAgICAgICAgICAgIC8v5LiUIOWboOS4uuaYr+WmguaenOaDsyBpbXBvcnTlkoxleHBvcnTnmoTlkI3np7DkuI3kuIDmoLfnmoTor53vvIzpgqPkuYjorr7nva5kZWZhdWx05bCx5Y+v5Lul5LqGXG5cbmltcG9ydCB7bmFtZTJ9IGZyb20gJy4uL2RlcC90ZXN0Mi5qcyc7IC8v5Zyo5ZCM5LiA5LiqanPkuK3lj6/ku6XlvJXnlKjlkIzkuIDkuKpqc+WkmuasoVxuY29uc29sZS5sb2cobmFtZTIpO1xuXG5pbXBvcnQge25hbWUzIGFzIGNoYW5nZUNhdE5hbWV9IGZyb20gJy4uL2RlcC90ZXN0Mi5qcyc7ICAvLyDlvZPnhLblj6/ku6V7ZGVmYXVsdCBhcyBuYW1lfeadpeWPluWIsOe7hOS7tmRlZmF1bHTnmoTlgLzlho3ph43lkb3lkI1cbmNvbnNvbGUubG9nKGNoYW5nZUNhdE5hbWUpO1xuXG5pbXBvcnQge2NoYW5nZU5hbWV9IGZyb20gJy4uL2RlcC90ZXN0Mi5qcyc7XG5jb25zb2xlLmxvZyhjaGFuZ2VOYW1lKTtcblxuaW1wb3J0ICogYXMgYWxsIGZyb20gJy4uL2RlcC90ZXN0Mi5qcyc7XG5jb25zb2xlLmxvZyhhbGwpO1xuY29uc29sZS5sb2coYWxsLm5hbWUxKTsgICAgICAgIC8vdW5kZWZpbmVkXG5jb25zb2xlLmxvZyhhbGwuZGVmYXVsdCk7ICAgICAgLy8xMiAgLS0g5Lmf5bCx5pivbmFtZTHnmoTlgLzvvIzmiYDku6Xlhbblrp5leHBvcnQgZGVmYXVsdOWFtuWunuaYr+aatOmcsuS4gOS4quWPq2RlZmF1bHTnmoTlj5jph49cblxuLypcbmltcG9ydCBhYWEse25hbWUyLCBuYW1lM30gZnJvbSAnLi4vZGVwL3Rlc3QyLmpzJztcbmNvbnNvbGUubG9nKG5hbWUyKTsqL1xuXG5cblxuLyoqXG4gKiDljLrliKstVE9ETyAqKioqKirph43opoFcbiAqIOS4uuS6huaWueS+v+aPj+i/sO+8jOWBh+iuvmEuanPlvJXnlKjkuoZ0ZXN0LmpzXG4gKiAxLiBDb21tb25KUyDmqKHlnZfovpPlh7rnmoTmmK/kuIDkuKrlgLznmoTmi7fotJ3vvIxFUzYg5qih5Z2X6L6T5Ye655qE5piv5YC855qE5byV55So44CCKOaJgOS7peaYr3JlYWQtb25seSlcbiAqICAgIHRlc3QuanPkuK3nlKhyZXF1aXJl5pq06Zyy5bGe5oCn77yMYeS4reW8leeUqOeahOivne+8jOW+l+WIsOeahOS4jeaYr+WunuaXtueahO+8jOW9k+eEtuWmguaenOaatOmcsmZ1bmN0aW9u77yMZnVuY3Rpb27kuK3mmK/lj6/ku6XlvpfliLDlrp7ml7bnmoTlgLznmoTvvIxcbiAqICAgIOiAjGltcG9ydCBleHBvcnTmlrnlvI/lvpfliLDnmoTpg73mmK/lrp7ml7bnmoRcbiAqIDIuIENvbW1vbkpTIOaooeWdl+aYr+i/kOihjOaXtuWKoOi9ve+8jEVTNiDmqKHlnZfmmK/nvJbor5Hml7bovpPlh7rmjqXlj6PjgIJcbiAqICAgIOaJgOS7peWKqOaAgeW8leWFpe+8mnJlcXVpcmUobmFtZSArICcuanMnKeaYr+WPr+S7peeahO+8jGltcG9ydOS4jeihjFxuICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlLWFkdmFuY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMTYvMTIvMTMuXG4gKi9cbi8qKiDkuI3og73nm7TmjqVleHBvcnTkuIDkuKrmlbDlgLzmiJbogIXkvKrmlbDlgLxcbiAqICAxLiDlj6/ku6VleHBvcnQgdmFyIG51bSA9IDE7XG4gKiAgMi4g5Y+v5LulZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrKCkge31cbiAqICovXG5cbi8qKiDkvYbmmK/lj6/ku6VcbiAqICBleHBvcnQge251bSwgY2FsbGJhY2t9XG4gKiAqL1xuXG4vKiog5oiW6ICF5L2g5Y+v5Lul5L2/55SoZGVmYXVsdCzkvYbmmK/or7forrDnnYDkuIDkuKptb2R1bGXlj6rog73mnInkuIDkuKpkZWZhdWx0XG4gKiAxLiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe31cbiAqIDIuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGxiYWNrKCl7fVxuICogMy4gZXhwb3J0IGRlZmF1bHQgbnVtO1xuICogKi9cblxuLyoqIGV4cG9ydCBkZWZhdWx05ZCO5LiN6IO96LefICDlj5jph4/lo7DmmI7or63lj6VcbiAqICBleHBvcnQgZGVmYXVsdCB2YXIgYSA9IDE7IOaKpemUmVxuICogKi9cblxuXG52YXIgbmFtZTEgPSAxMjtcbmV4cG9ydCBkZWZhdWx0IG5hbWUxO1xuXG52YXIgbmFtZTIgPSAnTWljayc7XG5leHBvcnQge25hbWUyfTtcblxudmFyIG5hbWUzID0gJ2NhdCc7XG5leHBvcnQge25hbWUzfTtcblxudmFyIG5hbWU0ID0gJ2RvZyc7XG5leHBvcnQge25hbWU0IGFzIGNoYW5nZU5hbWV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcC90ZXN0Mi5qcyJdLCJzb3VyY2VSb290IjoiIn0=