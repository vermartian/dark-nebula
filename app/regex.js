exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var re = /\d/;
    var found = str.match(re);
    if(found != null){
      return true
    }
    else{
      return false
    }
  },

  containsRepeatingLetter : function(str) {
    var re = /(\D)\1+/
    var found = str.match(re)
    if(found != null){
      return true
    }
    else{
      return false
    }
  },

  endsWithVowel : function(str) {
    var re = /[aeiouAEIOU]/
    var found = str[str.length-1].match(re)
    if(found != null){
      return true
    }
    else{
      return false
    }
  },

  captureThreeNumbers : function(str) {
    var re = /\d{3}/
    var found = str.match(re)
    if(found != null){
      return found[0]
    }
    else{
      return false
    }

  },

  matchesPattern : function(str) {
    var re = /^\d{3}\-\d{3}\-\d{4}$/
    var found = str.match(re)
    if(found != null){
      return true
    }
    else{
      return false
    }

  },

  isUSD : function(str) {
    var re = /^\$\d{1,3}([,]\d{3})*([.]\d{2}|[,]\d{3})$/
    var found = str.match(re)
    if(found != null){
      return true
    }
    else{
      return false
    }
  }
};
