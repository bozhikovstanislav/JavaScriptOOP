var db=(function () {
    var lastId= 0,
        objects=[];

    function getNextId() {
        return ++lastId;
    }

    function addObjects(obj){
        obj.id=getNextId();
        objects.push(obj);
    }

    function listObjects(){
        return objects.map(function (obj) {
            return {
                name: obj.name,
                id: obj.id
            };

        }).slice();
    }
    return {
        add: addObjects,
        list:listObjects
        //getNextId: getNextId
    }
}());
db.add({name:'Jhon'});
db.add({name:'Jhon2'});
//evil hacker

var objs=db.list();
objs.push({name:'Hacked u'});
console.log(db.list());

objs[0].age=-1; // не е добре // оправя се с deep copy
console.log(db.list());


//Evel hacker

db.add=function(obj){
    console.log(obj);
};
db.add({name:'Gosho'});