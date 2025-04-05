console.log("test")

// Отримати список користувачів з GitHub API Опис: Використайте публічне API 
// GitHub для отримання списку користувачів. Зробіть GET-запит за 
// адресою https://api.github.com/users та перегляньте отримані дані щодо 
// користувачів.

fetch("https://api.github.com/users")
.then((respons) => {
return respons.json()
})
.then((data) => {
    makeUserList(data)
})
.catch((error) => {
console.log(error)
})

function makeUserList(users) {
    console.log(users)

    const elements = users.map((user) => 
       `
        <li class="user-item">
            <p class="user-login">${user.login}</p>
            <p class="user-id">${user.id}</p>
        </li>
    `
    ).join("")

    document.querySelector(".users-list").innerHTML = elements
    console.log(elements)
}

