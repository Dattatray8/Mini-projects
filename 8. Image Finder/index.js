let search = document.getElementById("search");
let keyword = document.getElementById("keyword");
let main = document.querySelector(".main");

async function fetchImages() {
    try {
        // let api = await fetch(`https://api.unsplash.com/search/photos?query=${keyword.value}&client_id=uSL_J6x097PVXXLsKsgo3DbrXAK_N-lUE0j38yTZY2M`);
        let res = await api.json();
        main.innerHTML = '';
        res.results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'flex flex-col justify-center items-center gap-3 h-auto w-[19rem] rounded-2xl p-4 text-center border';
            card.innerHTML = `
            <div class="flex justify-around items-center w-full">
                <div class="rounded-[50%] w-[50px] h-[50px] pImage self-center" style="background-image: url(${item.user.profile_image.medium}); background-size: cover; background-position: center;")></div>
                <p>${item.user.username}</p>
            </div>
            <img src="${item.urls.regular}" alt="" class="rounded-3xl h-[15rem] w-[15rem]">
            <p>${item.description || "No description available."}</p>`;
            main.appendChild(card);
        });
    }
    catch (err) {
        console.log(err);
    }
}

search.addEventListener('click', () => {
    fetchImages();
})

keyword.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchImages();
    }
})