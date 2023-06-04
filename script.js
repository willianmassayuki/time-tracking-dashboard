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
        var dc = indices[indice].timeframes.daily.current;
        var dp = indices[indice].timeframes.daily.previous;
        var wc = indices[indice].timeframes.weekly.current;
        var wp = indices[indice].timeframes.weekly.previous;
        var mc = indices[indice].timeframes.monthly.current;
        var mp = indices[indice].timeframes.monthly.previous;

        console.log(dc);
        for (i=1; i <= 3; i++){
          if (i == 1){
            classe[i].innerHTML += `<h2 class="diario">${dc}hrs</h2>` + 
              `<p class="diario">Yesterday - ${dp}hrs</p>`;
          }else if(i == 2){
              classe[i].innerHTML += `<h2 class="semanal">${wc}hrs</h2>` + 
              `<p class="semanal">Last week - ${wp}hrs</p>`;
          }else{
              classe[i].innerHTML += `<h2 class="mensal">${mc}hrs</h2>` + 
              `<p class="mensal">Last Month - ${mp}hrs</p>`;
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
  botaoDiario.style.color = "#fff";
  botaoSemanal.style.color = "hsl(235, 45%, 61%)";
  botaoMensal.style.color = "hsl(235, 45%, 61%)";
  for(i = contador; i >= 0 ; i -= 1){
    diario[i].classList.remove('inativo');
    semanal[i].classList.add('inativo');
    mensal[i].classList.add('inativo');
  }
})

botaoSemanal.addEventListener('click', () => {
  botaoDiario.style.color = "hsl(235, 45%, 61%)";
  botaoSemanal.style.color = "#fff";
  botaoMensal.style.color = "hsl(235, 45%, 61%)";
  for(i = contador; i >= 0 ; i -= 1){
    diario[i].classList.add('inativo');
    semanal[i].classList.remove('inativo');
    mensal[i].classList.add('inativo');
  }
})

botaoMensal.addEventListener('click', () => {
  botaoDiario.style.color = "hsl(235, 45%, 61%)";
  botaoSemanal.style.color = "hsl(235, 45%, 61%)";
  botaoMensal.style.color = "#fff";
  for(i = contador; i >= 0 ; i -= 1){
    diario[i].classList.add('inativo');
    semanal[i].classList.add('inativo');
    mensal[i].classList.remove('inativo');
  }
})