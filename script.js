var paragraphe = document.getElementById("paragraphe-intro");
let longeur = 125;
let x = 0;
let y = 0;

function cacherIntro() {
    paragraphe.classList.add("cacher");
}

var mes_images = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Récupérez le canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

mes_images = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    // Ajoutez d'autres images ici...
];

mes_images[0].src = "images/vaiseau_2_75.png";
mes_images[1].src = "images/vaiseau_3_75.png";
mes_images[2].src = "images/vaiseau_4_75.png";
mes_images[3].src = "images/vaiseau_5_75.png";
mes_images[4].src = "images/vaiseau_6_75.png";
mes_images[5].src = "images/vaiseau_7_75.png";
mes_images[6].src = "images/vaiseau_8_75.png";
mes_images[7].src = "images/vaiseau_9_75.png";
mes_images[8].src = "images/vaiseau_2_75.png";
mes_images[9].src = "images/vaiseau_3_75.png";
mes_images[10].src = "images/vaiseau_4_75.png";
mes_images[11].src = "images/vaiseau_5_75.png";
mes_images[12].src = "images/vaiseau_6_75.png";
mes_images[13].src = "images/vaiseau_7_75.png";
mes_images[14].src = "images/vaiseau_8_75.png";
mes_images[15].src = "images/vaiseau_9_75.png";
// Chargez d'autres images de la même manière...

// Attendez que toutes les images soient chargées
Promise.all(mes_images.map((image) => new Promise((resolve) => image.onload = resolve)))
    .then(() => {
        shuffleArray(mes_images);

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                ctx.strokeStyle = "rgb(249, 163, 44)";
                ctx.beginPath();
                ctx.rect(i * longeur, j * longeur, longeur, longeur);
                ctx.stroke();
            }
        }

        for (let i = 0; i < mes_images.length; i++) {
            ctx.drawImage(mes_images[i], x, y, 125, 125);
            x += 125;
            if (x >= 500) {
                x = 0;
                y += 125;
            }
        }
    });