var mod= mod ||{};
//file-1.js
//var mod=(function () {
//
//        return{
//            x: 'file-1'
//        };
//
//})();
var mod= mod || {};
(function (scope) {

    scope.x='file-1'

})(mod);
//file-2.js

(function (scope) {

    scope.y='file-2'

})(mod);
//scope i mode sa един и същи обект

console.log(mod.x);
