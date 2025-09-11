const minta =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const bejgomb = document.getElementById("bejgomb");
bejgomb.addEventListener("click", () => {
  document.getElementById("bejel").style.visibility = "visible";
});

const reggomb = document.getElementById("reggomb");
reggomb.addEventListener("click", () => {
  document.getElementById("regisz").style.visibility = "visible";
});

const belepes = document.getElementById("belepes");
belepes.addEventListener("click", () => {
  let bejemail = document.getElementById("bejemail").value;
  let darabolt = bejemail.split("");
  let valide = darabolt.some((item) => item == "@");
  let bejjelszo = document.getElementById("bejjelszo").value;
  let helyese = minta.test(bejjelszo); //teszteljük, megvizsgáljuk hogy a bejjelszo megfelel-e a mintában kiszabott feltételeknek
  if (helyese == true && valide == true) {
    document.getElementById("jelzes").innerHTML = "Sikeres bejelentkezés! :)";
  } else if (helyese == true && valide == false) {
    document.getElementById("jelzes").innerHTML = "Helytelen email cím!";
  } else if (helyese == false && valide == true) {
    document.getElementById("jelzes").innerHTML = "Helytelen jelszó!";
  } else {
    document.getElementById("jelzes").innerHTML =
      "Helytelen email cím és jelszó!";
  }
});

const regisztracio = document.getElementById("regisztracio");
regisztracio.addEventListener("click", () => {
  let regemail = document.getElementById("regemail").value;
  let regjelszo = document.getElementById("regjelszo").value;
  let regerosites = document.getElementById("regerosites").value;
  let daraboltemail = regemail.split("");
  let validemail = daraboltemail.some((item) => item == "@");
  if (validemail == true) {
    if (regjelszo == regerosites) {
      if (minta.test(regjelszo) == true) {
        document.getElementById("jelzes").innerHTML =
          "Sikeres regisztráció! :)";
      } else {
        document.getElementById("jelzes").innerHTML = "Helytelen jelszó!";
      }
    } else {
      document.getElementById("jelzes").innerHTML =
        "A jelszó nem egyezik meg a megerősítéssel!";
    }
  } else {
    document.getElementById("jelzes").innerHTML = "Helytelen email cím!";
  }
});
