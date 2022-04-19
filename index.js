// Componente del navbar para realizar busquedas.
navBar = () => {

   let elementos = document.getElementById("buscador").value; 
   let url = `https://api.themoviedb.org/3/search/movie?api_key=8c5d0843ccb2dc747c435e1a482020a4&query=${elementos}`;

   fetch(url).then(response => response.json()).then(data => { 

      for (let i = 0; i < data.results.length; i++) {
         document.getElementById('cartas').innerHTML += ` 
   
         <div class="col">
         <div class="card h-100">
           <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title"> ${data.results[i].original_title} </h5>
             <p class="card-text"> ${data.results[i].overview} </p>
             <span class="badge bg-warning text-dark"> Votos: ${data.results[i].vote_average}</span>
           </div>
           <div class="card-footer">
             <small class="text-muted">Fecha de lanzamiento: ${data.results[i].release_date} </small>
           </div>
         </div>
       </div> 
       `}
   }); 

}

// COMPONENTE SECCION TRENDING.

let trending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=8c5d0843ccb2dc747c435e1a482020a4'; 

fetch(trending).then(response => response.json()).then(data => { 

    for (let i = 0; i < data.results.length; i++) {
      document.getElementById('seccionCartas').innerHTML += ` 

      <div class="col">
      <div class="card">
        <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.results[i].original_title}</h5>
          <p class="card-text">${data.results[i].overview}</p>
        </div>
      </div>
    </div>



    `}

   }); 
