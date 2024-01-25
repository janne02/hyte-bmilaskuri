"use strict";

let lowBmi = `Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta. Sen syynä voi olla jokin pitkällinen sairaus tai laihuushäiriö eli anoreksia. Jos varsinaista sairautta ei ole, mutta painoindeksi on laskenut alle 18,5:n, pitää hakeutua lääkäriin. Jos paino muutamassa kuukaudessa on laskenut yli 20:n tasolta reilusti, on varminta mennä lääkäriin jo painoindeksin lähestyessä 19:ää.`;

let normalBmi = `Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan. Normaali painoindeksin alue on välillä 18,5–25. Jos painoindeksi on pienempi kuin 18,5 tai suurempi kuin 25, sairauksien vaara suurenee. Painoindeksiä voidaan käyttää 18 vuoden iästä lähtien.`;

let highBmi = `Kun painoindeksi ylittää 25, ollaan liikapainon puolella. Liikakilojen määrä voi vaihdella erittäin paljon, muutamasta kilosta moniin kymmeniin kiloihin. Siksi on hyödyllistä täsmentää, kuinka suuresta ylipainosta on kyse.`;

//BOM tiedonhakua
window.console.log("Let see");
console.log("Moi");
console.log(window.innerHeight);
console.log(window.innerWidth);
//merkkijono literaali
let age = 14;

let teksti = "Moi, olen " + age + " ikäinen";
console.log(teksti);

let teksti2 = `Moi olen yhä ${age} ikäinen`;
console.log(teksti2);

//tietojen haku
//hakee ensimmäisen minkä löytää
const analysis = document.querySelector(".analysis");
console.log(analysis);
console.log(analysis.innerText);
console.log(analysis.innerHTML);

// Tietojen muokkaus
analysis.textContent = "Terveppä terve 🎱";
analysis.textContent = normalBmi;
// kaikki
const allP = document.querySelectorAll("p");
console.log(allP);
//käydään läpi lopin avulla
for (const p of allP) {
  console.log("P elementin korkeus");
  console.log(p.offsetHeight);
}

//events

//document.addEventListener(Mitä kuunnellaan, mitä tehdöön)
document.addEventListener("keydown", function (e) {
  console.log(e.key);
});

const nappula = document.querySelector(".calculate");
nappula.addEventListener("click", function (evt) {
  console.log("Nappulaa klikattiin");
  console.log(evt);
  //yleensä kun UI:sta saadaan arvo se on lähtkohtaisesti String muotoinen
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);

  console.log(typeof weight);

  let yht = weight + height;
  console.log(yht);

  if (!weight || !height) {
    resettiFunktion();
    analysis.textContent = "Muista lisätä ne numerot, jotta voimme laskea🎱!!!";
  } else {
    resettiFunktion();
    bmiLaskuri(weight, height);
  }
});

function bmiLaskuri(weight, height) {
  console.log("Lasketaan BMI");
  let bmi = (weight / ((height * height) / 10000)).toFixed(1);
  console.log(bmi);
  document.querySelector(".bmi-score").textContent = bmi;

  if (bmi < 19) {
    console.log("Alipaino");
    document.querySelector(".analysis").textContent = lowBmi;
    document.querySelector(".bmi0-19").style.background = "blue";
    document.querySelector(".bmi0-19").classList.add("lowBmi");
  } else if (bmi > 25) {
    console.log("Ylipaino");
    document.querySelector(".analysis").textContent = highBmi;
    document.querySelector(".bmi25-30").style.background = "red";
    document.querySelector(".bmi25-30").classList.add("highBmi");
  } else {
    console.log("Normaalipaino");
    document.querySelector(".analysis").textContent = normalBmi;
    document.querySelector(".bmi19-25").style.background = "orange";
    document.querySelector(".bmi19-25").classList.add("normalBmi");
  }
}
//Täällä kannattaa resetoida tyylit
//lyhennettiin resetointia vähäsen, jotta olisi selkeämpi ja lyhyempi
function resettiFunktion() {
  document
    .querySelectorAll(".bmi0-19, .bmi25-30, .bmi19-25")
    .forEach(function (element) {
      element.style.background = "";
      element.classList.remove("lowBmi", "highBmi", "normalBmi");
    });
}
function munFunctio() {
  console.log("Tämä on funktion sisällä!");
}
munFunctio();
