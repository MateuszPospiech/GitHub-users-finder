const seachButton = document.querySelector(".seachButton");
const inputValue = document.querySelector("#search");

const profileName = document.querySelector(".main__profile-name");
const profileUserName = document.querySelector(".main__profile-username");
const profileRepos = document.querySelector(".main__profile-repos");
const profileUrl = document.querySelector(".main__profile-url");
const profileFollowers = document.querySelector(".main__profile-followers");
const profileFollowing = document.querySelector(".main__profile-following");


const github_ID = "Iv1.2ee4419151d8a568";
const github_secret_ID = "daa0c2b24791d4459f9a2d04f433c42227b1df65";


//First time use fetch (> http request)
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${github_ID}&client_secret=${github_secret_ID}`);
    
    //tranfrorm to JSON format
    const data_json = await api_call.json();
    
    return { data: data_json }
};


const showData = () => {
    //promise
    fetchUsers(inputValue.value).then((res) =>{
        console.log(res);   
        
        profileName.innerHTML = `Name: ${res.data.name}`;
        profileUserName.innerHTML = `Login: ${res.data.login}`;
        profileRepos.innerHTML = `Public repos: ${res.data.public_repos}`;
        profileUrl.innerHTML = `URL profile: ${res.data.html_url}`;
        profileFollowers.innerHTML = `Followers: ${res.data.followers}`;
        profileFollowing.innerHTML = `Following: ${res.data.following}`;
    })
};

seachButton.addEventListener("click", () => {
    showData();
})