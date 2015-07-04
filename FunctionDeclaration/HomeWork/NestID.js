var getNextID;
getNextID = function () {
    var lastId = 0; //вижда се само от функцията но не и отвън
    return function () {
        return lastId += 1;
    }
}();
console.log(getNextID());
console.log(getNextID());
console.log(getNextID());

var generator;
generator = function () {
    var lastId = 0;
    return {
        getNextId: function () {
            return lastId += 1;
        }
    };
}();
console.log(generator.getNextId());
console.log(generator.getNextId());
console.log(generator.getNextId());
console.log(generator.getNextId.call(this));
console.log(generator.getNextId.call(this));