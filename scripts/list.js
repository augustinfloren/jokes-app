document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("section");

    fetch('https://jokes-api-0x6y.onrender.com/jokes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des blagues');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(joke => {
                const jokeTitle = document.createElement("a");
                jokeTitle.classList.add("joke-title");
                jokeTitle.setAttribute("href", `/joke-page.html?id=${joke.id}`);
                jokeTitle.textContent = joke.title;
                section.appendChild(jokeTitle);
            });
        })
        .catch(error => {
            console.error('problème avec la requête :', error);
            const errorMessage = document.createElement("span");
            errorMessage.textContent = error.message;
            section.appendChild(errorMessage)
        })
});