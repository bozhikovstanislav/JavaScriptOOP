var db=(function () {
    var lastId= 0,
        objects=[];
    function getNextId() {
        return ++lastId;
    }
    return {
        add: function (obj) {
            obj.id=getNextId();
            objects.push(obj);
        },
        list: function () {
            // return objects.slice(); //����� �� ����� �� ������retur
            return objects.map(function (obj) {
                return {
                    name: obj.name,
                    id: obj.id
                };

            }).slice();
        }
    }
}());
db.add({name:'Jhon'});
db.add({name:'Jhon2'});
//evil hacker

var objs=db.list();
objs.push({name:'Hacked u'});
console.log(db.list());

objs[0].age=-1; // �� � ����� // ������ �� � deep copy
console.log(db.list());


