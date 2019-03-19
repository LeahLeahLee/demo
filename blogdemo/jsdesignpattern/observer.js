var Observer = (function () {
    var _massage = {}
    return{
        register:function (typ,fn) {
            if(!_massage[typ]){
                _massage[typ] = [];
            }
            _massage[typ].push(fn);
            return this;
        },
        publish:function (typ,data) {
            if (!_massage[typ]){
                for (var i = 0,len = _massage[typ].length;i<len;i++){
                    _massage[typ][i](data);
                }
            } 
        },
        remove:function (typ,fn) {
            if(!_massage[typ]){
                for(var i = 0,len = _massage[typ].length;i<len;i++){
                    _massage[typ][i] == fn && _massage[typ].splice(i,1);
                }
            }
            return this;
        }
    }
})();