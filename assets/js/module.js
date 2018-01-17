webpackJsonp([6,11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _test = __webpack_require__(100);
	
	// ***** 修改名字得不到组件的值 => 名称必须对应
	// ***** 如果子组件中没有default 那么import的时候必须有{}
	console.log(_test.num, _test.name); // => 可以传递变量
	
	//require("main.scss");
	
	(0, _test.hello)(); // => 传递方法
	
	console.log(_test.people); // =>  传递对象
	_test.people.eat();
	
	console.log(_test.Animal);
	var dog = new _test.Animal('dog'); // => 传递通过prototype拓展的方法的对象
	console.log(dog);
	dog.sayHello();
	
	/*TODO 组件的值是动态绑定的，可以实时得到组件的值  因为他跟common规范不同  它输出的是值得引用*/
	console.log(_test.foo); //***** => 组件的值是动态绑定的，可以实时得到组件的值  因为他跟common规范不同  它输出的是值得引用
	setTimeout(function () {
	    return console.log(_test.foo);
	}, 1000);
	
	/*暴露的如果是属性  那么值不是实时的，暴露的方法抛出属性 才是实时的*/
	var sss = __webpack_require__(101);
	console.log(sss.a);
	sss.init();
	setTimeout(function () {
	    console.log(sss.a); //{}
	    sss.init(); //{name:12}
	}, 2000);
	
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

/***/ },

/***/ 101:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by humorHan on 2018/1/8.
	 */
	var a = {};
	setTimeout(function () {
	    a = { name: '12' };
	}, 500);
	module.exports = {
	    init: function init() {
	        console.log(a);
	    },
	    a: a
	};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXAvdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVwL3Rlc3QzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJlYXQiLCJkb2ciLCJzYXlIZWxsbyIsInNldFRpbWVvdXQiLCJzc3MiLCJyZXF1aXJlIiwiYSIsImluaXQiLCJzIiwibnVtIiwibmFtZSIsImhlbGxvIiwicGVvcGxlIiwiYWdlIiwiQW5pbWFsIiwicHJvdG90eXBlIiwiZm9vIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUFtRjtBQUNQO0FBQzVFQSxTQUFRQyxHQUFSLHdCLENBQXlCOztBQUp6Qjs7QUFNQSxvQixDQUFZOztBQUVaRCxTQUFRQyxHQUFSLGUsQ0FBc0I7QUFDdEIsY0FBT0MsR0FBUDs7QUFFQUYsU0FBUUMsR0FBUjtBQUNBLEtBQUlFLE1BQU0saUJBQVcsS0FBWCxDQUFWLEMsQ0FBK0I7QUFDL0JILFNBQVFDLEdBQVIsQ0FBWUUsR0FBWjtBQUNBQSxLQUFJQyxRQUFKOztBQUVBO0FBQ0FKLFNBQVFDLEdBQVIsWSxDQUE4QjtBQUM5QkksWUFBVztBQUFBLFlBQU1MLFFBQVFDLEdBQVIsV0FBTjtBQUFBLEVBQVgsRUFBbUMsSUFBbkM7O0FBRUE7QUFDQSxLQUFJSyxNQUFNLG1CQUFBQyxDQUFRLEdBQVIsQ0FBVjtBQUNBUCxTQUFRQyxHQUFSLENBQVlLLElBQUlFLENBQWhCO0FBQ0FGLEtBQUlHLElBQUo7QUFDQUosWUFBVyxZQUFVO0FBQ2pCTCxhQUFRQyxHQUFSLENBQVlLLElBQUlFLENBQWhCLEVBRGlCLENBQ007QUFDdkJGLFNBQUlHLElBQUosR0FGaUIsQ0FFTTtBQUMxQixFQUhELEVBR0csSUFISDs7QUFLQSxLQUFJQyxJQUFJLENBQVI7QUFDQUwsWUFBVyxZQUFNO0FBQVE7QUFDckJLLFNBQUksS0FBSjtBQUNILEVBRkQsRUFFRyxJQUZIOztBQUlBLDhDOzs7Ozs7Ozs7Ozs7QUNsQ0E7OztBQUdBLEtBQUlDLE1BQU0sQ0FBVjtBQUNBLEtBQUlDLE9BQU8sTUFBWDtBQUNBLFVBQVNDLEtBQVQsR0FBaUI7QUFDYmIsYUFBUUMsR0FBUixDQUFZLFdBQVdXLElBQXZCO0FBQ0g7O0FBRUQsS0FBSUUsU0FBUztBQUNURixXQUFNLE1BREc7QUFFVEcsVUFBSyxJQUZJO0FBR1RiLFVBQUssZUFBWTtBQUNiRixpQkFBUUMsR0FBUixDQUFZLEtBQUtXLElBQUwsR0FBWSxPQUF4QjtBQUNIO0FBTFEsRUFBYjs7QUFRQSxVQUFTSSxNQUFULENBQWdCSixJQUFoQixFQUFzQjtBQUNsQixVQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUNESSxRQUFPQyxTQUFQLEdBQW1CO0FBQ2ZiLGVBQVUsb0JBQVU7QUFDaEJKLGlCQUFRQyxHQUFSLENBQVksUUFBUSxLQUFLVyxJQUF6QjtBQUNIO0FBSGMsRUFBbkI7O0FBTU8sS0FBSU0sb0JBQU0sS0FBVjtBQUNQYixZQUFXO0FBQUEsb0JBREFhLEdBQ0EsR0FBTUEsTUFBTSxLQUFaO0FBQUEsRUFBWCxFQUE4QixJQUE5QixFLENBQXNDOztTQUU5QlAsRyxHQUFBQSxHO1NBQUtDLEksR0FBQUEsSTtTQUFNQyxLLEdBQUFBLEs7U0FBT0MsTSxHQUFBQSxNO1NBQVFFLE0sR0FBQUEsTTs7Ozs7Ozs7O0FDN0JsQzs7O0FBR0EsS0FBSVIsSUFBSSxFQUFSO0FBQ0FILFlBQVcsWUFBVTtBQUNqQkcsU0FBSSxFQUFDSSxNQUFLLElBQU4sRUFBSjtBQUNILEVBRkQsRUFFRyxHQUZIO0FBR0FPLFFBQU9DLE9BQVAsR0FBaUI7QUFDYlgsV0FBTSxnQkFBVTtBQUNaVCxpQkFBUUMsR0FBUixDQUFZTyxDQUFaO0FBQ0gsTUFIWTtBQUliQSxRQUFFQTtBQUpXLEVBQWpCLEMiLCJmaWxlIjoianMvbW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9yZXF1aXJlKFwibWFpbi5zY3NzXCIpO1xuXG5pbXBvcnQge251bSwgbmFtZSwgaGVsbG8sIHBlb3BsZSwgQW5pbWFsLCBmb28sIGhhaGF9IGZyb20gJy4uL2RlcC90ZXN0LmpzJzsgICAgICAgIC8vICoqKioqIOS/ruaUueWQjeWtl+W+l+S4jeWIsOe7hOS7tueahOWAvCA9PiDlkI3np7Dlv4Xpobvlr7nlupRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqKioqKiDlpoLmnpzlrZDnu4Tku7bkuK3msqHmnIlkZWZhdWx0IOmCo+S5iGltcG9ydOeahOaXtuWAmeW/hemhu+aciXt9XG5jb25zb2xlLmxvZyhudW0sIG5hbWUpOyAgLy8gPT4g5Y+v5Lul5Lyg6YCS5Y+Y6YePXG5cbmhlbGxvKCk7ICAgIC8vID0+IOS8oOmAkuaWueazlVxuXG5jb25zb2xlLmxvZyhwZW9wbGUpOyAgLy8gPT4gIOS8oOmAkuWvueixoVxucGVvcGxlLmVhdCgpO1xuXG5jb25zb2xlLmxvZyhBbmltYWwpO1xudmFyIGRvZyA9IG5ldyBBbmltYWwoJ2RvZycpOyAgIC8vID0+IOS8oOmAkumAmui/h3Byb3RvdHlwZeaLk+WxleeahOaWueazleeahOWvueixoVxuY29uc29sZS5sb2coZG9nKTtcbmRvZy5zYXlIZWxsbygpO1xuXG4vKlRPRE8g57uE5Lu255qE5YC85piv5Yqo5oCB57uR5a6a55qE77yM5Y+v5Lul5a6e5pe25b6X5Yiw57uE5Lu255qE5YC8ICDlm6DkuLrku5bot59jb21tb27op4TojIPkuI3lkIwgIOWug+i+k+WHuueahOaYr+WAvOW+l+W8leeUqCovXG5jb25zb2xlLmxvZyhmb28pOyAgICAgICAgICAgICAvLyoqKioqID0+IOe7hOS7tueahOWAvOaYr+WKqOaAgee7keWumueahO+8jOWPr+S7peWunuaXtuW+l+WIsOe7hOS7tueahOWAvCAg5Zug5Li65LuW6LefY29tbW9u6KeE6IyD5LiN5ZCMICDlroPovpPlh7rnmoTmmK/lgLzlvpflvJXnlKhcbnNldFRpbWVvdXQoKCkgPT4gY29uc29sZS5sb2coZm9vKSwgMTAwMCk7XG5cbi8q5pq06Zyy55qE5aaC5p6c5piv5bGe5oCnICDpgqPkuYjlgLzkuI3mmK/lrp7ml7bnmoTvvIzmmrTpnLLnmoTmlrnms5Xmipvlh7rlsZ7mgKcg5omN5piv5a6e5pe255qEKi9cbnZhciBzc3MgPSByZXF1aXJlKCcuLi9kZXAvdGVzdDMnKTtcbmNvbnNvbGUubG9nKHNzcy5hKTtcbnNzcy5pbml0KCk7XG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coc3NzLmEpOyAgICAvL3t9XG4gICAgc3NzLmluaXQoKSAgICAgICAgICAgICAvL3tuYW1lOjEyfVxufSwgMjAwMCk7XG5cbnZhciBzID0gMTtcbnNldFRpbWVvdXQoKCkgPT4geyAgICAgICAvLyAqKioqKiA9PiDnrq3lpLTlh73mlbAg5rKh5pyJ5aSn5ous5Y+35Lya5oqKIOmAl+WPt+WJjeeureWktOS5i+WQjueahOmDqOWIhuW9k+WBmui/lOWbnuWAvCAg5pyJ5aSn5ous5Y+355qE5Y+q6IO95omL5Yqo5Yqg5LiKcmV0dXJuXG4gICAgcyA9ICdhc2QnO1xufSwgMTAwMCk7XG5cbi8vICoqKioqIOWPpuWkliBleHBvcnTmmK/kuI3og73mlL7lnKjlnZfnuqfkvZznlKjln5/nmoQgID0+IFN5bnRheEVycm9yXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDE2LzEyLzEzLlxuICovXG52YXIgbnVtID0gMTtcbnZhciBuYW1lID0gJ01pa2UnO1xuZnVuY3Rpb24gaGVsbG8oKSB7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvICcgKyBuYW1lKTtcbn1cblxudmFyIHBlb3BsZSA9IHtcbiAgICBuYW1lOiAnTmVhbCcsXG4gICAgYWdlOiAnMjUnLFxuICAgIGVhdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUgKyAn5q2j5Zyo5ZCD5Lic6KW/Jyk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gQW5pbWFsKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xufVxuQW5pbWFsLnByb3RvdHlwZSA9IHtcbiAgICBzYXlIZWxsbzogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coJ+S9oOWlvSAnICsgdGhpcy5uYW1lKTtcbiAgICB9XG59O1xuXG5leHBvcnQgdmFyIGZvbyA9ICdiYXInO1xuc2V0VGltZW91dCgoKSA9PiBmb28gPSAnYmF6JywgMTAwMCk7ICAvL+WPr+S7peWKqOaAgeS/ruaUueWAvCAg6ICM5LiU5Lya5b2x5ZON6LCD55So6K+l57uE5Lu255qE5YC8XG5cbmV4cG9ydCB7bnVtLCBuYW1lLCBoZWxsbywgcGVvcGxlLCBBbmltYWx9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZXAvdGVzdC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAyMDE4LzEvOC5cbiAqL1xudmFyIGEgPSB7fTtcbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICBhID0ge25hbWU6JzEyJ307XG59LCA1MDApO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coYSk7XG4gICAgfSxcbiAgICBhOmFcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcC90ZXN0My5qcyJdLCJzb3VyY2VSb290IjoiIn0=