let colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"]; 
let i = 0; 

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}
   /* var elem = document.getElementById("www");
    elem.style.fontSize = "220px"; 



*/