var QuoteList = function(url){
  // getting the data from the url - url was passed in from app.js
  this.url = url;
  this.quotes = [];
  // this.onUpdate = null;
}

QuoteList.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest();
    request.open("GET", this.url)
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText;
        this.quotes = JSON.parse(jsonString);
        callback(this.quotes);
      }
    }.bind(this);
    
    request.send()
  }

}