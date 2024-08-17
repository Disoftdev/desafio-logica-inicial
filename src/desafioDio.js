// Função principal que classifica o nível do herói
function classificarHeroi(nome, xp) {
    let nivel;

    // Estruturas de decisão para determinar o nível do herói
    if (xp < 1000) {
        nivel = 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = 'Prata';
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = 'Imortal';
    } else {
        nivel = 'Radiante';
    }

    // Exibe a mensagem com o nome e o nível do herói
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
}

// Exemplo de uso da função
const nomeHeroi = 'Arthur';
const xpHeroi = 7500;

// Chamando a função para classificar o herói
classificarHeroi(nomeHeroi, xpHeroi);
