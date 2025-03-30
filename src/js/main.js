import { loadImages } from './pixabay-api.js';
import { renderImages, clearImages } from './render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchButton = document.querySelector('input[name=search]');
const searchInput = document.querySelector('.search-form button');
const searchForm = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.search.value.trim();

  if (searchQuery === '') {
    return;
  }

  startLoadingImages(searchQuery);
});

// setup lib for image details
const lighboxInstance = new SimpleLightbox('.gallery a', {
  disableScroll: false,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

function startLoadingImages(searchQuery) {
  clearImages(galleryList);

  loadImages(searchQuery)
    .then(images => {
      if (images.length === 0) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      console.log(images);
      renderImages(galleryList, images);
      lighboxInstance.refresh();
    })
    .catch(error => {
      showErrorMessage(error);
    });
}

function showErrorMessage(message) {
  iziToast.show({
    message,
    messageColor: 'white',
    position: 'topRight',
    backgroundColor: '#ef4040',
  });
}
