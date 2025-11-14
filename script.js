document.getElementById("generateCard").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let theme = document.getElementById("theme").value;

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  let cardTitle = document.getElementById("cardTitle");
  let cardMessage = document.getElementById("cardMessage");
  let card = document.getElementById("card");
  let cardImages = document.getElementById("cardImages");

  let themeMessages = {
    birthday: `🎂 Happy Birthday, ${name}! 🎉 3o9ba l 100 3am nchaelah wbnnnaja7 yarby wbach ma tmnniti w li fkhatrk yystajblk lih sidi rbi yaaaarby💕`,
    congratulations: `🎉 Congratulations, ${name}! 🏆 Keep shining and achieving great things!`,
    love: `❤️ Dear ${name}, Lah yhnnik mn tsahib hkhkhkhhhhhhhhhhh`,
    friendship: `🤗 Hey ${name}! ahsan hafsa wdima hafsa w solo hafsa `,
  };

  // Set card text
  cardTitle.innerText = `💌 ${
    theme.charAt(0).toUpperCase() + theme.slice(1)
  } Greeting`;
  cardMessage.innerText = themeMessages[theme];

  // Clear old images
  cardImages.innerHTML = "";

  // Add local images if birthday is selected
  if (theme === "birthday") {
    let birthdayImages = [
      "images/malak3.jpeg",
      "images/malak4.jpeg",
      "images/malak1.jpeg",
    ];

    birthdayImages.forEach((src) => {
      let img = document.createElement("img");
      img.src = src;
      img.alt = "Birthday Image";
      cardImages.appendChild(img);
    });
  }

  card.style.display = "block";
});
