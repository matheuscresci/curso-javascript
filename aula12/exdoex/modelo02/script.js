function carregar() {
  var msg = document.querySelector("div#msg");
  var img = document.querySelector("img#imagem");
  var data = new Date();
  var hora = data.getHours();

  //var hora = 22;

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = "images/manha.png";
    document.body.style.background = "#FDD09F";
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE
    img.src = "images/tarde.png";
    document.body.style.background = "#AEC7D2";
  } else {
    // BOA NOITE
    img.src = "images/noite.png";
    document.body.style.background = "#172C34";
  }
}
