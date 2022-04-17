const baslatButton = document.querySelector('#btnStart');

const infoButton = document.querySelector('#btn');

const sayiGiriniz = document.querySelector('#number');

const level = document.getElementById("level");

const bilgi = document.querySelector('#message');

let randomSayi;
let kalanHak;

baslatButton.addEventListener('click', oyunubaslat);

function oyunubaslat() {
    randomSayi = parseInt(Math.random() * 10);
    console.log(randomSayi);
    
    level.disabled = true;
    if (level.value == 1) {
        kalanHak = 5;
    } else if (level.value == 2) {
        kalanHak = 4;
    } else {
        kalanHak = 3;
    }
}


infoButton.addEventListener('click', degerkontrol)

function degerkontrol() {
    if (randomSayi == sayiGiriniz.value) {
        bilgi.textContent = 'Oyunu Kazandınız'
    } else {
        kalanHak--;
        bilgi.textContent = `Kalan Hakkınız : ${kalanHak}`
        if (kalanHak == 0) {
            bilgi.textContent = 'Oyunu Kaybettiniz';
            baslatButton.disabled = true;
            infoButton.disabled = true;
        }

    }
}


