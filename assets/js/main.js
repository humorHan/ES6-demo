webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _test = __webpack_require__(1);
	
	__webpack_require__(2);
	
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
/* 1 */
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
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVwL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwiZWF0IiwiZG9nIiwic2F5SGVsbG8iLCJzZXRUaW1lb3V0IiwicyIsIm51bSIsIm5hbWUiLCJoZWxsbyIsInBlb3BsZSIsImFnZSIsIkFuaW1hbCIsInByb3RvdHlwZSIsImZvbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7O0FBRkEsb0JBQUFBLENBQVEsQ0FBUjs7QUFFbUY7QUFDUDtBQUM1RUMsU0FBUUMsR0FBUix3QixDQUF5Qjs7QUFFekIsb0IsQ0FBWTs7QUFFWkQsU0FBUUMsR0FBUixlLENBQXNCO0FBQ3RCLGNBQU9DLEdBQVA7O0FBRUFGLFNBQVFDLEdBQVI7QUFDQSxLQUFJRSxNQUFNLGlCQUFXLEtBQVgsQ0FBVixDLENBQStCO0FBQy9CSCxTQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDQUEsS0FBSUMsUUFBSjs7QUFFQUosU0FBUUMsR0FBUixZLENBQThCO0FBQzlCSSxZQUFXO0FBQUEsWUFBTUwsUUFBUUMsR0FBUixXQUFOO0FBQUEsRUFBWCxFQUFtQyxJQUFuQzs7QUFFQSxLQUFJSyxJQUFJLENBQVI7QUFDQUQsWUFBVyxZQUFNO0FBQVE7QUFDckJDLFNBQUksS0FBSjtBQUNILEVBRkQsRUFFRyxJQUZIOztBQUlBLDhDOzs7Ozs7Ozs7OztBQ3hCQTs7O0FBR0EsS0FBSUMsTUFBTSxDQUFWO0FBQ0EsS0FBSUMsT0FBTyxNQUFYO0FBQ0EsVUFBU0MsS0FBVCxHQUFpQjtBQUNiVCxhQUFRQyxHQUFSLENBQVksV0FBV08sSUFBdkI7QUFDSDs7QUFFRCxLQUFJRSxTQUFTO0FBQ1RGLFdBQU0sTUFERztBQUVURyxVQUFLLElBRkk7QUFHVFQsVUFBSyxlQUFZO0FBQ2JGLGlCQUFRQyxHQUFSLENBQVksS0FBS08sSUFBTCxHQUFZLE9BQXhCO0FBQ0g7QUFMUSxFQUFiOztBQVFBLFVBQVNJLE1BQVQsQ0FBZ0JKLElBQWhCLEVBQXNCO0FBQ2xCLFVBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIO0FBQ0RJLFFBQU9DLFNBQVAsR0FBbUI7QUFDZlQsZUFBVSxvQkFBVTtBQUNoQkosaUJBQVFDLEdBQVIsQ0FBWSxRQUFRLEtBQUtPLElBQXpCO0FBQ0g7QUFIYyxFQUFuQjs7QUFNTyxLQUFJTSxvQkFBTSxLQUFWO0FBQ1BULFlBQVc7QUFBQSxvQkFEQVMsR0FDQSxHQUFNQSxNQUFNLEtBQVo7QUFBQSxFQUFYLEVBQThCLElBQTlCLEUsQ0FBc0M7O1NBRTlCUCxHLEdBQUFBLEc7U0FBS0MsSSxHQUFBQSxJO1NBQU1DLEssR0FBQUEsSztTQUFPQyxNLEdBQUFBLE07U0FBUUUsTSxHQUFBQSxNOzs7Ozs7QUM3QmxDLDBDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwibWFpbi5zY3NzXCIpO1xuXG5pbXBvcnQge251bSwgbmFtZSwgaGVsbG8sIHBlb3BsZSwgQW5pbWFsLCBmb28sIGhhaGF9IGZyb20gJy4uL2RlcC90ZXN0LmpzJzsgICAgICAgIC8vICoqKioqIOS/ruaUueWQjeWtl+W+l+S4jeWIsOe7hOS7tueahOWAvCA9PiDlkI3np7Dlv4Xpobvlr7nlupRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqKioqKiDlpoLmnpzlrZDnu4Tku7bkuK3msqHmnIlkZWZhdWx0IOmCo+S5iGltcG9ydOeahOaXtuWAmeW/hemhu+aciXt9XG5jb25zb2xlLmxvZyhudW0sIG5hbWUpOyAgLy8gPT4g5Y+v5Lul5Lyg6YCS5Y+Y6YePXG5cbmhlbGxvKCk7ICAgIC8vID0+IOS8oOmAkuaWueazlVxuXG5jb25zb2xlLmxvZyhwZW9wbGUpOyAgLy8gPT4gIOS8oOmAkuWvueixoVxucGVvcGxlLmVhdCgpO1xuXG5jb25zb2xlLmxvZyhBbmltYWwpO1xudmFyIGRvZyA9IG5ldyBBbmltYWwoJ2RvZycpOyAgIC8vID0+IOS8oOmAkumAmui/h3Byb3RvdHlwZeaLk+WxleeahOaWueazleeahOWvueixoVxuY29uc29sZS5sb2coZG9nKTtcbmRvZy5zYXlIZWxsbygpO1xuXG5jb25zb2xlLmxvZyhmb28pOyAgICAgICAgICAgICAvLyoqKioqID0+IOe7hOS7tueahOWAvOaYr+WKqOaAgee7keWumueahO+8jOWPr+S7peWunuaXtuW+l+WIsOe7hOS7tueahOWAvCAg5Zug5Li65LuW6LefY29tbW9u6KeE6IyD5LiN5ZCMICDlroPovpPlh7rnmoTmmK/lgLzlvpflvJXnlKhcbnNldFRpbWVvdXQoKCkgPT4gY29uc29sZS5sb2coZm9vKSwgMTAwMCk7XG5cbnZhciBzID0gMTtcbnNldFRpbWVvdXQoKCkgPT4geyAgICAgICAvLyAqKioqKiA9PiDnrq3lpLTlh73mlbAg5rKh5pyJ5aSn5ous5Y+35Lya5oqKIOmAl+WPt+WJjeeureWktOS5i+WQjueahOmDqOWIhuW9k+WBmui/lOWbnuWAvCAg5pyJ5aSn5ous5Y+355qE5Y+q6IO95omL5Yqo5Yqg5LiKcmV0dXJuXG4gICAgcyA9ICdhc2QnO1xufSwgMTAwMCk7XG5cbi8vICoqKioqIOWPpuWkliBleHBvcnTmmK/kuI3og73mlL7lnKjlnZfnuqfkvZznlKjln5/nmoQgID0+IFN5bnRheEVycm9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21haW4uanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaHVtb3JIYW4gb24gMTYvMTIvMTMuXG4gKi9cbnZhciBudW0gPSAxO1xudmFyIG5hbWUgPSAnTWlrZSc7XG5mdW5jdGlvbiBoZWxsbygpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gJyArIG5hbWUpO1xufVxuXG52YXIgcGVvcGxlID0ge1xuICAgIG5hbWU6ICdOZWFsJyxcbiAgICBhZ2U6ICcyNScsXG4gICAgZWF0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSArICfmraPlnKjlkIPkuJzopb8nKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBBbmltYWwobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG59XG5BbmltYWwucHJvdG90eXBlID0ge1xuICAgIHNheUhlbGxvOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZygn5L2g5aW9ICcgKyB0aGlzLm5hbWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB2YXIgZm9vID0gJ2Jhcic7XG5zZXRUaW1lb3V0KCgpID0+IGZvbyA9ICdiYXonLCAxMDAwKTsgIC8v5Y+v5Lul5Yqo5oCB5L+u5pS55YC8ICDogIzkuJTkvJrlvbHlk43osIPnlKjor6Xnu4Tku7bnmoTlgLxcblxuZXhwb3J0IHtudW0sIG5hbWUsIGhlbGxvLCBwZW9wbGUsIEFuaW1hbH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcC90ZXN0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9