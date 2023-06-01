let classWork = document.querySelector(".work__frente")
let classPlay = document.querySelector(".play__frente")
let classStudy = document.querySelector(".study__frente")
let classExercise = document.querySelector(".exercise__frente")
let classSocial = document.querySelector(".social__frente")
let classSelf = document.querySelector(".self__frente")

function mostraTempos(classe, atividade){

fetch("data.json").then((response) =>{
    response.json().then((atividades) => {
      //  atividades.map((atividade) =>        
      //      classAtividade.innerHTML += `<li>${atividade.title} - ${atividade.timeframes.daily.current}hrs Last week - ${atividade.timeframes.daily.current} hrs</li>`
      //  })
      classe.innerHTML += `<h2 class="diario">${atividades[atividade].timeframes.daily.current}hrs</h2>` + 
        `<p class="diario">Yesterday - ${atividades[atividade].timeframes.daily.previous}hrs</p>`;
        classe.innerHTML += `<h2 class="semanal">${atividades[atividade].timeframes.weekly.current}hrs</h2>` + 
        `<p class="semanal">Last week - ${atividades[atividade].timeframes.weekly.previous}hrs</p>`;
        classe.innerHTML += `<h2 class="mensal">${atividades[atividade].timeframes.monthly.current}hrs</h2>` + 
        `<p class="mensal">Last Month - ${atividades[atividade].timeframes.monthly.previous}hrs</p>`;
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
const diario = document.querySelector('.work__frente');
const semanal = document.querySelector('.semanal');
const mensal = document.querySelector('.mensal');

botaoDiario.addEventListener('click', () => {
    diario.classList.add('diario-ativo')
   // semanal.classList.remove('semanal-ativo')
   // mensal.classList.remove('mensal-ativo')
})
