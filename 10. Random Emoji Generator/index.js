let generateBtn = document.getElementById("generate");

async function getEmoji() {
    try {
        // let api = await fetch('https://emoji-api.com/emojis?access_key=5c7bccea3b342217b344558a5f4d12063c73f934');
        let res = await api.json();
        let index = Math.floor(Math.random() * res.length);
        generateBtn.innerHTML = res[index].character;
    }
    catch (error) {
        console.error("Error fetching emoji:", error);
    }
}

generateBtn.addEventListener('click', () => {
    getEmoji();
})