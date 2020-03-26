const wrapper = document.querySelector(".wrapper");

const friends = ["me", "lynn", "dal", "mark"];

const ul = document.createElement("ul");

const list = `
    <h1>People I love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`).join(" ")}
    </ul>
`;

wrapper.innerHTML = list;