import { loadImages } from './pixabay-api.js';
import { renderImages, clearImages } from './render-functions.js';

const searchButton = document.querySelector('input[name=search]');
const searchInput = document.querySelector('.search-form button');
const searchForm = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.search.value.trim();

  if (searchQuery === '') {
    // todo error message if empty?
    return;
  }

  startLoadingImages(searchQuery);
});

function startLoadingImages(searchQuery) {
  // TODO start loading indicator
  clearImages(galleryList);

  loadImages(searchQuery)
    .then(images => {
      if (images.length === 0) {
        // todo error, and clean up UI
        console.log('No images found');
        return;
      }

      console.log(images);
      renderImages(galleryList, images);
    })
    .catch(error => {
      console.log(error);
      // TODO clean up UI and show error
    });
}
