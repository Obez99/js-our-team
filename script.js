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
const cardImage = document.querySelector(".card-image")
const cardText = document.querySelector(".card-text")

for (let key in members) {
  const card = document.createElement("div")
  card.classList.add("team-card")
  teamContainer.append(card)

  const cardImageElement = document.createElement("div")
  cardImageElement.classList.add("card-image")
  card.append(cardImageElement)

  const cardTextElement = document.createElement("div")
  cardTextElement.classList.add("card-text")
  card.append(cardTextElement)

  const cardImageTag = document.createElement("img")
  cardImageTag.src = members[key]["image"]
  cardImageElement.append(cardImageTag)

}