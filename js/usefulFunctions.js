var containerClassName = 'image-grid';

// we don't set this here because it will get set later.
var selectedImageContainer;
var clickNumber = 0;


// this function uses the containerClassName variable you wrote at the top,
// which is the box containing all of your images
// and hands it to the selectedImageContainer variable.
function assignContainer(classNameVariable){
    var imageContainerClass = document.getElementsByClassName(classNameVariable);
    selectedImageContainer = imageContainerClass[0];
}

function giveThingsAnIdLabel(container) {
    // make elements point to all the children of container
    var elements = container.children;

    // iterate over every item, and give them an each id called img-0, img-1, img-2... etc
    for (var i=0; i<elements.length; i++) {
    elements[i].setAttribute('id', 'img-'+i.toString());
  };
}

// for making things appear one by one we can use the following two functions:

function makeThingsInvisible(container) {
    var elements = container.children;

    // iterate over every item, and make all of their opacity to zero.
    for(var i=0; i<elements.length; i++){
        elements[i].style.opacity = 0;
    }
}

function makeThingsAppearOneByOne(container){
    var elements = container.children;
    var numberOfImages = elements.length;
    if (clickNumber < numberOfImages){
        elements[clickNumber].style.opacity = 1;
        clickNumber = clickNumber+1;
    }
    console.log(clickNumber);
    console.log(numberOfImages);
}

// for randomly positioning things, we can use the following functions:

// this function just gives you a random number between min and max.
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// this function gets a random number and gives it to element's z-index.
// z-index is order things are in front of or behind other things.
function randomzindex(element){
    let zNumber = getRandomNumber(0, 100);
    
    // .style is used to access the attributes you can set with the CSS sheet.
    element.style.zIndex = zNumber;
  }
  
function randomPosition(element){

    // randomly generate an x coordinate and a y coordinate.
    let posNumberX = getRandomNumber(0,1000);
    let posNumberY = getRandomNumber(0,400);

    // assign them to element's left side and top side (we can imagine 0,0 the top left corner).
    element.style.left = posNumberX;
    element.style.top = posNumberY;
}
  
// this function handles everything on the individual level.
function positionElement(element){
    randomzindex(element);
    randomPosition(element);
}

// this function handles things on the container level.
function applyRandomPosition(container) {
    var elements = container.children;
    for(i=0; i<elements.length; i++){
        positionElement(elements[i]);
    }
}

function clickAnywhereFunction() {
    makeThingsAppearOneByOne(selectedImageContainer);
};

function shuffleButtonFunction() {
    applyRandomPosition(selectedImageContainer);
}

// this is where functions go so they can run as soon as the window finishes loading.
window.addEventListener('load', function(){

    // first things first - run the assignContainer function
    assignContainer(containerClassName);

    // second thing - give all the items in the container an ID,
    // so they can be selected individually if they need to be
    giveThingsAnIdLabel(selectedImageContainer);


    // shuffle the images around
    applyRandomPosition(selectedImageContainer);

    // start off by making things invisible.
    makeThingsInvisible(selectedImageContainer);


    // make buttons do things in the window event listener.
    shuffleButton = document.getElementById("shuffle-button");
    shuffleButton.addEventListener('click', () => {
      shuffleButtonFunction();
    });

});

// when anywhere on the document is clicked, run the function
document.addEventListener('click', function(){
    clickAnywhereFunction();
});
