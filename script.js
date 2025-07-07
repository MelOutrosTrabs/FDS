const jogosRPG = [
  "The Witcher 3",
  "Skyrim",
  "Divinity: Original Sin 2",
  "Elden Ring",
  "Guild Wars 2",
  "World of Warcraft",
  "Lost Ark",
  "Dragon Age: Inquisition",
  "Cyberpunk 2077",
];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatorio = jogosRPG[Math.floor(Math.random() * jogosRPG.length)];
  document.getElementById("mensagem").textContent = `Conheça ${aleatorio}`;
});
