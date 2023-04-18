
//menu

//variaveis
const btnMobile = document.querySelector('.btn-mobile');

//funções
function toggleMenu(event){
  if (event.type === 'touchstart')event.preventDefault(); 

  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
   event.currentTarget.setAttribute('aria-expanded', active);

  if(active) { 
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu'); 
  }else{ event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
   } 
  }

  //eventos
   btnMobile.addEventListener('click', toggleMenu);
   btnMobile.addEventListener('touchstart', toggleMenu);
 

   //declarações
   const fecharLogin = document.getElementById("fechar-login-area")
   const fecharLoginAnimate = document.querySelector(".fechar-animation")
   const buttonAceitarCookies = document.querySelector(".cookies-accept-btn")
   const containerCookies = document.querySelector(".cookies-container")
   const formControl = document.querySelector(".form-control");
   const labelAnima = document.querySelector("#form-control-placeholder")
   const labelAnima1 = document.querySelector
   ("#form-control-placeholder-1")
   const labelAnima2 = document.querySelector("#form-control-placeholder-2")
   const inputEmail = document.querySelector("#input-email")
   const containerPrivacidade = document.querySelector("#container-politica-privacidade")
   const fecharPrivacidade = document.querySelector("#fechar-privacidade")
   const inputNome = document.querySelector("#input-nome")
   const inputCPF = document.querySelector("#input-cpf")
   const btnPrivacidade = document.querySelector(".cookies-privacidade-btn")
   const containerEnviado = document.querySelector(".container-enviado")
   const btnEnviarAnimation = document.querySelector("#btn-enviar-animation")
   const formFaleConsco = document.querySelector("#form-fale-conosco")
   const header = document.getElementById("header")

   //functions
   function aceitarCokies(){
       containerCookies.style.display = "none"
   }
   function mostrarPrivacidade(){
     containerCookies.style.display = "none"
     containerPrivacidade.style.display = "flex"
   }
   function fecharLoginEntrar(){
       fecharLoginAnimate.classList.add("animate-entrar");

       if(fecharLoginAnimate.classList.contains("animate-sair")){
       fecharLoginAnimate.classList.remove("animate-sair");
       }
   }
   function validade(){
   if (this.value) {
       this.classList.add("valid")
   } else {
       this.classList.remove("valid")
   }
   }
   
   function fecharLoginSair(){
       fecharLoginAnimate.classList.remove("animate-entrar")
       fecharLoginAnimate.classList.add("animate-sair");
   }
   function animacaoPlaceholder(){
       if(inputNome.value != ""){
           labelAnima.classList.add("label-active")
       }if(inputEmail.value != ""){
           labelAnima1.classList.add("label-active")
         
       }if(inputCPF.value != ""){
         labelAnima2.classList.add("label-active")
       }
   }
   function fechaTermos(){
    containerPrivacidade.style.display = "none"
   }
    function enviadoMenssagem(event){
        event.preventDefault()
        header.scrollIntoView({behavior: "smooth"})
        containerEnviado.classList.add('hide')
    }
 

   //eventos
   btnPrivacidade.addEventListener("click", mostrarPrivacidade)
   fecharPrivacidade.addEventListener("click", fechaTermos)
   fecharLogin.addEventListener("mouseenter", fecharLoginEntrar)
   fecharLogin.addEventListener("mouseleave", fecharLoginSair)
   buttonAceitarCookies.addEventListener("click", aceitarCokies)
   formControl.addEventListener("input", validade);
   inputNome.addEventListener("input", animacaoPlaceholder)
   inputEmail.addEventListener("input", animacaoPlaceholder)
   inputCPF.addEventListener("input", animacaoPlaceholder)
   formFaleConsco.addEventListener("submit", enviadoMenssagem)
