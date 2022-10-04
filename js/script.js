
/*
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }
  const nome = document.querySelector('.maquina_de_escever_nome');
  typeWriter(nome);

*/


let navbar = document.querySelector(".nav")
let comunica = document.querySelector(".comunica")
let headerIcone = document.querySelector(".header_icons")
let contar = 250
let contar2 = 550

document.addEventListener('scroll', () => {
  let scroll_position = window.scrollY;
  if (scroll_position > contar) {
    navbar.classList.add("active")
   } else {
    navbar.classList.remove("active")

  }
});

document.addEventListener('scroll', () => {
  let scroll_position = window.scrollY;
  if (scroll_position > contar2) {
    comunica.style.display = "block"
    headerIcone.style.display = "none"
   } else {
    headerIcone.style.display = "block"
    comunica.style.display = "none"

    

  }
});


let menuBar = document.querySelector(".links")
document.querySelector(".fa-bars").onclick = () =>{
  menuBar.classList.add("active")
}
document.querySelector(".fa-xmark").onclick = () =>{
  menuBar.classList.remove("active")
}
window.onscroll = () =>{
  menuBar.classList.remove("active")


}

function loading(){
  document.querySelector(".processa_box").style.display = "none"
 var a = document.querySelector(".tudo")
 a.style.visibility = "visible"
 window. sr = ScrollReveal({ reset: true });
//sr.reveal(".imageScale", { duration: 1000, scale: 0.85})
sr.reveal(".primeiro_flex", { duration: 1000, distance: "150px"})
sr.reveal(".segundo_flex", { duration: 1000, distance: "100px", delay:"250"})
sr.reveal(".container_dados_pessoais", { duration: 1000, distance: "150px"})
sr.reveal(".my_service", { duration: 1000, distance: "150px"})


 
 /*
  let aparecer = document.getElementsByTagName("section")
  for(let i = 0; i < aparecer.length; i++){
    aparecer[i].style.display = "block"
  }
  
*/

}

