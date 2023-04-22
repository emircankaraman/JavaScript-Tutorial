const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetter_el = document.getElementById('wrong-letters');
const correctLetters = [];
const wrongLetter = [];
let selectedWord = getRandomWord();
const items = document.querySelectorAll('.item');
const messega = document.getElementById('messege');
const PlayAgainBtn = document.getElementById('play-again');


// Burada ki function bize rastgele bir kelime getirmesini sağlıyor.
function getRandomWord() {
    const words = ["javascrıpt", "java", "pyhton", "css", "html"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
            <div class="letter"> 
                    ${correctLetters.includes(letter) ? letter : ''}
            </div>
    `).join('')}
    
    `;

    const w = word_el.innerText.replace(/\n/g, '');
    if (w === selectedWord) {
        popup.style.display = 'flex';
        message_el.innerText = 'Tebrikler kazandınız.';
    }
}

function uptadeWrongletter() {
    wrongLetter_el.innerHTML = `
    ${wrongLetter.length > 0 ? '<h3>Hatalı Harfler</h3>' : ''}
    ${wrongLetter.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach((item, index) => {
        const errowCount = wrongLetter.length;
        if (index < errowCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    if (wrongLetter.length === items.length) {
        popup.style.display = 'flex';
        message_el.innerText = 'Maalesef Kaybettiniz.';
    }
}

function displayMessega() {
    messega.classList.add('show');
    setTimeout(function () {
        messega.classList.remove('show');
    }, 2000)
}

PlayAgainBtn.addEventListener('click', function () {
    correctLetters.splice(0);
    wrongLetter.splice(0);
    selectedWord = getRandomWord();
    displayWord()
    uptadeWrongletter();
    popup.style.display ='none';
});
window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord()
            } else {
                displayMessega();
            }
        } else {
            if (!wrongLetter.includes(letter)) {
                wrongLetter.push(letter);
                uptadeWrongletter();
            } else {
                displayMessega()
            }
        }
    }

});

displayWord()