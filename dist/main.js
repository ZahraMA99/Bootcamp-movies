let renderer = new Renderer();

$("#search-btn").on("click", function () {
  $("#movie-container").empty();
  let title = $("#input-bar").val();
  $.get(`/movies/${title}`, function (data) {
    renderer.renderingMovies(data);
  });
});

$("#movie-container").on("click", "#poster", function () {
  let imageID = $(this).attr("data-id");
  $.get(`/movies/${imageID}`, function (data) {
    renderer.renderingRates(data);
  });
});
