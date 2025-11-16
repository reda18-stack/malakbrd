document.getElementById("generateCard").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let theme = document.getElementById("theme").value;

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  let cardTitle = document.getElementById("cardTitle");
  let cardMessage = document.getElementById("cardMessage");
  let cardIcon = document.getElementById("cardIcon");
  let card = document.getElementById("card");
  let cardImages = document.getElementById("cardImages");

  let themeMessages = {
    birthday: {
      message: `🎂 Happy Birthday, ${name}! 🎉 3o9ba l 100 3am nchaelah wbnnnaja7 yarby wbach ma tmnniti w li fkhatrk yystajblk lih sidi rbi yaaaarby💕`,
      icon: "🎂"
    },
    congratulations: {
      message: `🎉 Congratulations, ${name}! 🏆 Keep shining and achieving great things!`,
      icon: "🏆"
    },
    love: {
      message: `❤️ Dear ${name}, Lah yhnnik mn tsahib hkhkhkhhhhhhhhhhh`,
      icon: "❤️"
    },
    friendship: {
      message: `🤗 Hey ${name}! ahsan malak wdima malak w solo malak`,
      icon: "🤗"
    }
  };

  let selectedTheme = themeMessages[theme];
  
  // Set card text
  cardTitle.innerText = `${selectedTheme.icon} ${
    theme.charAt(0).toUpperCase() + theme.slice(1)
  } Greeting`;
  
  cardMessage.innerText = selectedTheme.message;
  cardIcon.innerText = selectedTheme.icon;

  // Clear old images
  cardImages.innerHTML = "";

  // Add local images if birthday is selected
  if (theme === "birthday") {
    let birthdayImages = [
      "images/malak3.jpeg",
      "images/malak4.jpeg",
      "images/malak1.jpeg",
    ];

    birthdayImages.forEach((src, index) => {
      let img = document.createElement("img");
      img.src = src;
      img.alt = "Birthday Image";
      cardImages.appendChild(img);
      
      // Add staggered animation
      setTimeout(() => {
        img.style.animation = "imageFadeIn 0.6s ease-out";
      }, index * 200);
    });
    
    // Add confetti for birthday theme
    createConfetti();
  }

  card.style.display = "block";
});

function createConfetti() {
  const colors = ['#ff4081', '#d81b60', '#ff9800', '#4caf50', '#2196f3'];
  const card = document.getElementById("card");
  
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 10 + 5 + "px";
    confetti.style.height = Math.random() * 10 + 5 + "px";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
