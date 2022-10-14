const card = document.querySelectorAll(".card");
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(userName) {
  const apiUrl = `https://api.github.com/users/${userName}`;
  const res = await axios(apiUrl);
  createUserCard(res.data);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  getUser(user);
});

async function getRepos(username) {
  const get = await fetch(`https://api.github.com/users/${username}/repos`);
  const res = await get.json();
  console.log(res);
}
getRepos("mayadev3");

function createUserCard(user) {
  const cardHTML = `<div class="card">
        <div class="card-inner">
          <div class="user-pic">
            <img src="${user.avatar_url}" alt="${user.name}" class="my-pic" />
          </div>
          <div class="user-info">
            <h4>${user.name}</h4>
            <p>
              ${user.bio}
            </p>
            <ul class="follow">
              <li>${user.followers} Followers</li>
              <li>${user.following} Following</li>
              <li>${user.public_repos} Repos</li>
            </ul>
            <ul class="repo-names">
              <li><a href="#" class="repos">dictionary</a></li>
              <li><a href="#" class="repos">weather</a></li>
              <li><a href="#" class="repos">breaking bad</a></li>
              <li><a href="#" class="repos">pokedex</a></li>
              <li><a href="#" class="repos">todo list</a></li>
            </ul>
          </div>
        </div>
      </div>`;
  main.innerHTML = cardHTML;
}
