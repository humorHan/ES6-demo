webpackJsonp([3,6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _test = __webpack_require__(83);
	
	__webpack_require__(84);
	
	// ***** 修改名字得不到组件的值 => 名称必须对应
	// ***** 如果子组件中没有default 那么import的时候必须有{}
	console.log(_test.num, _test.name); // => 可以传递变量
	
	(0, _test.hello)(); // => 传递方法
	
	console.log(_test.people); // =>  传递对象
	_test.people.eat();
	
	console.log(_test.Animal);
	var dog = new _test.Animal('dog'); // => 传递通过prototype拓展的方法的对象
	console.log(dog);
	dog.sayHello();
	
	console.log(_test.foo); //***** => 组件的值是动态绑定的，可以实时得到组件的值  因为他跟common规范不同  它输出的是值得引用
	setTimeout(function () {
	    return console.log(_test.foo);
	}, 1000);
	
	var s = 1;
	setTimeout(function () {
	    // ***** => 箭头函数 没有大括号会把 逗号前箭头之后的部分当做返回值  有大括号的只能手动加上return
	    s = 'asd';
	}, 1000);
	
	// ***** 另外 export是不能放在块级作用域的  => SyntaxError

/***/ },

/***/ 83:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	    eat: function eat() {
	        console.log(this.name + '正在吃东西');
	    }
	};
	
	function Animal(name) {
	    this.name = name;
	}
	Animal.prototype = {
	    sayHello: function sayHello() {
	        console.log('你好 ' + this.name);
	    }
	};
	
	var foo = exports.foo = 'bar';
	setTimeout(function () {
	    return exports.foo = foo = 'baz';
	}, 1000); //可以动态修改值  而且会影响调用该组件的值
	
	exports.num = num;
	exports.name = name;
	exports.hello = hello;
	exports.people = people;
	exports.Animal = Animal;

/***/ },

/***/ 84:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXAvdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJlYXQiLCJkb2ciLCJzYXlIZWxsbyIsInNldFRpbWVvdXQiLCJzIiwibnVtIiwibmFtZSIsImhlbGxvIiwicGVvcGxlIiwiYWdlIiwiQW5pbWFsIiwicHJvdG90eXBlIiwiZm9vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBRkEsb0JBQUFBLENBQVEsRUFBUjs7QUFFbUY7QUFDUDtBQUM1RUMsU0FBUUMsR0FBUix3QixDQUF5Qjs7QUFFekIsb0IsQ0FBWTs7QUFFWkQsU0FBUUMsR0FBUixlLENBQXNCO0FBQ3RCLGNBQU9DLEdBQVA7O0FBRUFGLFNBQVFDLEdBQVI7QUFDQSxLQUFJRSxNQUFNLGlCQUFXLEtBQVgsQ0FBVixDLENBQStCO0FBQy9CSCxTQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDQUEsS0FBSUMsUUFBSjs7QUFFQUosU0FBUUMsR0FBUixZLENBQThCO0FBQzlCSSxZQUFXO0FBQUEsWUFBTUwsUUFBUUMsR0FBUixXQUFOO0FBQUEsRUFBWCxFQUFtQyxJQUFuQzs7QUFFQSxLQUFJSyxJQUFJLENBQVI7QUFDQUQsWUFBVyxZQUFNO0FBQVE7QUFDckJDLFNBQUksS0FBSjtBQUNILEVBRkQsRUFFRyxJQUZIOztBQUlBLDhDOzs7Ozs7Ozs7Ozs7QUN4QkE7OztBQUdBLEtBQUlDLE1BQU0sQ0FBVjtBQUNBLEtBQUlDLE9BQU8sTUFBWDtBQUNBLFVBQVNDLEtBQVQsR0FBaUI7QUFDYlQsYUFBUUMsR0FBUixDQUFZLFdBQVdPLElBQXZCO0FBQ0g7O0FBRUQsS0FBSUUsU0FBUztBQUNURixXQUFNLE1BREc7QUFFVEcsVUFBSyxJQUZJO0FBR1RULFVBQUssZUFBWTtBQUNiRixpQkFBUUMsR0FBUixDQUFZLEtBQUtPLElBQUwsR0FBWSxPQUF4QjtBQUNIO0FBTFEsRUFBYjs7QUFRQSxVQUFTSSxNQUFULENBQWdCSixJQUFoQixFQUFzQjtBQUNsQixVQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUNESSxRQUFPQyxTQUFQLEdBQW1CO0FBQ2ZULGVBQVUsb0JBQVU7QUFDaEJKLGlCQUFRQyxHQUFSLENBQVksUUFBUSxLQUFLTyxJQUF6QjtBQUNIO0FBSGMsRUFBbkI7O0FBTU8sS0FBSU0sb0JBQU0sS0FBVjtBQUNQVCxZQUFXO0FBQUEsb0JBREFTLEdBQ0EsR0FBTUEsTUFBTSxLQUFaO0FBQUEsRUFBWCxFQUE4QixJQUE5QixFLENBQXNDOztTQUU5QlAsRyxHQUFBQSxHO1NBQUtDLEksR0FBQUEsSTtTQUFNQyxLLEdBQUFBLEs7U0FBT0MsTSxHQUFBQSxNO1NBQVFFLE0sR0FBQUEsTTs7Ozs7OztBQzdCbEMsMEMiLCJmaWxlIjoianMvbW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcIm1haW4uc2Nzc1wiKTtcblxuaW1wb3J0IHtudW0sIG5hbWUsIGhlbGxvLCBwZW9wbGUsIEFuaW1hbCwgZm9vLCBoYWhhfSBmcm9tICcuLi9kZXAvdGVzdC5qcyc7ICAgICAgICAvLyAqKioqKiDkv67mlLnlkI3lrZflvpfkuI3liLDnu4Tku7bnmoTlgLwgPT4g5ZCN56ew5b+F6aG75a+55bqUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKioqKiog5aaC5p6c5a2Q57uE5Lu25Lit5rKh5pyJZGVmYXVsdCDpgqPkuYhpbXBvcnTnmoTml7blgJnlv4XpobvmnIl7fVxuY29uc29sZS5sb2cobnVtLCBuYW1lKTsgIC8vID0+IOWPr+S7peS8oOmAkuWPmOmHj1xuXG5oZWxsbygpOyAgICAvLyA9PiDkvKDpgJLmlrnms5VcblxuY29uc29sZS5sb2cocGVvcGxlKTsgIC8vID0+ICDkvKDpgJLlr7nosaFcbnBlb3BsZS5lYXQoKTtcblxuY29uc29sZS5sb2coQW5pbWFsKTtcbnZhciBkb2cgPSBuZXcgQW5pbWFsKCdkb2cnKTsgICAvLyA9PiDkvKDpgJLpgJrov4dwcm90b3R5cGXmi5PlsZXnmoTmlrnms5XnmoTlr7nosaFcbmNvbnNvbGUubG9nKGRvZyk7XG5kb2cuc2F5SGVsbG8oKTtcblxuY29uc29sZS5sb2coZm9vKTsgICAgICAgICAgICAgLy8qKioqKiA9PiDnu4Tku7bnmoTlgLzmmK/liqjmgIHnu5HlrprnmoTvvIzlj6/ku6Xlrp7ml7blvpfliLDnu4Tku7bnmoTlgLwgIOWboOS4uuS7lui3n2NvbW1vbuinhOiMg+S4jeWQjCAg5a6D6L6T5Ye655qE5piv5YC85b6X5byV55SoXG5zZXRUaW1lb3V0KCgpID0+IGNvbnNvbGUubG9nKGZvbyksIDEwMDApO1xuXG52YXIgcyA9IDE7XG5zZXRUaW1lb3V0KCgpID0+IHsgICAgICAgLy8gKioqKiogPT4g566t5aS05Ye95pWwIOayoeacieWkp+aLrOWPt+S8muaKiiDpgJflj7fliY3nrq3lpLTkuYvlkI7nmoTpg6jliIblvZPlgZrov5Tlm57lgLwgIOacieWkp+aLrOWPt+eahOWPquiDveaJi+WKqOWKoOS4inJldHVyblxuICAgIHMgPSAnYXNkJztcbn0sIDEwMDApO1xuXG4vLyAqKioqKiDlj6blpJYgZXhwb3J05piv5LiN6IO95pS+5Zyo5Z2X57qn5L2c55So5Z+f55qEICA9PiBTeW50YXhFcnJvclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2R1bGUuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMTYvMTIvMTMuXG4gKi9cbnZhciBudW0gPSAxO1xudmFyIG5hbWUgPSAnTWlrZSc7XG5mdW5jdGlvbiBoZWxsbygpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gJyArIG5hbWUpO1xufVxuXG52YXIgcGVvcGxlID0ge1xuICAgIG5hbWU6ICdOZWFsJyxcbiAgICBhZ2U6ICcyNScsXG4gICAgZWF0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSArICfmraPlnKjlkIPkuJzopb8nKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBBbmltYWwobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG59XG5BbmltYWwucHJvdG90eXBlID0ge1xuICAgIHNheUhlbGxvOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygn5L2g5aW9ICcgKyB0aGlzLm5hbWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB2YXIgZm9vID0gJ2Jhcic7XG5zZXRUaW1lb3V0KCgpID0+IGZvbyA9ICdiYXonLCAxMDAwKTsgIC8v5Y+v5Lul5Yqo5oCB5L+u5pS55YC8ICDogIzkuJTkvJrlvbHlk43osIPnlKjor6Xnu4Tku7bnmoTlgLxcblxuZXhwb3J0IHtudW0sIG5hbWUsIGhlbGxvLCBwZW9wbGUsIEFuaW1hbH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcC90ZXN0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==