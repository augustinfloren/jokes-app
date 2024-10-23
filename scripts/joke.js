document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const section = document.querySelector("section");

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const description = document.createElement("h2");
    description.classList.add("description");
    descriptionContainer.appendChild(description);

    const title = document.createElement("h2");
    title.classList.add("joke-title-big");
    section.appendChild(title);

    fetch(`https://jokes-api-0x6y.onrender.com/joke/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération de la blague');
            }
            return response.json();
        })
        .then(data => {
            title.textContent = data.title;
            section.appendChild(descriptionContainer);
            description.innerHTML = `${data.statement}<br>${data.answer}`;
        })
        .catch(error => {
            console.error('problème avec la requête :', error);
            title.textContent = error.message;
        })
});