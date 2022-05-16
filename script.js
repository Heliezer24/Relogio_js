const relogioTela = document.getElementById("relogio");

setInterval(hora,1000);
function hora() {
    const data = new Date().toLocaleTimeString();

    relogioTela.innerHTML = data;

    //let horadia = data.split("");
    
   const agora = new Date().getHours();
    if (agora < 12) {
      document.getElementById("img").src="img/bom.jpg";
      document.getElementById("img").alt = "Bom Dia";

    } else {
      document.getElementById("img").src="img/boa.jpg";
      document.getElementById("img").alt = "Boa Tarde";
    }
}


