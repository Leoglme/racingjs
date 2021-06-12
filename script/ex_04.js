let original = document.querySelector("footer > div");
let string = "";
let i = 0;

document.onkeypress = function() {
      string += String.fromCharCode(event.keyCode);
      original.innerHTML = string;
      if (i > 41){
          string =  string.substring(1, 43);
      }
      i++;
    };
