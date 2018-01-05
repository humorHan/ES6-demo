webpackJsonp([4,8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _test = __webpack_require__(100);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ 100:
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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXAvdGVzdC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImVhdCIsImRvZyIsInNheUhlbGxvIiwic2V0VGltZW91dCIsInMiLCJudW0iLCJuYW1lIiwiaGVsbG8iLCJwZW9wbGUiLCJhZ2UiLCJBbmltYWwiLCJwcm90b3R5cGUiLCJmb28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFGQSxvQkFBQUEsQ0FBUSxxSUFBUjs7QUFFbUY7QUFDUDtBQUM1RUMsU0FBUUMsR0FBUix3QixDQUF5Qjs7QUFFekIsb0IsQ0FBWTs7QUFFWkQsU0FBUUMsR0FBUixlLENBQXNCO0FBQ3RCLGNBQU9DLEdBQVA7O0FBRUFGLFNBQVFDLEdBQVI7QUFDQSxLQUFJRSxNQUFNLGlCQUFXLEtBQVgsQ0FBVixDLENBQStCO0FBQy9CSCxTQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDQUEsS0FBSUMsUUFBSjs7QUFFQUosU0FBUUMsR0FBUixZLENBQThCO0FBQzlCSSxZQUFXO0FBQUEsWUFBTUwsUUFBUUMsR0FBUixXQUFOO0FBQUEsRUFBWCxFQUFtQyxJQUFuQzs7QUFFQSxLQUFJSyxJQUFJLENBQVI7QUFDQUQsWUFBVyxZQUFNO0FBQVE7QUFDckJDLFNBQUksS0FBSjtBQUNILEVBRkQsRUFFRyxJQUZIOztBQUlBLDhDOzs7Ozs7Ozs7Ozs7QUN4QkE7OztBQUdBLEtBQUlDLE1BQU0sQ0FBVjtBQUNBLEtBQUlDLE9BQU8sTUFBWDtBQUNBLFVBQVNDLEtBQVQsR0FBaUI7QUFDYlQsYUFBUUMsR0FBUixDQUFZLFdBQVdPLElBQXZCO0FBQ0g7O0FBRUQsS0FBSUUsU0FBUztBQUNURixXQUFNLE1BREc7QUFFVEcsVUFBSyxJQUZJO0FBR1RULFVBQUssZUFBWTtBQUNiRixpQkFBUUMsR0FBUixDQUFZLEtBQUtPLElBQUwsR0FBWSxPQUF4QjtBQUNIO0FBTFEsRUFBYjs7QUFRQSxVQUFTSSxNQUFULENBQWdCSixJQUFoQixFQUFzQjtBQUNsQixVQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUNESSxRQUFPQyxTQUFQLEdBQW1CO0FBQ2ZULGVBQVUsb0JBQVU7QUFDaEJKLGlCQUFRQyxHQUFSLENBQVksUUFBUSxLQUFLTyxJQUF6QjtBQUNIO0FBSGMsRUFBbkI7O0FBTU8sS0FBSU0sb0JBQU0sS0FBVjtBQUNQVCxZQUFXO0FBQUEsb0JBREFTLEdBQ0EsR0FBTUEsTUFBTSxLQUFaO0FBQUEsRUFBWCxFQUE4QixJQUE5QixFLENBQXNDOztTQUU5QlAsRyxHQUFBQSxHO1NBQUtDLEksR0FBQUEsSTtTQUFNQyxLLEdBQUFBLEs7U0FBT0MsTSxHQUFBQSxNO1NBQVFFLE0sR0FBQUEsTSIsImZpbGUiOiJqcy9tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwibWFpbi5zY3NzXCIpO1xuXG5pbXBvcnQge251bSwgbmFtZSwgaGVsbG8sIHBlb3BsZSwgQW5pbWFsLCBmb28sIGhhaGF9IGZyb20gJy4uL2RlcC90ZXN0LmpzJzsgICAgICAgIC8vICoqKioqIOS/ruaUueWQjeWtl+W+l+S4jeWIsOe7hOS7tueahOWAvCA9PiDlkI3np7Dlv4Xpobvlr7nlupRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqKioqKiDlpoLmnpzlrZDnu4Tku7bkuK3msqHmnIlkZWZhdWx0IOmCo+S5iGltcG9ydOeahOaXtuWAmeW/hemhu+aciXt9XG5jb25zb2xlLmxvZyhudW0sIG5hbWUpOyAgLy8gPT4g5Y+v5Lul5Lyg6YCS5Y+Y6YePXG5cbmhlbGxvKCk7ICAgIC8vID0+IOS8oOmAkuaWueazlVxuXG5jb25zb2xlLmxvZyhwZW9wbGUpOyAgLy8gPT4gIOS8oOmAkuWvueixoVxucGVvcGxlLmVhdCgpO1xuXG5jb25zb2xlLmxvZyhBbmltYWwpO1xudmFyIGRvZyA9IG5ldyBBbmltYWwoJ2RvZycpOyAgIC8vID0+IOS8oOmAkumAmui/h3Byb3RvdHlwZeaLk+WxleeahOaWueazleeahOWvueixoVxuY29uc29sZS5sb2coZG9nKTtcbmRvZy5zYXlIZWxsbygpO1xuXG5jb25zb2xlLmxvZyhmb28pOyAgICAgICAgICAgICAvLyoqKioqID0+IOe7hOS7tueahOWAvOaYr+WKqOaAgee7keWumueahO+8jOWPr+S7peWunuaXtuW+l+WIsOe7hOS7tueahOWAvCAg5Zug5Li65LuW6LefY29tbW9u6KeE6IyD5LiN5ZCMICDlroPovpPlh7rnmoTmmK/lgLzlvpflvJXnlKhcbnNldFRpbWVvdXQoKCkgPT4gY29uc29sZS5sb2coZm9vKSwgMTAwMCk7XG5cbnZhciBzID0gMTtcbnNldFRpbWVvdXQoKCkgPT4geyAgICAgICAvLyAqKioqKiA9PiDnrq3lpLTlh73mlbAg5rKh5pyJ5aSn5ous5Y+35Lya5oqKIOmAl+WPt+WJjeeureWktOS5i+WQjueahOmDqOWIhuW9k+WBmui/lOWbnuWAvCAg5pyJ5aSn5ous5Y+355qE5Y+q6IO95omL5Yqo5Yqg5LiKcmV0dXJuXG4gICAgcyA9ICdhc2QnO1xufSwgMTAwMCk7XG5cbi8vICoqKioqIOWPpuWkliBleHBvcnTmmK/kuI3og73mlL7lnKjlnZfnuqfkvZznlKjln5/nmoQgID0+IFN5bnRheEVycm9yXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZHVsZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAxNi8xMi8xMy5cbiAqL1xudmFyIG51bSA9IDE7XG52YXIgbmFtZSA9ICdNaWtlJztcbmZ1bmN0aW9uIGhlbGxvKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbyAnICsgbmFtZSk7XG59XG5cbnZhciBwZW9wbGUgPSB7XG4gICAgbmFtZTogJ05lYWwnLFxuICAgIGFnZTogJzI1JyxcbiAgICBlYXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lICsgJ+ato+WcqOWQg+S4nOilvycpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIEFuaW1hbChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbn1cbkFuaW1hbC5wcm90b3R5cGUgPSB7XG4gICAgc2F5SGVsbG86IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCfkvaDlpb0gJyArIHRoaXMubmFtZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHZhciBmb28gPSAnYmFyJztcbnNldFRpbWVvdXQoKCkgPT4gZm9vID0gJ2JheicsIDEwMDApOyAgLy/lj6/ku6XliqjmgIHkv67mlLnlgLwgIOiAjOS4lOS8muW9seWTjeiwg+eUqOivpee7hOS7tueahOWAvFxuXG5leHBvcnQge251bSwgbmFtZSwgaGVsbG8sIHBlb3BsZSwgQW5pbWFsfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVwL3Rlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9