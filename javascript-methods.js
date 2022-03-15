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
  
  // REDUCE //
  Array.prototype.myReduce = function(callback, begin) {
      var total = 0; 
      var temp = 0;

      if(begin != undefined){
          total = begin;
      }
      else{
          total = this[0];
          temp++;
      }

      for(let i = 0; i < this.length; i++){
          total = callback(total, this[i], i, this);
      }
      return total;
  };
  
  // INCLUDES //
  Array.prototype.myIncludes = function(callback) {
      let exist = false;
      for(let i = 0; i < this.length; i++){
          if(this[i] === callback){
              exist = true;
          }
      }
      return exist;
    
  };
 