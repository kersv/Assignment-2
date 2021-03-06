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
  
  // INDEXOF //
  Array.prototype.myIndexOf = function(item, begin) {
    let start = 0;
    let length = this.length;
    let indx = -1;
    if(begin === undefined){
        for(let i = 0; i < length; i++){
            if(this[i] == item){
                indx = i;
                break;
            }
        }
    }
    else if(begin < 0){
        start = length + begin;
        for(let i = start; i < length; i++){
            if(this[i] == item){
                indx = i;
                break;
            }
        }
    }
    else{
        start = begin;
        for(let i = start; i < length; i++){
            if(this[i] == item){
                indx = i;
                break;
            }
        }
    }
    return indx;
};
  
  // PUSH //
  Array.prototype.myPush = function(...args) {
    let args_index = 0; 
    let length = this.length; 
    for(let i = length; i < length + args.length; i++){
        this[i] = args[args_index];
        args_index++;
    }
    return this.length;
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function(item, begin) {
    let length = this.length;
    let indx = -1;
    let start = length -1;
    if(begin === undefined){
        for(let i = start; i > -1; i--){
            if(this[i] == item){
                indx = i;
                break;
            }
        }
    }
    else if(begin < 0){
        start = begin + length;
        for(let i = start; i > -1; i++){
            if(this[i] == item){
                indx = i;
                break;
            }
        }
    }

    else{
        for(let i = start; i > -1; i--){
            if(this[i] == item){
                indx = i;
                break;
            }
        }
    }
    return indx;
  };
  
  // KEYS //
  Object.myKeys = function(obj) {
    const new_array = [];
    for(key in obj){
        new_array.push(key);
    }
    return new_array;
  };
  
  // VALUES //
  Object.myValues = function(obj) {
    const new_array = [];
    for(key in obj){
        new_array.push(obj[key]);
    }
    return new_array;
  };