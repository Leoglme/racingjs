let date = new Date(Date.now() + 86400000);
date = date.toUTCString();
let original = document.querySelector("footer > div");
let content = original.innerHTML;
let clone = original.cloneNode(true);
let linkcookie = document.querySelector("footer > div > a");

linkcookie.onclick = function () {
    let setcookie = document.cookie = "acceptsCookies; expires=" + date + "; samesite=lax;";
    setcookie = true;
    original.parentNode.appendChild(clone);
    clone.innerHTML = '<button id="deletecookie" type="button" name="button">Supprimer le cookie</button>';
    original.innerHTML = '';
    document.getElementById("deletecookie").onclick = function () {
        reset()
    };
    console.log(setcookie);
};


function reset() {
    original.parentNode.removeChild(clone);
    original.innerHTML = content;
    setcookie = document.cookie = "; expires=Wed, 23 Dec 1970 19:11:58 GMT; samesite=lax;";
}
