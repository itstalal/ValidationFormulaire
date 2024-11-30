//Fonction qui change le type de l input ==> afficher (type=text) et masquer (type=password)
function AfficherMasquer(inputId, labelId) {
  const passwordInput = document.getElementById(inputId);
  const label = document.getElementById(labelId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    label.textContent = "Masquer votre mot de passe";
  } else if (passwordInput.type === "text") {
    passwordInput.type = "password";
    label.textContent = "Afficher votre mot de passe";
  }
}

function togglePassword(inputId, labelId, checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  if (checkbox) {
    AfficherMasquer(inputId, labelId);
  }
}

// Validation des champs
function validerFormulaireCreateAccount() {
  const nom = document.getElementById("Nom").value;
  const prenom = document.getElementById("Prenom").value;
  const email = document.getElementById("Email").value;
  const Validation = document.getElementById("msgValidation");

//validations des champs
  if (nom === "") {
    Validation.textContent = "le champ nom est obligatoire";
    Validation.style.color = "red";
    return false;
  }
  if (typeof nom !== "string" || !isNaN(nom)) {
    Validation.textContent =
      "Le champ Nom doit être une chaîne de caractères !";
    Validation.style.color = "red";
    return false;
  }

  if (prenom === "") {
    Validation.textContent = "le champ prenom est obligatoire";
    Validation.style.color = "red";
    return false;
  }
  if (typeof prenom !== "string" || !isNaN(prenom)) {
    Validation.textContent =
      "Le champ Prenom doit être une chaîne de caractères !";
    Validation.style.color = "red";
    return false;
  }

  if (!email.includes("@") || email.lastIndexOf(".") < email.lastIndexOf("@")) {
    Validation.textContent = "exemple de courriel: exemple@exemple.domaine ";
    Validation.style.color = "red";
    return false;
  }

  //definir le local storage
  window.localStorage.setItem("nom", nom);
  window.localStorage.setItem("prenom", prenom);
  window.localStorage.setItem("email", email);

  window.location.href = "src/continueCreateAccount.html";
  return false;
}

function validerFormulaireContinueCreateAccount() {
  const motDePasse = document.getElementById("Mot_de_passe").value;
  const CmotDePasse = document.getElementById("Confirmer_Mot_de_passe").value;
  const Validationmdp = document.getElementById("mdpValidation");
  if (motDePasse.length < 8) {
    Validationmdp.textContent = "le champ de mot de passe doit contenir plus que 8 caracteres ";
    Validationmdp.style.color = "red";
    return false;
  }

  if (motDePasse !== CmotDePasse) {
    Validationmdp.textContent = "les champs mot de passe ne sont pas identiques ";
    Validationmdp.style.color = "red";
    return false;
  }
  window.localStorage.setItem("password", motDePasse);
  window.localStorage.setItem("Cpassword",CmotDePasse);

  Validationmdp.textContent = "C'est bien enregistre, Merci!";
    Validationmdp.style.color = "green";
    return false;
}

// la redirection de btnRetour
function btnRetour() {
  window.location.href = "../createAccount.html";
}








window.onload = function() {
    // get les donnees depuis local storage
    const nom = window.localStorage.getItem("nom");
    const prenom = window.localStorage.getItem("prenom");
    const email = window.localStorage.getItem("email");
    const password = window.localStorage.getItem("password");
    const Cpassword = window.localStorage.getItem("Cpassword");

    if (nom && prenom && email) {
        document.getElementById("Nom").value = nom;
        document.getElementById("Prenom").value = prenom;
        document.getElementById("Email").value = email;
    }
    accountInformations = {
        accountInformations: {
            Nom : nom,
            Prenom : prenom,
            Email : email,
            password : password,
        }
    }
    console.log(JSON.stringify(accountInformations, null, 2));
};