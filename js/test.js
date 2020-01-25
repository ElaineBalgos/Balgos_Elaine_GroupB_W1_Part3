(() => {
  // this is an IIFE -> also an implemnetation of the module pattern

  // slways go and get the elements you're working width
  const mySpan = document.querySelector('main span'),
        myObject = document.querySelector('.svg-img');

  // funstionality goes here => what we want to happen
  function toggleSelection() {
    // we want to update our UI to make it look like
    //we're making a toggleSelection
    //debugger;
    // add a CSS class to the element with Javascript
    this.classList.toggle("selected");
    console.log(this.id);
  }

  // figure out what triggers will drive  the functionality
  mySpan.addEventListener('click', toggleSelection);
  myObject.addEventListener('click', toggleSelection);


})()
