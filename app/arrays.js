exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    while(arr.indexOf(item) > -1){
    var inex = arr.indexOf(item);
    arr.splice(inex, 1);
  }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    arr.splice(arr.length-1,1)
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail : function(arr) {
    arr.shift();
    return arr
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr
  },

  count : function(arr, item) {
    var count = 0;
    for(i=0;i<arr.length;i++){
      if(arr[i]==item){
        count +=1
      }
    }
    return count
  },

  duplicates : function(arr) {
    dublicates = [];
    for(i=0;i<arr.length;i++){
      check = arr[i];
      for(j=0;j<arr.length;j++){
        if(arr[i] == arr[j] && i != j && dublicates.indexOf(arr[j]) == -1){
          dublicates.push(arr[j])
        }
      }
    }
    return dublicates
  },

  square : function(arr) {
    squarearray = [];
    for(i=0;i<arr.length;i++){
      squarearray.push(arr[i]*arr[i])
    }
    return squarearray
  },

  findAllOccurrences : function(arr, target) {
    indices = [];
    for(i=0;i<arr.length;i++){
      if(arr[i] == target){
        indices.push(i)
      }
    }
    return indices
  }
};
