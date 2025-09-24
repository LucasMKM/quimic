document.querySelector('#button1').addEventListener('click', verficar_resposta);

let proxima = document.getElementById('proxima')

let or = 1

function verficar_resposta () {

let perguntas1 = document.querySelector('input[name="perguntas1"]:checked');

let erro = document.getElementById('mensagemErro');
let erro1= document.getElementById('mersagep');
let resposta = document.querySelector('.reposta')
let puro = document.querySelector('#puro_suco')

if(!perguntas1){

    erro.textContent='selecione alguma opção';
    document.getElementById('mensagemErro').textContent = '';
     document.getElementById('mersagep').textContent = '';
     resposta.textContent= ''

    return;
}

if(or == 1){

if(perguntas1.id == 'pergunta2'){

    erro.style.display="flex"

     erro.textContent ='acertou'

    erro1.style.display='none'

    erro.style.color='black'

    document.querySelector('.reposta').textContent = '';
    
    proxima.style.left='0px'

    setTimeout(proxima_pergunta, 1000)

}

else {

    erro.style.display='none'

    erro1.style.display="flex"

    erro1.textContent='errou'
    
    erro1.style.color='red'

    resposta.textContent= 'A água oxigenada é composta por dois átomos de hidrogênio e dois átomos de oxigênio, daí a fórmula H₂O₂. H₂O é a água comum.'

    proxima.style.left='10000px'

}

}

if(or == 2){

    if(perguntas1.id == 'pergunta1'){

    erro.style.display="flex"

     erro.textContent ='acertou'

    erro1.style.display='none'

    erro.style.color='black'
   
    proxima.style.left='0px'

    setTimeout(proxima_pergunta, 1000)

}

else {

    erro.style.display='none'

    erro1.style.display="flex"

    erro1.textContent='errou'
    
    erro1.style.color='red'

    resposta.textContent= 'Justificativa: Em baixas concentrações (3-10%), o H₂O₂ é amplamente utilizado como antisséptico para limpar e desinfetar pequenos cortes e feridas, devido à sua ação oxidante que mata microrganismos.'

    proxima.style.left='10000px'

    }
}

if(or == 3){

    if(perguntas1.id == 'pergunta3'){

    erro.style.display="flex"

     erro.textContent ='acertou'

    erro1.style.display='none'

    erro.style.color='black'

    proxima.style.left='0px'
   
    setTimeout(proxima_pergunta, 1000)

}

else {

    erro.style.display='none'

    erro1.style.display="flex"

    erro1.textContent='errou'
    
    erro1.style.color='red'

    proxima.style.left='10000px'

    resposta.textContent= 'O H₂O₂ é um oxidante forte. Ele quebra as ligações químicas dos pigmentos (corantes) que compõem as manchas, tornando-as incolores, daí seu uso para clarear cabelos e branquear dentes e tecidos.'

    }
}

if(or == 4){

    if(perguntas1.id == 'pergunta2'){

    erro.style.display="flex"

     erro.textContent ='acertou'

    erro1.style.display='none'

    erro.style.color='black'
   

    setTimeout(proxima_pergunta, 1000)

}

else {

    erro.style.display='none'

    erro1.style.display="flex"

    erro1.textContent='errou'
    
    erro1.style.color='red'

    resposta.textContent= 'explicação'

    }
}

function proxima_pergunta (){

 let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
    let pergunta1 = document.querySelector('.pergunta12')
    let pergunta2 = document.querySelector('.pergunta13')
    let pergunta3 = document.querySelector('.pergunta15')

    if(!document.getElementById('proxima_pergunta')){
        
        proxima.onclick = () => {
                
        document.getElementById('mensagemErro').textContent = '';
     document.getElementById('mersagep').textContent = '';
     resposta.textContent= ''


      or++

      if (or == 2){

        puro.innerHTML='Qual é a principal aplicação doméstica mais comum da solução aquosa de H₂O₂ a 3%?';
        pergunta1.innerHTML ='a) Desinfetar ferimentos (antisséptico)';
        pergunta2.innerHTML='b) Limpar metais';
        pergunta3.innerHTML='c) Lustrar móveis';
        proxima.style.left= '10000px'
      }

      if (or == 3){

        puro.innerHTML='Por que o H₂O₂ é considerado um agente branqueador?'
        pergunta1.innerHTML ='a) Porque adiciona cor aos tecidos';
        pergunta2.innerHTML='b) Porque remove manchas através da redução';
        pergunta3.innerHTML='c) Porque oxida compostos coloridos, clareando-os';
        proxima.style.left= '10000px'

      }

      if(or ==4){

        puro.innerHTML='🎉 PARABÉNS PELA VITÓRIA NO QUIZ! 🎉 Você arrasou! Mostrou que tem conhecimento na ponta da língua! 💡Cada acerto é uma prova do seu potencial. Que orgulho! Que essa vitória seja o primeiro degrau de muitas conquistas por vir. Você merece comemorar – mesmo que seja com um sorriso satisfeito aí daí! Campeão/Campeã de hoje, estrela de sempre! ⭐Parabéns! 👏'

      }

        };

    }

}

}

