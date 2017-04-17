var QuotesView = function(selectedElement, selectedButton, quoteList){
  this.selectedElement = selectedElement;
  this.selectedButton = selectedButton;
  this.quoteList = quoteList;
  this.selectedButton.addEventListener("click", this.newquotes.bind(this));
};

QuotesView.prototype = {

  render: function(quotes){
    var pTag = document.createElement("p");
    pTag.innerText = "'" + quotes + "'"
    this.selectedElement.appendChild(pTag);
  },

  
  newquotes: function(){
    // console.log("cleared");
    this.selectedElement.innerHTML = "";
    this.quoteList.populate();
  }

};