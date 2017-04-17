var app = function(){

  var quoteList = new QuoteList("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
  var quotesView = new QuotesView(document.querySelector(".quotes"), document.querySelector("#get-new-quote"), quoteList);

  quoteList.done = quotesView.render.bind(quotesView)
  quoteList.populate();
}


window.onload = app;