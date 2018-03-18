export const fetchPopularRepos = language => {
  return fetch(
    "https://api.github.com/search/repositories?q=stars:>1+language:" +
      language +
      "&sort=stars&order=desc&type=Repositories"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data.items;
    });
};

// repositories with +1 start, language sorted by stars in descending order
// We just care about the repositories
