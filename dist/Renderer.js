class Renderer {
  renderingMovies = (data) => {
    const source = $("#movies-templete").html();
    const template = Handlebars.compile(source);
    const somehtml = template({ movie: data });
    $("#movie-container").append(somehtml);
  };
}
