(function(){
    var Termo=(function (){

        var temperature=null,
            array=[];

        Object.defineProperties(this,{
            temperature: {
                enumerable: true,
                get: function(){
                    return temp;
                },
                set: function(){

                }
            }
        })

    });


    var therm=new Termo();
    therm.temperature=21;
    console.log(therm.temperature)
}());
