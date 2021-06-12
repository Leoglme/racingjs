let container = document.querySelectorAll("footer > div")[1];
let inputText = document.querySelector("footer > div > input");
inputText.onkeyup = keyup;

function keyup(e) {
  inputText = e.target.value;
  container.innerHTML = inputText;

  function replace(){
    let find = [/\[B]/g , /\[U]/g , /\[S]/g , /\[\/B]/g , /\[\/U]/g , /\[\/S]/g  , /\[COLOR=<?(#\d{3}|#\d{6}|[a-zA-Z-#-9]*)>?]([^\[]*?)/g, /\[\/COLOR]/g, /\[LINK="?([^"]*?)"?]([^\[]*?)/g , /\[\/LINK]/g];
    let replace = ["<b>", '<u>', '<del>', "</b>", "</u>", "</del>",'<span style="color: $1">$2', '</span>', '<a id="bbLink" href="$1" target="_blank">$2' , "</a>"];
  for (let i = 0; i < find.length; i++){
    container.innerHTML = container.innerHTML.replace(find[i], replace[i]);
  }
  }replace();
  let balise = document.getElementById("bbLink");
  if(balise !== null){
    balise.attributes["href"].value = balise.attributes["href"].value.replace(/[<->]/g , "")
  }
}