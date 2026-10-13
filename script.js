// ===== 1. HILSEN =====
// Viser "God morgen", "God dag" eller "God kveld" avhengig av klokka.
const time = new Date().getHours();
let hilsen;

if (time < 10) {
  hilsen = "God morgen!";
} else if (time < 17) {
  hilsen = "God dag!";
} else {
  hilsen = "God kveld!";
}

const iDag = new Date().toLocaleDateString("no-NO", {
  weekday: "long", day: "numeric", month: "long", year: "numeric"
});

document.getElementById("hilsen").textContent = hilsen + " I dag er det " + iDag + ".";

// ===== 2. SØK I KONTAKTER =====
// Hver gang du skriver i søkefeltet, skjules rader som ikke passer.
const sokefelt = document.getElementById("sok");
const rader = document.querySelectorAll("#kontaktliste tr");

sokefelt.addEventListener("input", function () {
  const sok = sokefelt.value.toLowerCase();
  rader.forEach(function (rad) {
    const passer = rad.textContent.toLowerCase().includes(sok);
    rad.style.display = passer ? "" : "none";
  });
});
