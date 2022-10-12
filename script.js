async function fetchGithub() {
  const get = await fetch(
    `https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192`
  );
  const response = await get.json();

  console.log(response);
}
fetchGithub();
