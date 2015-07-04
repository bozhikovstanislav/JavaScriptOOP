//var Animal=(function Animal(name,age){
//    this.name=name;
//    this.age=age;
//}());
//Animal.prototype.toString=function(){
//    return this.name+' '+this.age;
//
////Cat.prototype=new Animal();
//var Cat=(function(parent){
//
//    function Cat(name,age,sleep){
//        parent.prototype.call(this,name,age);
//    }
//
//    Cat.prototype.toString=function(){
//        var baseResult=parent.prototype.toString.call(this);
//    };
//
//    return Animal;
//})(Animal)

var animal={
    return:function(){
        return 'animal'
    }
};
//
//var dog={
//    name:'pesho'
//};
//dog.__proto__=animal; //works in chromm firefox

var dog=Object.create(animal);
dog.name='Pesho';


function createObject(objToCreate){
    //something
    function Constructor(){ }
    Constructor.prototype=objToCreate;
    return new Constructor();
}
//Define properties
var dog =Object.defineProperties((animal,{
    name:{
        value:'Pesho'
    }
}));
var animal=(function(){

    var animal={
        init: function(name , age){
            this.name=name;
            this.age=age;
            return this;
        },
        get name(){
            return this._name;
        },
        set name(value){
            if(value.length<3){
                throw new Error
            }
            this._name=value;
        },
        toString: function(){
            return this.name+' '+this.age;
        }
    };
    return animal;
}());

var someAnimel=Object.create(animal).init('Pesho',5); //Instancira obecta

console.log(someAnimel);

var cat=(function(parent) {
   //var cat= Object.defineProperties(parent,'init',{
   //     init: function(name,age,sleep){
   //         var animal= Object.create(parent).init.call(this,name,age);
   //         animal.sleep=sleep;
   //         return animal;
   //     },
   //     jumps:{
   //         value:true
   //     }
   // });
   // return cat;
    var cat=Object.create(parent);
    cat.init=function(name,age,sleep){
        parent.init.call(this,name,age);
        this.sleep=sleep;
        return this;
    };
    cat.toString=function(){
        var baseResult=parent.toString.call(this);
        return baseResult+ ' '+ this.sleep;
    }
})(animal);

Object.defineProperties(car,'wheels',{
    get: function(){
        return this._wheels;
    },
    set:function(value){
        if(value>4){

        }
    }
});
var vehicl=(function(){
var vehicle={};
    vehicle.init=function(brand){
        this.brand=brand;
        return this;
    };
    vehicle.move=function(){
        console.log('move');
    };
    return vehicle;
})();
var car=(function(parent){

    var car=Object.create(parent);
   //car.init:function(brand,weels){
    //}
})(vehicl);
for(var key in someCar){
    console.log()
}