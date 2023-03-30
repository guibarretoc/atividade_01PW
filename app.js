function ClickAqui() {
    const quadrado = 6;
    let randomNumber = Math.floor(Math.random() * quadrado) + 1;
    const title = `<h1>${randomNumber}</h1>`;
    document.getElementById('botao').innerHTML = title;
}