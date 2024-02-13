var imageGrid;
var shuffleButton;

function shuffleElements(container) {
    var elements = container.children;
    for (var i=0; i<elements.length; i++) {
      container.appendChild(elements[Math.random() * i | 0]);
    }
  }

  window.addEventListener('load', function() {
    imageGrid = document.getElementsByClassName('image-grid')[0];
    shuffleElements(imageGrid);

    shuffleButton = document.getElementById("shuffle-button");
    shuffleButton.addEventListener('click', () => {
      shuffleElements(imageGrid);
    });
  });