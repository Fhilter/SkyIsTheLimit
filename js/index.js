//API fetch from NASA's picture of the day
const apiKey = "GYiSRpUWuQgABchLBHyI2VAd3mF9tXBd7IHtXFfw";

const apodModalImage = document.getElementById("apod-modal-image");
const apodModalTitle = document.getElementById("apod-modal-title");
const apodModalDate = document.getElementById("apod-modal-date");
const apodModalDescription = document.getElementById("apod-modal-description");

function updateAPOD() {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const apodContainer = document.getElementById("apod-container");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("apod-image").src = data.url;
      document.getElementById("apod-title").textContent = data.title;
      document.getElementById("apod-date").textContent = data.date;
      document.getElementById("apod-description").textContent =
        data.explanation;
    })
    .catch((error) => {
      console.error("Error fetching APOD data:", error);
      apodContainer.innerHTML =
        "An error occurred while fetching the APOD data from NASA...I guess it is rocket science";
    });
}

// Call the function to fetch APOD data when the page loads
window.addEventListener("load", updateAPOD);

// Function to generate a random date within the range of APOD images
function getRandomAPODDate() {
  const startDate = new Date("1995-06-16");
  const endDate = new Date(); // Current date
  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);
  return randomDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
}

//Open the modal on click and show a random image
function openModal() {
  const modal = document.getElementById("apod-modal");
  modal.style.display = "block";

  const randomDate = getRandomAPODDate();
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randomDate}`;

  const apodModalContainer = document.getElementById("apod-modal-container");

  // Fetch and update APOD data
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      apodModalImage.src = data.url;
      apodModalTitle.textContent = data.title;
      apodModalDate.textContent = data.date;
      apodModalDescription.textContent = data.explanation;
    })
    .catch((error) => {
      console.error("Error fetching APOD data:", error);
      apodModalContainer.innerHTML =
        "An error occurred while fetching the APOD data.";
    });
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("apod-modal");
  modal.style.display = "none";
}

// Fetch a new random APOD using the APOD API
function refreshAPOD() {
  const randomDate = getRandomAPODDate();
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randomDate}`;

  const loadingContainer = document.getElementById("loading-container");
  loadingContainer.style.display = "block";

  // Set the minimum display time in milliseconds (e.g., 2000 milliseconds = 2 seconds)
  const minimumDisplayTime = 2000;

  // Fetch and update APOD data
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const timeElapsed = Date.now() - startTime;
      if (timeElapsed < minimumDisplayTime) {
        // If the minimum display time hasn't passed, delay the hiding of the loading screen
        setTimeout(() => {
          loadingContainer.style.display = "none";
          updateAPODContent(data);
        }, minimumDisplayTime - timeElapsed);
      } else {
        // If the minimum display time has passed, hide the loading screen immediately
        loadingContainer.style.display = "none";
        updateAPODContent(data);
      }
    })
    .catch((error) => {
      loadingContainer.style.display = "none";
      console.error("Error fetching APOD data:", error);
      apodModalContainer.innerHTML =
        "An error occurred while fetching the APOD data.";
    });

  // Record the start time before the fetch request
  const startTime = Date.now();
}

function updateAPODContent(data) {
  // Update the APOD content with the retrieved data
  const apodModalImage = document.getElementById("apod-modal-image");
  const apodModalTitle = document.getElementById("apod-modal-title");
  const apodModalDate = document.getElementById("apod-modal-date");
  const apodModalDescription = document.getElementById(
    "apod-modal-description"
  );

  apodModalImage.src = data.url;
  apodModalTitle.textContent = data.title;
  apodModalDate.textContent = data.date;
  apodModalDescription.textContent = data.explanation;
}

//Reveal modal for solar system contained in milkyway image
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("solarSystemOrbits");
const closeSSModal = document.getElementById("closeSSModal");

const areas = document.querySelectorAll("area");
const body = document.body;

areas.forEach((area) => {
  area.addEventListener("click", function () {
    const imageSource = this.getAttribute("data-image");
    modalImage.src = imageSource;
    modal.style.display = "block";
    body.classList.add("modal-open");
  });
});

closeSSModal.addEventListener("click", function () {
  modal.style.display = "none";
  body.classList.remove("modal-open");
});

//scroll behaviour for the rows of galaxy images to appear
const handleScroll = () => {
  const rows = document.querySelectorAll(".row");
  const windowBottom = window.scrollY + window.innerHeight;

  rows.forEach((row) => {
    const rowTop = row.getBoundingClientRect().top + window.scrollY;

    if (rowTop < windowBottom) {
      row.classList.add("appear");
    }
  });
};

// Initial check for elements in view on page load
handleScroll();
window.addEventListener("scroll", handleScroll);
