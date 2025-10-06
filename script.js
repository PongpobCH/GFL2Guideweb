
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

characterbutton.addEventListener("click", clicktoalert) //Go to Character Page



const Guidebutton = document.getElementById('Guides')

Guidebutton.addEventListener("click", directtoguide)

function directtoguide(){
    window.location.replace('./guidepage.html');
} 

