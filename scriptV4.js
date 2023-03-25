// definition de l'url de API endpoint
const URL = "http://localhost:8000/api/v1/titles/";


// Creation de dictionnaire ou arroy pour stocker les info
let bestMovies = [];


// Fetch les top-rated films depuis l'API endpoint
fetch(URL + "?sort_by=-imdb_score")
  .then((response) => response.json())// Transformer la reponse en JSON format
  .then((data) => {
    // Afficher les info (titre et image) du film en vedette
    document.getElementById("top-title").textContent = data.results[0].title;
    document.querySelector("#top0 > img").src = data.results[0].image_url;
    document.querySelector("#top0 > img").alt = data.results[0].title;
    console.log(data.results);// debugging


    // ajouter les films restants (i+1) au array
    for (let i = 1; i < data.results.length; i++) {
      bestMovies.push(data.results[i]);
    }

    // Fetch les top-rated films depuis la seconde page de l'API endpoint
    fetch(URL + "?sort_by=-imdb_score&page=2")
      .then((response) => response.json())// Transformer la reponse en JSON format
      .then((data) => {// continuer d'ajouter les film de la 2eme page au array 
        //en respectant la suite numerique et le max de 7films
        const begin = bestMovies.length;
        for (let i = begin; i < 8; i++) {
          bestMovies.push(data.results[i - begin]);
        }

        // boucler sur chaque film de array bestMovies
        bestMovies.forEach((movie) => {
          console.log(movie);// debugging

          // creation de l'élément "div" avec la class "movie"
          let movieContainer = document.createElement("div");
          movieContainer.classList.add("movie");

          // Ajout d'un "event listener" à l'element div pour afficher le feneter modal quand il est cliqué
          movieContainer.addEventListener("click", () => {
            displayModal(movie);
          });

          // Afficher les info (titre et image) du film dans le `div` element
          let movieTitle = document.createElement("h3");
          movieTitle.textContent = movie.title;
          let movieImage = document.createElement("img");
          movieImage.src = movie.image_url;
          movieImage.alt = movie.title;
          movieContainer.appendChild(movieImage);
          movieContainer.appendChild(movieTitle);

          // Ajouter l'element dev à la page html avec id "best box picture"
          document
            .getElementById("best_box_picture")
            .appendChild(movieContainer);
        });
      });
    
    // Fetch plus d'info sur le film en vedette
    fetch(data.results[0].url)
      .then((response) => response.json())
      .then((data) => {

        // Afficher les info
        bestMovieInfo = data;
        document.getElementById("top-description").textContent =
          data.long_description; 
        document.getElementById("title_best").textContent = data.title;
        console.log(data);
        document.getElementById("description").textContent = data.description;
        document.getElementById("genre").textContent = data.genres;
        document.getElementById("director").textContent = data.directors;
        document.getElementById("imdb_score").textContent = data.imdb_score;
        document.getElementById("duration").textContent = data.duration;
        document.getElementById("date_published").textContent = data.date_published;
        document.getElementById("country").textContent = data.countries; 
        document.getElementById("actors").textContent = data.actors;
        document.getElementById("image").src = data.image_url;
        document.getElementById("image").alt = data.title;
        document.getElementById("rated").textContent = data.rated;
      });
  });
  // Ajout des "event listener" pour les boutons "Infos" et "X"
document.getElementById("button_more_info").addEventListener("click", () => {
  document.getElementById("modal_box").classList.toggle("hiden");

});
document.getElementById("button_close").addEventListener("click", () => {
  document.getElementById("modal_box").classList.toggle("hiden");
});

// Action

let bestMoviesAction = [];
fetch(URL + "?genre=Action&sort_by=-imdb_score")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    for (let i = 1; i < data.results.length; i++) {
      bestMoviesAction.push(data.results[i]);
    }
    fetch(URL + "?genre=Action&action_by=-imdb_score")
      .then((response) => response.json())
      .then((data) => {
        const begin = bestMoviesAction.length;
        for (let i = begin; i < 8; i++) {
          bestMoviesAction.push(data.results[i - begin]);
        }
        bestMoviesAction.forEach((movie) => {
          console.log(movie);
          let movieContainer = document.createElement("div");
          movieContainer.classList.add("movie");
          movieContainer.addEventListener("click", () => {
            displayModal(movie);
          });
          let movieTitle = document.createElement("h3");
          movieTitle.textContent = movie.title;
          let movieImage = document.createElement("img");
          movieImage.src = movie.image_url;
          movieImage.alt = movie.title;
          movieContainer.appendChild(movieImage);
          movieContainer.appendChild(movieTitle);
          document
            .getElementById("Action_box_picture")
            .appendChild(movieContainer);
        });
      });
  });

//War

let bestMoviesWar = [];
fetch(URL + "?genre=War&sort_by=-imdb_score")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    for (let i = 1; i < data.results.length; i++) {
      bestMoviesWar.push(data.results[i]);
    }
    fetch(URL + "?genre=War&page=2&sort_by=-imdb_score")
      .then((response) => response.json())
      .then((data) => {
        const begin = bestMoviesWar.length;
        for (let i = begin; i < 8; i++) {
          bestMoviesWar.push(data.results[i - begin]);
        }
        bestMoviesWar.forEach((movie) => {
          console.log(movie);
          let movieContainer = document.createElement("div");
          movieContainer.classList.add("movie");
          movieContainer.addEventListener("click", () => {
            displayModal(movie);
          });
          let movieTitle = document.createElement("h3");
          movieTitle.textContent = movie.title;
          let movieImage = document.createElement("img");
          movieImage.src = movie.image_url;
          movieImage.alt = movie.title;
          movieContainer.appendChild(movieImage);
          movieContainer.appendChild(movieTitle);
          document
            .getElementById("War_box_picture")
            .appendChild(movieContainer);
        });
      });
  });

// Sport

let bestMoviesSport = [];
fetch(URL + "?genre=Sport&sort_by=-imdb_score")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    for (let i = 1; i < data.results.length; i++) {
      bestMoviesSport.push(data.results[i]);
    }
    fetch(URL + "?genre=Sport&page=2&sort_by=-imdb_score")
      .then((response) => response.json())
      .then((data) => {
        const begin = bestMoviesSport.length;
        for (let i = begin; i < 8; i++) {
          bestMoviesSport.push(data.results[i - begin]);
        }
        bestMoviesSport.forEach((movie) => {
          console.log(movie);
          let movieContainer = document.createElement("div");
          movieContainer.classList.add("movie");
          movieContainer.addEventListener("click", () => {
            displayModal(movie);
          });
          let movieTitle = document.createElement("h3");
          movieTitle.textContent = movie.title;
          let movieImage = document.createElement("img");
          movieImage.src = movie.image_url;
          movieImage.alt = movie.title;
          movieContainer.appendChild(movieImage);
          movieContainer.appendChild(movieTitle);
          document
            .getElementById("Sport_box_picture")
            .appendChild(movieContainer);
        });
      });
  });

// fonction qui prend en entrée les data d'un film et les affiches dans la fenetre modal
displayModal = (data) => {

  fetch(data.url)
    .then((response) => response.json())
    .then((movie) => {

      // une fois les data reçues, elle sont utilisées pour maj la modal
      console.log(movie);
      document.getElementById("modal_box_2").classList.toggle("hiden");
      document.getElementById("title_2").textContent = movie.title;
      document.getElementById("description_2").textContent = movie.description;
      document.getElementById("genre_2").textContent = movie.genres;
      document.getElementById("director_2").textContent = movie.directors;
      document.getElementById("imdb_score_2").textContent = movie.imdb_score;
      document.getElementById("duration_2").textContent = movie.duration;
      document.getElementById("date_published_2").textContent = movie.date_published;
      document.getElementById("country_2").textContent = movie.countries;
      document.getElementById("actors_2").textContent = movie.actors;
      document.getElementById("image_2").src = movie.image_url;
      document.getElementById("image_2").alt = movie.title;
      document.getElementById("rated_2").textContent = movie.rated;
    });
};


// Ajout des "event listener" pour le click et le bouton et "X" du model2
document.getElementById("button_close_2").addEventListener("click", () => {
  document.getElementById("modal_box_2").classList.toggle("hiden");
});

// constantes pour les classes "right-button" et "left-button"
const rightBtn = document.querySelectorAll('.right-button');
const leftBtn = document.querySelectorAll('.left-button');

// boucle sur les evenements "event listener" de click du bouton 
rightBtn.forEach((btn) => {
  btn.addEventListener("click", function(event) {
        // en cliquant sur la fleche, l'élement est retrouvé par id (exp: data-box="War_box_picture") et un scrol de 600px est appliqué à droit.
    const conent = document.getElementById(btn.dataset.box);
    conent.scrollLeft += 600;
    event.preventDefault();
  }); 
});

// boucle sur les evenements "event listener" de click du bouton 
leftBtn.forEach((btn) => {
  btn.addEventListener("click", function(event) {
        // en cliquant sur la fleche, l'élement est retrouvé par id (exp: data-box="War_box_picture") et un scrol de 600px est appliqué à gauche.
        const conent = document.getElementById(btn.dataset.box);
    conent.scrollLeft -= 600;
    event.preventDefault();
  });
});
