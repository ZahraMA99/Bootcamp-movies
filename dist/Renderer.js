class Renderer {
  renderingMovies = (data) => {
    const source = $("#movies-templete").html();
    const template = Handlebars.compile(source);
    const somehtml = template({ movie: data });
    $("#movie-container").append(somehtml);
  };
  renderingRates = (data) => {
    const source = $("#movies-templete").html();
    const template = Handlebars.compile(source);
    const somehtml = template({ rate: data });
    $("#movie-container").append(somehtml);
  };
}
