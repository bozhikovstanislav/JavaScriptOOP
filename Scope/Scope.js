//if(true){
//    var result='From ....';
//}
//console.log(result);

//if(true){
//    function func(){
 ///       var result='From ....';
 //   }
//}
//console.log(result);

// closure

function gosho(pesho){
    var x=5; /// видима на всякъде тук
    return function () {
        console.log(x);
    };
    //всяка функция си помни мястото от където е извикана.
}
var y=gosho();
y();

function makeRandomGenerator(maxTime){

    var realMaxTime=1;
    if(maxTime>1000){
        realMaxTime=maxTime/600;
    }
    return function () {
        var rndNumber=5* realMaxTime;
        return rndNumber;
    };
}
var randomGenerator=makeRandomGenerator(10);

// е като
//function randomGenerator() {
//    var rndNumber=5* realMaxTime;
//    return rndNumber;
//};

randomGenerator(10);
// модули скриване
//falsy values
//null
//false,
// undefined,
//    0,
//    NaN,


var db;
db = (function () {
    var objs = [];
    result;
    function add(obj) {
        objs.push(obj);
        //return this;// не е хубаво да се прави
        return result;
    }

    function list() {
        return objs.slice();
    }

    //return{
    //    add:add,
    //    list:list
    //};//
    result = {
        add: add,
        list: list
    };
    return result;
}());
console.log(db.add('Goshko').add('Penka').list());
