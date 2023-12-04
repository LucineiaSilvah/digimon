const url ='https://digimon-api.vercel.app/api/digimon';

const lista = document.querySelector('ol')
let resposta ='';
fetch(url).then(res =>  res.json()).then(dados=> {
  
  dados.map(dado => {
    
      lista.innerHTML += `
          <li class='digimom'>
            <div class='detail'>
            <span class='nome'>${dado.name}</span>
            <span class='level'>Level:<br>${dado.level}</span>
            </div>
            <img src="${dado.img}" alt="">
          </li>`
      
  })
  return resposta = dados;
})

let entrada = document.querySelector('input');

let btn = document.querySelector('#buscar');


function buscar(nome){

let itensFiltrados = resposta.filter(item => item.name.toLowerCase() === nome.toLowerCase())

  console.log( itensFiltrados[0].name);
    lista.innerHTML = `
             <li class='digimom'>
               <div class='detail'>
               <span class='nome'>${itensFiltrados[0].name}</span>
               <span class='level'>Level:${itensFiltrados[0].level}</span>
               </div>
               <img src="${itensFiltrados[0].img}" alt="">
             </li>`

 
}








btn.addEventListener('click', ()=>{
 
  buscar(entrada.value)
  entrada.value='';
})