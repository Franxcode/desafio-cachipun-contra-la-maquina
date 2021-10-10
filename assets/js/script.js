function userPlay() {
  let userPlay = parseInt(document.getElementById("userPlay").value);
  document.getElementById(
    "user_play"
  ).innerHTML = `La jugada del usuario es: ${userPlay} <br>`;
}

document
  .getElementById("mainTriggerCachipun")
  .addEventListener("click", function () {
    userPlay();
  });
// let jugadaUsuario;
// let vecesJugar = parseInt(prompt("Ingrese veces a jugar:"));

// for (i = 1; i <= vecesJugar; i++) {
//   do {
//     jugadaUsuario = prompt(
//       "Elige tu jugada, Piedra Papel o Tijera"
//     ).toLowerCase();
//   } while (
//     jugadaUsuario !== "piedra" &&
//     jugadaUsuario !== "papel" &&
//     jugadaUsuario !== "tijera"
//   );

//   let jugadaMaquina = Math.floor(Math.random() * 3);

//   if (jugadaMaquina == 0) {
//     jugadaMaquina = "piedra";
//   } else if (jugadaMaquina == 1) {
//     jugadaMaquina = "papel";
//   } else {
//     jugadaMaquina = "tijera";
//   }

//   if (jugadaUsuario === jugadaMaquina) {
//     alert("Han empatado");
//     console.log(
//       `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}`
//     );
//   } else if (
//     (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
//     (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
//     (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
//   ) {
//     alert("Has ganado");
//     console.log(
//       `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}`
//     );
//   } else {
//     alert("Perdiste");
//     console.log(
//       `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}`
//     );
//   }
// }
