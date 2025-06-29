let userName = document.getElementById('uname');
let searchBtn = document.getElementById('search');
let profileCard = document.getElementById('card');
let profileImage = document.getElementById('pimage');
let userProfileName = document.getElementById('username');
let followers = document.getElementById('Followers');
let following = document.getElementById('Following');
let repos = document.getElementById('Repos');
let bio = document.getElementById('bio');
let viewProfileBtn = document.getElementById('viewProfileBtn');

async function apiIntegration() {
    try {

        let gitHubApi = await fetch(`https://api.github.com/users/${userName.value}`);

        let response = await gitHubApi.json();
        if (response.status == 404) {
            alert('Enter valid username');
            profileCard.style.display = 'none';
            return
        }
        profileImage.style.backgroundImage = `url(${response.avatar_url})`
        userProfileName.innerText = response.name;
        followers.innerText = response.followers;
        following.innerText = response.following;
        repos.innerText = response.public_repos;
        bio.innerText = response.bio;
        profileCard.style.display = 'flex';
    }
    catch (err) {
        console.log(err);
    }
}

searchBtn.addEventListener('click', () => {
    apiIntegration();
})

userName.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        apiIntegration();
    }
})

viewProfileBtn.addEventListener('click', () => {
    window.location.href = `https://github.com/${userName.value}`;
})