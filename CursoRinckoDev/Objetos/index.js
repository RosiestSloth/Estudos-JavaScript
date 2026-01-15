// Objeto

// const objeto = {}

const player = {
    nickname: "RosiestSloth",
    health: 20,
    isDead: false,
    present() {
        console.log("Meu nick é", this.nickname);
    }
};

// Exemplo 1

player.name = "Vinicius";
console.log(player);

player.present();

console.log(player["nickname"]);

for (const prop in player) {
    console.log(prop);
};

// Exemplo 2
const computer = {
    motherboard: "B450M",
    videoCard: "RX7600",
    cpu: "Ryzen 5 4600g",
    font: {
        name: "CX 750",
        watts: 750,
    },
    case: {
        name: "Draco GameMax",
        color: "black",
    },
    ram: [
        {
            name: "HyperX",
            size: 16000,
        },
        {
            name: "Hyperx",
            size: 16000,
        },
    ]
};

console.log("Informações do computador");
console.log("Placa mãe:", computer.motherboard);
console.log("Placa de vídeo:", computer.videoCard);
console.log("Processador:", computer.cpu);
console.log("Fonte:", computer.font.name, computer.font.watts, "Watts");
console.log("Gabinete:", computer.case.name, "Cor:", computer.case.color);
for(const ran of computer.ram) {
    console.log(ran.name, ran.size);
};

// Exemplo 3

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout, 
});

prompt.question();
prompt.close();

// Exemplo 4

const player2 = {
    inventory: {
        itens: [
            {
                name: "sword",
                durability: 360,
                enchantments: [
                    { name: "sharpness", level: 2 },
                    { name: "unbreaking", level: 3 },
                ]
            },
            {
                name: "shield",
                durability: 300,
            }
        ],
        potions: [
            { type: "regeneration", duration: 12 },
            { type: "resistance", duration: 30 },
        ]
    }
};


console.log(player2.inventory.itens[0].name);