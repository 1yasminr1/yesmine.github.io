function sendMail() {
  // Récupération des valeurs du formulaire
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_el3rleu", "template_flucdcb", parms)
    .then(function (response) {
      alert("E-mail envoyé avec succès !");
      console.log("E-mail envoyé : ", response.status, response.text);
    })
    .catch(function (error) {
      alert("Erreur lors de l'envoi de l'e-mail.");
      console.error("Erreur : ", error);
    });
}