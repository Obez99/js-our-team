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

addCards();

addCard();




function addCards() {

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
}

function addCard() {
  const addButton = document.getElementById("addMemberButton")
  const formName = document.getElementById("name")
  const formRole = document.getElementById("role")
  const formImage = document.getElementById("image")


  addButton.addEventListener("click", function () {
    console.log(formName.value);
    console.log(formRole.value);
    console.log(formImage.value);

    const newCard = {
      name: formName.value,
      role: formRole.value,
      image: formImage.value
    }

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
    cardImageTag.src = formImage.value
    cardImageTag.alt = formName.value
    cardImage.append(cardImageTag)

    const cardTitle = document.createElement("h3")
    cardTitle.innerHTML += formName.value
    cardText.append(cardTitle)

    const cardRole = document.createElement("p")
    cardRole.innerHTML += formRole.value
    cardText.append(cardRole)

    members.push(newCard)


  })
}