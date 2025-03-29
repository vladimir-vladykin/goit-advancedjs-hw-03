import { loadImages } from './pixabay-api.js';

const searchButton = document.querySelector('input[name=search]');
const searchInput = document.querySelector('.search-form button');
const searchForm = document.querySelector('.search-form');

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
  loadImages(searchQuery)
    .then(images => {
      console.log(images);
    })
    .catch(error => {
      console.log(error);
      // TODO clean up UI and show error
    });
}
