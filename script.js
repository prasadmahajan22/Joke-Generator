var btn = document.getElementById("btn");
btn.addEventListener("click",clickHandler);

var p = document.querySelector("div > p");
function clickHandler(){

    let joke = "";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
    xhr.setRequestHeader('X-Api-Key', 'WuCQDAWn+mkB6wuLnFSzuQ==aPlsaRYALTsTKrAj');
    xhr.send();

    btn.innerText = "Loading"

    xhr.onload = function() {
        if(xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            joke = result[0].joke
            console.log(joke);

            p.innerText = joke;
            btn.innerText = "Tell Me Joke"
        }
    }
}