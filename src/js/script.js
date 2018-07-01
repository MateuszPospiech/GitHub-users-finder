const seachButton = document.querySelector(".seachButton");
const inputValue = document.querySelector("#search");


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
    })
};

seachButton.addEventListener("click", () => {
    showData();
})