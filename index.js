let joke = document.querySelector(`.joke`);
let jokeBtn = document.querySelector(`.jokeBtn`);

    const api = "https://v2.jokeapi.dev/joke/Any";
    const fetchData = () =>{
        fetch(api, {
            headers:{
                Accept:`Application/json`,
            },
        })
        .then((response) =>{
            // console.log(response);
            return response.json();
        })
        .then((data) =>{
            console.log(data.setup);
            joke.innerText = data.setup;
        })
        .catch((error) =>{
            console.log(error);
        })
    }
fetchData()

jokeBtn.addEventListener(`click`, () =>{
    fetchData();
});