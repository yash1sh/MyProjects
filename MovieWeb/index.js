
//These are obtained from themoviedb where the provide all the info of the lastest movies 
//we have to create a api key and place in the link 

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ae911def89f956309c4197400515ac50&page=1";
const IMG_PAT = "https://image.tmdb.org/t/p/w1280";

//To get the image the url is different we have to concat it with the poster part as it is providing all a link to the image

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=ae911def89f956309c4197400515ac50&query="';

//To use the search api we first have tot put the search link and then the key so to search any movie we justhave to concat the result with the search link as done above

const search = document.getElementById("search");
const form = document.getElementById("form");

const main = document.getElementById("main");

//Get initial moies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url); //if we not use await we just have to put then its just providing boolean kinda result 
  const data = await res.json(); // hear the boolean continues 
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHtml = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");  // Creating the div tag and adding it with the movie class all the other tags to displays the movie and movie details here 
    movieEl.innerHTML = `
        <img src="${IMG_PAT + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `;
    main.appendChild(movieEl); //Use to append it as a child 
  });
}


//getClassByRate is usde such that the rating are colored if its good then green mid then orange and bad then red
function getClassByRate(vote) {
  if (vote >= 8) return "green";
  else if (vote >= 5) return "orange"; 
  else return "red";
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Becasue we used submit as we dont want to submit it to the page

  //Here we concating the link which is in the variable and then calling the getMovie function
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload(); //to reload the page 
  }
});
