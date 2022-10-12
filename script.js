const card = document.querySelectorAll(".card");
const form = document.getElementById("form");
const search = document.getElementById("search");

const APIURL = `https://api.github.com/users/`;

async function getUser(username) {
  const res = await axios(APIURL + username);
  console.log(res.data);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  getUser(user);
});
