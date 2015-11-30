exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {
    function getValue() {
      if(flag == true){
        return 'a'
      }
      else{
        return 'b'
      }
    }
    return getValue();
  },

  parseInt : function(num) {
    answer = parseInt(num,10);
    return answer
  },

  identity : function(val1, val2) {
    return val1 == val2 && typeof val1 == typeof val2
  }
};
