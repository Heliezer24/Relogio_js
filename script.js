const relogioTela = document.getElementById("relogio");

setInterval(hora,1000);
function hora() {
    const data = new Date().toLocaleTimeString();

    relogioTela.innerHTML = data;

    let horadia = data.split("");

    const agora = horadia[1];

    if (agora < 12) {

      console.log("Bom dia")
      //document.body.style.backgroundColor = "red";

    } else {

      console.log("Boa Tarde")
      //document.body.style.backgroundColor = "white";

    }
}


