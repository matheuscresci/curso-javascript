function verificar() {
  var data = new Date(); // data atual do pc
  var ano = data.getFullYear(); //ano com 4 digitos
  var fano = document.querySelector("input#txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente.");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto"); //para dar um id chamado foto a essa var
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "images/menino.png");
      } else if (idade < 49) {
        //Jovem
        img.setAttribute("src", "images/rapaz.png");
      } else {
        //Idoso
        img.setAttribute("src", "images/idoso.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "images/menina.png");
      } else if (idade < 49) {
        //Jovem
        img.setAttribute("src", "images/moca.png");
      } else {
        //Idoso
        img.setAttribute("src", "images/idosa.png"); //para add img
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img); //para rodar img
  }
}
