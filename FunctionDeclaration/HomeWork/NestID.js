var getNextID;
getNextID = function () {
    var lastId = 0; //����� �� ���� �� ��������� �� �� � �����
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