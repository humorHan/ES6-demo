webpackJsonp([0,10],[
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var _console;
	
	/**
	 * Created by humorHan on 2018/1/5.
	 */
	/*扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。*/
	(_console = console).log.apply(_console, [1, 2, 3]); // 1,2,3
	
	function push(array) {
	  for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    items[_key - 1] = arguments[_key];
	  }
	
	  array.push.apply(array, items);
	}
	
	var arr1 = [1, 2, 3];
	var arr2 = [4, 5];
	var arr3 = [6];
	console.log([].concat(arr1, arr2, arr3));

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXJyYXkuanMiXSwibmFtZXMiOlsibG9nIiwicHVzaCIsImFycmF5IiwiaXRlbXMiLCJhcnIxIiwiYXJyMiIsImFycjMiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBLHNCQUFRQSxHQUFSLGlCQUFlLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWYsRSxDQUEwQjs7QUFFMUIsVUFBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQStCO0FBQUEscUNBQVBDLEtBQU87QUFBUEEsVUFBTztBQUFBOztBQUMzQkQsU0FBTUQsSUFBTixjQUFjRSxLQUFkO0FBQ0g7O0FBRUQsS0FBSUMsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFYO0FBQ0EsS0FBSUMsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVg7QUFDQSxLQUFJQyxPQUFPLENBQUMsQ0FBRCxDQUFYO0FBQ0FDLFNBQVFQLEdBQVIsV0FBZ0JJLElBQWhCLEVBQXlCQyxJQUF6QixFQUFrQ0MsSUFBbEMsRyIsImZpbGUiOiJqcy9hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAyMDE4LzEvNS5cbiAqL1xuLyrmianlsZXov5DnrpfnrKbvvIhzcHJlYWTvvInmmK/kuInkuKrngrnvvIguLi7vvInjgILlroPlpb3mr5QgcmVzdCDlj4LmlbDnmoTpgIbov5DnrpfvvIzlsIbkuIDkuKrmlbDnu4TovazkuLrnlKjpgJflj7fliIbpmpTnmoTlj4LmlbDluo/liJfjgIIqL1xuY29uc29sZS5sb2coLi4uWzEsIDIsIDNdKTsvLyAxLDIsM1xuXG5mdW5jdGlvbiBwdXNoKGFycmF5LCAuLi5pdGVtcykge1xuICAgIGFycmF5LnB1c2goLi4uaXRlbXMpO1xufVxuXG52YXIgYXJyMSA9IFsxLDIsM107XG52YXIgYXJyMiA9IFs0LDVdO1xudmFyIGFycjMgPSBbNl07XG5jb25zb2xlLmxvZyhbLi4uYXJyMSwgLi4uYXJyMiwgLi4uYXJyM10pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcnJheS5qcyJdLCJzb3VyY2VSb290IjoiIn0=