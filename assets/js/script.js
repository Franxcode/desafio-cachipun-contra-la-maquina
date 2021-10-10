let jugadaUsuario;
let vecesJugar = parseInt(prompt("Ingrese veces a jugar:"));

for (i = 1; i <= vecesJugar; i++) {
  do {
    jugadaUsuario = prompt(
      "Elige tu jugada, Piedra Papel o Tijera"
    ).toLowerCase();
  } while (
    jugadaUsuario !== "piedra" &&
    jugadaUsuario !== "papel" &&
    jugadaUsuario !== "tijera"
  );

  let jugadaMaquina = Math.floor(Math.random() * 3);

  if (jugadaMaquina == 0) {
    jugadaMaquina = "piedra";
  } else if (jugadaMaquina == 1) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  if (jugadaUsuario === jugadaMaquina) {
    alert("Has empatado con la máquina.");
    console.log(
      `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}`
    );
  } else if (
    (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
    (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
  ) {
    alert("Le has ganado a la máquina.");
    console.log(
      `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}`
    );
  } else {
    alert("Has perdido contra la máquina.");
    console.log(
      `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}`
    );
  }
}
