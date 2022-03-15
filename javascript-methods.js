// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
  };
  
  // MAP //
  Array.prototype.myMap = function(callback) {
    const new_array = [];
    for(let i = 0; i < this.length; i++){
        var temp = callback(this[i], i, this);
        new_array[i] = temp;
    }
    return new_array;
  };
  
  // SOME //
  Array.prototype.mySome = function(callback) {
    for(let i = 0; i < this.length; i++){
        var temp = callback(this[i], i, this)
        if(temp === true){
            break;
        }
    }
    return temp;
  };
  