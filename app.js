
const eyes = document.getElementsByClassName("eilinir");

document.onmousemove=function(){
    let x=event.clientX*100/window.innerWidth+"%"
    let y=event.clientY*100/window.innerHeight+"%"

    for(let i=0;i<2;i++){

        eyes[i].style.top=y;
        eyes[i].style.left=x;
        eyes[i].style.transform="translate(-"+x+","+y+"-)";


    }


}