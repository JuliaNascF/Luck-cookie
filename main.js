


const btn = document.querySelector("#biscoito");
const frases = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Quem quer colher rosas deve suportar os espinhos.",
    "Acredite em milagres, mas não dependa deles.",
    "Não compense na ira o que lhe falta na razão.",
    "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo."
];
    /* adicionei um evento de clique ao botão, quando o usuario clica no biscoito, 
    o evento de clique é acionado e o código dentro do evento é feito  */
    btn.addEventListener("click", function() {
        document.querySelector(".screen1").classList.add("display-none");
        document.querySelector(".screen2").classList.remove("display-none");
        const sorte = document.querySelector(".sorte");
        // gera um número aleatório entre 0 e o tamanho do array de frases - 1
        const numAleatorio = Math.floor(Math.random() * frases.length);
        // atualiza o texto da div sorte com a frase selecionada
        sorte.innerHTML = frases[numAleatorio];
        
        
    });
    function btnReset(){
        document.querySelector(".screen2").classList.add("display-none");
        document.querySelector(".screen1").classList.remove("display-none");
    }