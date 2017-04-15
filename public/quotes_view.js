var QuotesView = function(selectedElement, clearButton){
  this.selectedElement = selectedElement;
  // this.selectedButton = selectedButton;
  // this.selectedButton.addEventListener("click", this.newquotes.bind(this));
};

QuotesView.prototype = {


    render: function(quotes){
      var pTag = document.createElement("p");
      pTag.innerText = quotes
      this.selectedElement.appendChild(pTag);
    },

  

  // clear: function(){
  //   console.log("Clear button....")
  //   this.detailsElement.innerHTML = "";
  // }

};