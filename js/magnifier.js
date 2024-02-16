document.addEventListener('DOMContentLoaded', function () {
    const magnifyContainer = document.querySelector('.voyager-image-container');
    const zoomImage = document.getElementById('voyagerJourney');
  
    const magnifyingGlass = document.createElement('div');
    magnifyingGlass.id = 'magnifying-glass';
    magnifyContainer.appendChild(magnifyingGlass);
  
    magnifyContainer.addEventListener('mousemove', function (e) {
      const rect = magnifyContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const percentageX = (x / magnifyContainer.offsetWidth) * 100;
      const percentageY = (y / magnifyContainer.offsetHeight) * 100;
  
      magnifyingGlass.style.backgroundSize = `${zoomImage.width * 2}px ${zoomImage.height * 2}px`;
      magnifyingGlass.style.backgroundPosition = `${percentageX}% ${percentageY}%`;
  
      magnifyingGlass.style.left = `${x - magnifyingGlass.offsetWidth / 2}px`;
      magnifyingGlass.style.top = `${y - magnifyingGlass.offsetHeight / 2}px`;
  
      magnifyingGlass.style.display = 'block';
    });
  
    magnifyContainer.addEventListener('mouseleave', function () {
      magnifyingGlass.style.display = 'none';
    });
  });