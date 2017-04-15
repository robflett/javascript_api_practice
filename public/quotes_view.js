var QuotesView = function(selectedElement, selectedButton){
  this.selectedElement = selectedElement;
  this.selectedButton = selectedButton;
  this.selectedButton.addEventListener("click", this.newquotes.bind(this));
};

QuotesView.prototype = {


  render: function(quotes){
    var pTag = document.createElement("p");
    pTag.innerText = quotes
    this.selectedElement.appendChild(pTag);
  },

  

  newquotes: function(){
    this.selectedElement.innerHTML = "";
    app();
  }

};