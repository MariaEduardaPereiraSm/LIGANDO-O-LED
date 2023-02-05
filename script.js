function onRadioPress() {

  const cabecaLed = document.getElementById("cabeca");
  const baseLed = document.getElementById("base");
  

  const vermelho = document.getElementById("red");

      vermelho.addEventListener("click", function () {
        cabecaLed.className = "cabeca red red-light";
        baseLed.className = "base red";
        const botao = document.getElementById("red");
       botao.style.backgroundColor = "red";
      }
      )
    
   

 
  const verde = document.getElementById("green");
  verde.addEventListener("click", function () {
    cabecaLed.className = "cabeca green green-light";
    baseLed.className = "base green";
    const botao = document.getElementById("green");
    botao.style.backgroundColor = "green";

  })
  const azul = document.getElementById("blue");
  azul.addEventListener("click", function () {
    cabecaLed.className = "cabeca blue blue-light";
    baseLed.className = "base blue";
    const botao = document.getElementById("blue");
    botao.style.backgroundColor = "blue";


  })
  const amarelo = document.getElementById("yellow");
  amarelo.addEventListener("click", function () {
    cabecaLed.className = "cabeca yellow yellow-light";
    baseLed.className = "base yellow";
    const botao = document.getElementById("yellow");
    botao.style.backgroundColor = "yellow";

  })
}