function crearCarta(listaPersonajes) {
  const charRow = document.querySelector(".row");
  const charColumn = document.createElement("li");
  charColumn.className = "character col";
  charRow.append(charColumn);
  const card = document.createElement("div");
  card.className = "card character__card";
  charColumn.append(card);
  charRow.append(charColumn);
  const charImg = document.createElement("img");
  charImg.className = "character__picture card-img-top";
  card.append(charImg);
  const charBody = document.createElement("div");
  charBody.className = "card-body";
  card.append(charBody);
  const charTitle = document.createElement("h2");
  charTitle.className = "character__name card-title h4";
  charBody.append(charTitle);
  const charInfo = document.createElement("div");
  charInfo.className = "character__info";
  charBody.append(charInfo);
  const charDetails = document.createElement("ul");
  charDetails.className = "list-unstyled";
  charInfo.append(charDetails);
  const charAge = document.createElement("li");
  const charStatus = document.createElement("li");
  charDetails.append(charAge, charStatus);
  const charAlive = document.createElement("id");
  charAlive.className = "fas";
  charStatus.append(charAlive);
}