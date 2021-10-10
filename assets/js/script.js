// Inicio
//      Leer cantidad veces a jugar
//      Leer jugada de usuario (Piedra, Papel, Tijera)
//      Generar jugada automatica computadora (math.random())
//      Mostrar ganador (Felicitar al ganador en caso de ser el usuario, indicarle que ha perdido contra la maquina en caso de que esta sea la que gane, declarar un empate)
// Fin

// let vecesJugar = parseInt(prompt("Ingrese veces a jugar:"));
// let jugadaUsuario = prompt('Elegí tu jugada', 'Piedra, Papel o Tijera');

/*
let jugadaUsuario

do {
  jugada = prompt('Elige tu jugada, PIEDRA PAPEL o TIJERA');
} while (jugadaUsuario !== 'PIEDRA' && jugadaUsuario !== 'PAPEL' && jugadaUsuario !== 'TIJERA');
*/

let jugadaUsuario;
let vecesJugar = parseInt(prompt("Ingrese veces a jugar:"));

for (i = 1; i <= vecesJugar; i++) {
  const ganaste = "fuiste el ganador!.";
  const perdiste = "fuiste el perdor TT-TT";
  const empataste = "han empatado.";

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
    alert(ganaste);
    console.log(
      `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}, ${ganaste}`
    );
  } else if (
    (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
    (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
  ) {
    alert(perdiste);
    console.log(
      `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}, ${perdiste}`
    );
  } else {
    alert(empataste);
    console.log(
      `En la ronda N°${i} elegiste ${jugadaUsuario} y la máquina eligió ${jugadaMaquina}, ${empataste}`
    );
  }
}
