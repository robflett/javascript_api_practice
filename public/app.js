var app = function(){

  var quoteList = new QuoteList("http://ron-swanson-quotes.herokuapp.com/v2/quotes");

  var quotesButton = document.querySelector("button");

  var quotesView = new QuotesView(document.querySelector("#quotes"), document.querySelector("#get-new-quote"));

  quoteList.done = quotesView.render.bind(quotesView)


  quoteList.populate();
      
    }


window.onload = app;