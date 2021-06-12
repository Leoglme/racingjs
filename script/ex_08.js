let canvas = document.querySelectorAll("footer > div > canvas");

for (let i = 0; i < 12; i++) {
    if (i < 4){
        canvas[i].style.backgroundColor = "orange";
    }else if (i < 7){
        canvas[i].style.backgroundColor = "purple";
    }else if (i < 8){
        canvas[i].style.backgroundColor = "black";
    }else if (i < 12){
        canvas[i].style.backgroundColor = "olive";
    }
}