const messages = [
    " ",
    // "Cinta itu bukan hanya soal kata-kata, tapi juga perhatian kecil. Semoga setiap hal kecil hari ini bisa membawa kebahagiaan untukmu. Kamu berhak mendapatkan semua yang indah 🫶🏻",
    "Aku tau kamu nggak suka coklat, jadi aku kasih sesuatu yang mungkin lebih cocok buat kamu.. 😎",
    "Bunga ini buatmu bukan sekadar karena valentine… tapi karena aku cuma pengen kasih sesuatu yang seindah, secantik, selucuk, serandom dirimu 🫣",
    "Maaf kalau bunganya cuma satu. Aku sudah berusaha buat yang lebih banyak tapi malah error, Maaf ya kalau sederhana, tapi ini tulus. 😔",
    "Oiyaa buat gerakin bunganya pakai mouse ya. teken mouse kanan untuk arahin bunganya dan teken kiri untuk geser bunganya ke mana aja 😁"
  ];
  
  let index = 0;
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");
  const nextBtn = document.getElementById("next-btn");
  const asciiContainer = document.getElementById("ascii-container");
  
  nextBtn.addEventListener("click", () => {
    index++;
    if (index < messages.length) {
      alertMessage.textContent = messages[index];
    } else {
      alertBox.style.display = "none";
      asciiContainer.classList.remove("hidden");
  
      loadAsciiScript();
    }
});
  
function loadAsciiScript() {
    const script = document.createElement("script");
    script.src = "script.js";
    document.body.appendChild(script);
}
