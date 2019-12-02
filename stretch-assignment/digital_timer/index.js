// let sec = new Date().getSeconds();
// let ms = new Date().getMilliseconds();

// let secondTens = document.getElementById("secondTens");
// let secondOnes = document.getElementById("secondOnes");
// let msHundreds = document.getElementById("msHundreds");
// let msTens = document.getElementById("msTens");

// if (sec < 10) {
//   secondTens.textContent = "0";
//   secondOnes.textContent = sec;
// } else if (sec >= 10) {
//   secondTens.textContent = sec;
//   secondOnes.textContent = null;
// }

// if (ms < 10) {
//   msHundreds.textContent = "0";
//   msTens.textContent = ms;
// } else if (ms >= 999) {
//   msHundreds.textContent = ms;
//   msTens = null;
// }

setInterval(function() {
  let sec = new Date().getSeconds();
  let ms = new Date().getMilliseconds();

  let secondTens = document.getElementById("secondTens");
  let secondOnes = document.getElementById("secondOnes");
  let msHundreds = document.getElementById("msHundreds");
  let msTens = document.getElementById("msTens");
  if (sec < 10) {
    secondTens.textContent = "0";
    secondOnes.textContent = sec;
  } else if (sec >= 10) {
    secondTens.textContent = sec;
    secondOnes.textContent = null;
  }

  if (ms < 999) {
    msHundreds.textContent = ms;
    msTens.textContent = null;
  }
});
