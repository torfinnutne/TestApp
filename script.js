// ===== 1. PROGRAMMER =====
// Her legger du inn programmene. Én linje per program:
//   { navn: "...", beskrivelse: "...", lenke: "https://..." }
const programmer = [
  { navn: "Landax", beskrivelse: "Kvalitet og HMS", lenke: "https://norskkylling.landax.no/dashboard/71" },
  { navn: "Together", beskrivelse: "Internkommunikasjon", lenke: "https://rema1000no.relesysapp.net/#/" },
  // Legg til flere programmer her, for eksempel:
  // { navn: "Timeføring", beskrivelse: "Før timer", lenke: "https://..." },
];

const programliste = document.getElementById("programliste");

programmer.forEach(function (program) {
  const kort = document.createElement("a");
  kort.className = "programkort";
  kort.href = program.lenke;
  kort.target = "_blank";   // åpner i ny fane
  kort.rel = "noopener";
  kort.innerHTML =
    '<span class="navn">' + program.navn + "</span>" +
    '<span class="beskrivelse">' + program.beskrivelse + "</span>" +
    '<span class="etikett">Åpne ↗</span>';
  programliste.appendChild(kort);
});

// ===== 2. HILSEN OG DATO =====
const time = new Date().getHours();
let hilsen;

if (time < 10) {
  hilsen = "God morgen!";
} else if (time < 17) {
  hilsen = "God dag!";
} else {
  hilsen = "God kveld!";
}

document.getElementById("hilsen").textContent = hilsen;
document.getElementById("dato").textContent = new Date().toLocaleDateString("no-NO", {
  weekday: "long", day: "numeric", month: "long", year: "numeric"
});

// ===== 3. SØK I KONTAKTER =====
const sokefelt = document.getElementById("sok");
const rader = document.querySelectorAll("#kontaktliste tr");

sokefelt.addEventListener("input", function () {
  const sok = sokefelt.value.toLowerCase();
  rader.forEach(function (rad) {
    const passer = rad.textContent.toLowerCase().includes(sok);
    rad.style.display = passer ? "" : "none";
  });
});
