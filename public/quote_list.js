var QuoteList = function(url){
 
  this.url = url;
  this.quotes = [];
  this.done = null;
}

QuoteList.prototype = {

  populate: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.url)
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText;
        this.quotes = JSON.parse(jsonString);
        this.done(this.quotes);
      }
    }.bind(this);

    request.send()
    // console.log(this)
  }

}