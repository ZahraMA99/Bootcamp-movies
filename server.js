const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/sanity", function (request, response) {
  response.send("Ok");
});

app.get("/movies/:title", function (request, response) {
  let title = request.params.title;
  axios
    .get(`http://www.omdbapi.com/?apikey=b0d39b78&s=${title}`)
    .then(function (res) {
      let movies = res.data.Search;
      //console.log(movies);
      let moviesInfo = movies.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        posterLink: movie.Poster,
        year: movie.Year,
      }));
      response.send(moviesInfo);
    });
});

app.get("/movies/:id", function (request, response) {
  let id = request.params.id;
  axios
    .get(`http://www.omdbapi.com/?apikey=b0d39b78&i=${id}`)
    .then(function (res) {
      let moviesID = res.data.Search;
      let M_ID = moviesID.find((movie_id) => movie_id == id);
      let ratingArray = M_ID.Ratings;
      response.send(ratingArray);
    });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
