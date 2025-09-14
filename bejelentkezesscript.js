const minta =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const reggomb = document.getElementById("reggomb");
reggomb.addEventListener("click", () => {
  document.getElementById("formcontainerbej").style.visibility = "hidden";
  document.getElementById("formcontainerreg").style.visibility = "visible";
  document.getElementById("cim").innerHTML = "Regisztráció";
  document.getElementById("regisztralas").style.visibility = "visible";
  document.getElementById("belepes").style.visibility = "hidden";
  document.getElementById("reggomb").style.background = "#2f575d";
  document.getElementById("reggomb").style.color = '#dee1dd'
  document.getElementById("bejgomb").style.background = '#dee1dd';
  document.getElementById("bejgomb").style.border = "1px solid #2f575d";
  document.getElementById("bejgomb").style.color = "#2f575d";
});

const bejgomb = document.getElementById("bejgomb");
bejgomb.addEventListener("click", () => {
  document.getElementById("bejgomb").style.color = '#dee1dd';
  document.getElementById("reggomb").style.color = "#2f575d";
  document.getElementById("formcontainerreg").style.visibility = "hidden";
  document.getElementById("formcontainerbej").style.visibility = "visible";
  document.getElementById("cim").innerHTML = "Bejelentkezés";
  document.getElementById("belepes").style.visibility = "visible";
  document.getElementById("regisztralas").style.visibility = "hidden";
  document.getElementById("reggomb").style.background = "#dee1dd";
  document.getElementById("bejgomb").style.background = '#2f575d';
});

const belepes = document.getElementById("belepes");
let modal = document.getElementById("belepesmodal");
let span = document.getElementsByClassName("close")[0];
belepes.addEventListener("click", () => {
  modal.style.display = "block";
  let bejemail = document.getElementById("bejemail").value;
  let valide = bejemail.split("").some((item) => item == "@");
  let bejjelszo = document.getElementById("bejjelszo").value;
  let helyese = minta.test(bejjelszo); //teszteljük, megvizsgáljuk hogy a bejjelszo megfelel-e a mintában kiszabott feltételeknek
  //minta == bejjelszo
  if(valide == false && helyese == false){
    document.getElementById("jelzes").innerHTML = "Az email cím és a jelszó nem megfelelőek!"
  }
  else if(valide == false){
    document.getElementById("jelzes").innerHTML = "Nem megfelelő az email cím!";
  }
  else if(helyese == false){
    document.getElementById("jelzes").innerHTML = "A jelszó nem megfelelő!";
  }
  else{
    document.getElementById("jelzes").innerHTML = "Sikeres bejelentkezés! :)";
  }
});

const regisztracio = document.getElementById("regisztracio");
regisztralas.addEventListener("click", () => {
  modal.style.display = "block";
  let regemail = document.getElementById("regemail").value;
  let regjelszo = document.getElementById("regjelszo").value;
  let regerosites = document.getElementById("regerosites").value;
  let validemail = regemail.split("").some((item) => item == "@");
  if(validemail == false && regjelszo == false){
    document.getElementById("jelzes").innerHTML = "Az email cím és a jelszó nem megfelelőek!"
  }
  else if(validemail == false){
    document.getElementById("jelzes").innerHTML = "Nem megfelelő az email cím!";
  }
  else if(regjelszo == false){
    document.getElementById("jelzes").innerHTML = "A jelszó nem megfelelő!";
  }
  else if(regerosites != regjelszo){
    document.getElementById("jelzes").innerHTML = "A két jelszó nem egyezik meg!";
  }
  else{
    document.getElementById("jelzes").innerHTML = "Sikeres regisztráció! :)";
  }
});

span.onclick= function () {
  modal.style.display = "none";
};
//when the user click anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if(event.target == modal ){
    modal.style.display = "none";
  }
})
