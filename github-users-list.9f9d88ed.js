console.log("test"),fetch("https://api.github.com/users").then(s=>s.json()).then(s=>{var e=s;console.log(e);let o=e.map(s=>`
        <li class="user-item">
            <p class="user-login">${s.login}</p>
            <p class="user-id">${s.id}</p>
        </li>
    `).join("");document.querySelector(".users-list").innerHTML=o,console.log(o)}).catch(s=>{console.log(s)});
//# sourceMappingURL=github-users-list.9f9d88ed.js.map
