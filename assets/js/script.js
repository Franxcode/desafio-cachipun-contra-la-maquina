function userPlay() {
  let userPlay = document.getElementById("userPlay").value.toLowerCase();
  document.getElementById(
    "user_play"
  ).innerHTML = `La jugada del usuario es: ${userPlay} <br>`;
}

let timesPlay = document.getElementById("timesPlay").value;

for (i = 1; i <= timesPlay; i++) {
  do {} while (
    userPlay !== "piedra" &&
    userPlay !== "papel" &&
    userPlay !== "tijera"
  );
}

document
  .getElementById("mainTriggerCachipun")
  .addEventListener("click", function () {
    userPlay();
  });

function rules() {
  let userPlay = document.getElementById("userPlay").value;
  let machinePlay = Math.floor(Math.random() * 3 + 1);
  //   Usuario gana
  if (userPlay == "Tijera" && machinePlay == "Papel") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, el usuario ha ganado.`;
  }
  if (userPlay == "Papel" && machinePlay == "Piedra") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, el usuario ha ganado.`;
  }
  if (userPlay == "Piedra" && machinePlay == "Tijera") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, el usuario ha ganado.`;
  }
  //   Maquina gana
  if (machinePlay == "Tijera" && userPlay == "Papel") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, la maquina ha ganado.`;
  }
  if (machinePlay == "Papel" && userPlay == "Piedra") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, la maquina ha ganado.`;
  }
  if (machinePlay == "Piedra" && userPlay == "Tijera") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, la maquina ha ganado.`;
  }
  //   Empate
  if (userPlay == "Tijera" && machinePlay == "Tijera") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, es un empate.`;
  }
  if (userPlay == "Papel" && machinePlay == "Papel") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, es un empate.`;
  }
  if (userPlay == "Piedra" && machinePlay == "Piedra") {
    document.getElementById(
      "user_play"
    ).innerHTML = `El usuario jugo ${userPlay} y la maquina jugo ${machinePlay}, es un empate.`;
  }
}
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
