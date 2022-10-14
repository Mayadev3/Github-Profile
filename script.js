const card = document.querySelectorAll(".card");
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  const apiUrl = `https://api.github.com/users/${username}`;
  const res = await axios(apiUrl);
  createUserCard(res.data);
  getRepos(username);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  getUser(user);
});

async function getRepos(username) {
  const get = await fetch(
    `https://api.github.com/users/${username}/repos?sort=created`
  );
  const res = await get.json();
  console.log(res);
  addReposToCard(res);
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement(`a`);
    repoEl.classList.add("repos");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}
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
            <div id="repos"></div>
          </div>
        </div>
      </div>`;
  main.innerHTML = cardHTML;
}

/*<ul class="repo-names">
    <a href="#" class="repos">
      dictionary
    </a>
    <a href="#" class="repos">
      weather
    </a>
    <a href="#" class="repos">
      breaking bad
    </a>
    <a href="#" class="repos">
      pokedex
    </a>
    <a href="#" class="repos">
      todo list
    </a>
</ul>;*/
