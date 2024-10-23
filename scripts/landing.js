window.getRandomJoke = function() {
    const joke = document.querySelector(".random-joke");

    fetch('https://jokes-api-0x6y.onrender.com/randomJoke')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération de la blague');
            }
            return response.json();
        })
        .then(data => {
            joke.innerHTML = `${data[0].statement}<br>${data[0].answer}`
        })
        .catch(error => {
            console.error('problème avec la requête :', error);
        })
}

document.addEventListener("DOMContentLoaded", getRandomJoke);