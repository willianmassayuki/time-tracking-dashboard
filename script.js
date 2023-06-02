let classWork = document.querySelectorAll(".work__frente")
let classPlay = document.querySelectorAll(".play__frente")
let classStudy = document.querySelectorAll(".study__frente")
let classExercise = document.querySelectorAll(".exercise__frente")
let classSocial = document.querySelectorAll(".social__frente")
let classSelf = document.querySelectorAll(".self__frente")

var contador = -1;

function mostraTempos(classe, indice){
  fetch("data.json").then((response) =>{
      response.json().then((indices) => {
        //  indices.map((indice) =>        
        //      classindice.innerHTML += `<li>${indice.title} - ${indice.timeframes.daily.current}hrs Last week - ${indice.timeframes.daily.current} hrs</li>`
        //  })
        for (i=1; i <= 3; i++){
          if (i == 1){
            classe[i].innerHTML += `<h2 class="diario">${indices[indice].timeframes.daily.current}hrs</h2>` + 
              `<p class="diario">Yesterday - ${indices[indice].timeframes.daily.previous}hrs</p>`;
          }else if(i == 2){
              classe[i].innerHTML += `<h2 class="semanal">${indices[indice].timeframes.weekly.current}hrs</h2>` + 
              `<p class="semanal">Last week - ${indices[indice].timeframes.weekly.previous}hrs</p>`;
          }else{
              classe[i].innerHTML += `<h2 class="mensal">${indices[indice].timeframes.monthly.current}hrs</h2>` + 
              `<p class="mensal">Last Month - ${indices[indice].timeframes.monthly.previous}hrs</p>`;
          }
        }
        contador++;
        console.log(contador);
      })
  })
}




mostraTempos(classWork,0);
mostraTempos(classPlay,1);
mostraTempos(classStudy,2);
mostraTempos(classExercise,3);
mostraTempos(classSocial,4);
mostraTempos(classSelf,5);

const botaoDiario = document.querySelector('#botaoDiario');
const botaoSemanal = document.querySelector('#botaoSemanal');
const botaoMensal = document.querySelector('#botaoMensal');
const diario = document.querySelectorAll('.diario');
const semanal = document.querySelectorAll('.semanal');
const mensal = document.querySelectorAll('.mensal');

botaoDiario.addEventListener('click', () => {
  botaoDiario.style.color = "red";
  botaoSemanal.style.color = "black";
  botaoMensal.style.color = "black";
  for(i = contador; i > 0 ; i = i - 1){
    diario[contador].classList.remove('inativo');
    semanal[contador].classList.add('inativo');
    mensal[contador].classList.add('inativo');
  }
})

botaoSemanal.addEventListener('click', () => {
  botaoDiario.style.color = "black";
  botaoSemanal.style.color = "red";
  botaoMensal.style.color = "black";
  for(i = contador; i > 0 ; i = i - 1){
    diario[contador].classList.add('inativo');
    semanal[contador].classList.remove('inativo');
    mensal[contador].classList.add('inativo');
  }
})

botaoMensal.addEventListener('click', () => {
  botaoDiario.style.color = "black";
  botaoSemanal.style.color = "black";
  botaoMensal.style.color = "red";
  for(i = contador; i > 0 ; i = i - 1){
    diario[contador].classList.add('inativo');
    semanal[contador].classList.add('inativo');
    mensal[contador].classList.remove('inativo');
  }
})