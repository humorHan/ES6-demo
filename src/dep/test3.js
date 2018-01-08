/**
 * Created by humorHan on 2018/1/8.
 */
var a = {};
setTimeout(function(){
    a = {name:'12'};
}, 500);
module.exports = {
    init: function(){
        console.log(a);
    },
    a:a
};