exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var reducedStr = "";

    for(i=0;i<str.length;i++){
      if(str[i] != str[i-1]){
      count = 0
      while(str[i] == str[i+count]){
        count += 1;
        if (count<=amount){
          reducedStr += str[i]
        }
      }
    }
      }
      return reducedStr
  },
  wordWrap: function(str, cols) {
    output = ""
    oldline = "";
    array = str.split(" ");
    for(i=0;i<array.length;i++){
      if(i == 0){
        oldline += array[i]
      }
      else if(oldline.length + array[i].length + 1 <= cols && oldline.length > 0){
        oldline += " " + array[i]
      }
      else if(i == array.length - 1){
        output += oldline + "\n" + array[i]
      }
      else {
        output += oldline + "\n";
        oldline = array[i]
      }
    }
    return output
  },
  reverseString: function(str) {
    string = "";
    for(i = str.length - 1; i > -1; i--){
      string += str[i];
    }
    return string;
  }
};
