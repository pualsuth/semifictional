var imageGrid;
function shuffleElements(container) {
    var elements = container.children;
    for (var i = elements.length; i >= 0; i--) {
      container.appendChild(elements[Math.random() * i | 0]);
    }
  }

  window.addEventListener('load', function() {
    imageGrid = document.getElementsByClassName('image-grid')[0];
    shuffleElements(imageGrid);
  });
