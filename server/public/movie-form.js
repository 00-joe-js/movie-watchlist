

const container = document.querySelector("#genre-selects-container");
const originalSelect = document.querySelector("#genre-select");
const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", () => {
    const anotherSelect = originalSelect.cloneNode(true);
    container.appendChild(anotherSelect);
});