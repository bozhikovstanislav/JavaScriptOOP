var databases=(function () {
  //var items=[]
    var db= {
            items:[],
            add: function (item) {
                this.items.push(item); //bes this
               // return this; //Ne e security good
                return db;
            },
            list: function () {
                return this.items.slice();
            }

        };

    return {
        get: function () {
            return db;
        }
    }
}());

console.log(databases.get()
        .add('Hoh')
        .add('Jhon')
    .list()
);
console.log(databases.get()
        .add('Hohn 1')
        .add('John 1')
        .list()
);


//Проверка н нещо далие undefine
if(typeOf(instance)==='undefine'){
     instace={
            result: 0,
         add: function (x) {
             this.result+=x;
         }
     };
}