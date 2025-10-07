
const button01 = document.getElementById('button01')

button01.addEventListener("click", clicktoalert)


function clicktoalert(){
    alert("clicked")

}

const gfl2logo = document.getElementById('gfl2logo')

gfl2logo.addEventListener("click", directtohomepage)

function directtohomepage(){
    window.location.replace('./index.html');
}






const characterbutton = document.getElementById('Character')

characterbutton.addEventListener("click", directtocharacterpage) //Go to Character Page

function directtocharacterpage(){
    window.location.replace('./characterpage.html');
}


const Guidebutton = document.getElementById('Guides')

Guidebutton.addEventListener("click", directtoguide)

function directtoguide(){
    window.location.replace('./guidepage.html');
} 


const Remold101button = document.getElementById('basicremold')

Remold101button.addEventListener("click", directtobasicremold)

function directtobasicremold(){
    window.location.replace('./basicremold.html');
}


