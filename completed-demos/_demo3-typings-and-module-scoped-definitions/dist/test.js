var myModule;
(function (myModule) {
    var x = 3;
    function myFunc() {
        return 'Hello!';
    }
    myModule.myFunc = myFunc;
})(myModule || (myModule = {}));
