function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    console.log(longestWord)
    return longestWord;
  }
  findLongestWord("The darryl jumped over the big donkey-minotaur");