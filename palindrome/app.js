function palindrome(str) {
    var regex = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regex, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          console.log('false') ;
      } else {
        console.log('true')
      }
    };
   }
   palindrome("never odd or even");