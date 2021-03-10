const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

// Unsplash API 
const count = 10
const apiKey = 'AsRTbuad4JfAF5BWQ_uvv4EumoM8r_OClX3BQT0jLuU'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Create Elements for Links and Photos, and Add to DOM
function displayPhotos() {
  // Run function for each object in the photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a')
    item.setAttribute('href', photo.links.html)
    item.setAttribute('target', '_blank')
    // Create Image for Photo
    const img = document.createElement('img')
    img.setAttribute('src', photo.urls.regular)
    img.setAttribute('alt', photo.alt_description)
    img.setAttribute('title', photo.alt_description)
    // Put image inside anchor element then put both inside imageContainer element
    item.appendChild(img)
    imageContainer.appendChild(item)

  })
}

// Get photos from unsplash 
async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhotos()
  } catch (error) {
    // Catch Error Here 
  }
}

// On load
getPhotos()