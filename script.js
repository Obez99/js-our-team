const members =
  [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      image: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
      name: "Angela Caroll",
      role: "Chief Editor",
      image: "img/angela-caroll-chief-editor.jpg"
    },

    {
      name: "Walter Gordon",
      role: "Office Manager",
      image: "img/walter-gordon-office-manager.jpg"
    },

    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      image: "img/angela-lopez-social-media-manager.jpg"
    },

    {
      name: "Scott Estrada",
      role: "Developer",
      image: "img/scott-estrada-developer.jpg"
    },

    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      image: "img/barbara-ramos-graphic-designer.jpg"
    }
  ]

const teamContainer = document.querySelector(".team-container");

for (let key in members) {
  const card = document.createElement("div")
  card.classList.add("team-card")
  teamContainer.append(card)

  const cardImage = document.createElement("div")
  cardImage.classList.add("card-image")
  card.append(cardImage)

  const cardText = document.createElement("div")
  cardText.classList.add("card-text")
  card.append(cardText)

  const cardImageTag = document.createElement("img")
  cardImageTag.src = members[key]["image"]
  cardImageTag.alt = members[key]["name"]
  cardImage.append(cardImageTag)

  const cardTitle = document.createElement("h3")
  cardTitle.innerHTML += members[key]["name"]
  cardText.append(cardTitle)

  const cardRole = document.createElement("p")
  cardRole.innerHTML += members[key]["role"]
  cardText.append(cardRole)

}