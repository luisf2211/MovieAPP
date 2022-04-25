const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8c5d0843ccb2dc747c435e1a482020a4';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=8c5d0843ccb2dc747c435e1a482020a4&query=`; 
const IMG_URL = `https://image.tmdb.org/t/p/w1280/`; 

const insertCards = document.getElementById('insertCards'); 
const search = document.getElementById('searchNav'); 
const main = document.getElementById('main'); 
const cards = document.getElementById('insertCards'); 



fetch(API_URL)
.then(res => res.json())
.then(data => console.log(data.results)); 

// Get movies 

getMovies(API_URL)

function getMovies(API_URL) {

  fetch(API_URL)
  .then(res => res.json())
  .then(data => displayMovies(data.results)); 
  
}



function displayMovies(movies) {

  main.innerHTML='';
  
  movies.forEach(movie => {

  const {title, poster_path ,overview, vote_average, release_date} = movie; 
  const movieEl = document.createElement('div'); 

  movieEl.innerHTML = `

  <div class="col">
  <div class="card text-white bg-dark mb-3 card h-100">
    <img src="https://image.tmdb.org/t/p/w1280${poster_path}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${overview} </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Fecha de estreno: ${release_date} </small> <br>
      <small class="text-muted" id="popularidad" >Popularidad: ${rating(vote_average)}   </small>
    </div>
  </div>
  
  
  `
  main.appendChild(movieEl); 
  });


  
}

function rating(votes) {

  if (votes >= 7) {

    return '&#x1F31F; &#x1F31F; &#x1F31F; &#x1F31F; &#x1F31F;'
     
  } else if(votes >= 4) {
    
    return '&#x1F31F; &#x1F31F; &#x1F31F; &#x1F31F;' 
    
  } else if(votes >= 0){
    
    return '&#x1F31F; &#x1F31F; &#x1F31F;'

  }
  
}


function searchMovie() {

   let searchTerm = search.value; 
  
  if (searchTerm && searchTerm !=='') {

    getMovies(SEARCH_URL+searchTerm); 
    
  } else {

    window.location.reload(); 
    
  }
  
}













