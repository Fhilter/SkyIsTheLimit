const apiKey = "GYiSRpUWuQgABchLBHyI2VAd3mF9tXBd7IHtXFfw"; // Replace with your APOD API key
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

  // Fetch a random APOD using the APOD API
  const randomDate = getRandomAPODDate();
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randomDate}`;

  // Get references to the modal elements
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

function refreshAPOD() {
  // Fetch a new random APOD using the APOD API
  const randomDate = getRandomAPODDate();
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randomDate}`;

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

// galaxy images appear on scroll
