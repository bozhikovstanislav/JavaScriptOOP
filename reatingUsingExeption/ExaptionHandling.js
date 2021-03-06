function throwException(type) {
    switch (type) {
        case "type":
            5();
            break;
        case "reference":
            nonExistingFunction();
            break;
        case "syntax":
            eval("var q = 5 var a = q;");
            break;
    }
}

try {
    //throwException("type");
    throwException("reference");
    //throwException("syntax");
} catch (ex) {
    console.log("---------------");
    console.log("Exception object: " + ex);
    console.log("Type: " + ex.name); // Available in every browser (standard property)
    console.log("Message: " + ex.message); // Available in every browser (standard property)
    console.log("Stack trace: " + (ex.stack || "no stack trace property (only new ones have)..."));
    console.log("File name: " + (ex.fileName || "no file name property (only Firefox has)..."));
    console.log("---------------");
}