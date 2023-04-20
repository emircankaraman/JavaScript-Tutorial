const word_el = document.getElementById('word');
const correctLetters = ['p', 'y', 't', 'h', 'o', 'n',];
const wrongLetter = [];


// Burada ki function bize rastgele bir kelime getirmesini sağlıyor.
function getRandomWord() {
    const words = ["javascript", "java", "pyhton"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    // Burada selectedWord'a getRandomWord'u atıyoruz.
    const selectedWord = getRandomWord()
    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
            <div class="letter"> 
                    ${correctLetters.includes(letter) ? letter : ''}
            </div>
    `).join('')}
    
    `;

    const w = word_el.innerText.replace(/\n/g, '');
    if (w === selectedWord) {
        console.log("tebrikler")
    }
}

displayWord()