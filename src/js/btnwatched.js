import { localStorageApi } from './watched';
import toastr from 'toastr';

import './toastr.config';
import 'toastr/build/toastr.min.css';

const refs = {
  showWatchedBtn: document.querySelector('#showWatchedBtn'),
  watchedList: document.querySelector('.main-list'),
};

let watchedFilms = JSON.parse(localStorage.getItem(localStorageApi.key));

const onShowWatchedBtnClick = () => {
  watchedFilms = JSON.parse(localStorage.getItem(localStorageApi.key));

  if (watchedFilms.length === 0)
    toastr.warning('There are no films in the watched yet');

  localStorageApi.render(refs.watchedList, watchedFilms);
};

refs.showWatchedBtn.classList.add('active');

localStorageApi.createsDataModel();

localStorageApi.render(refs.watchedList, watchedFilms);

refs.showWatchedBtn.addEventListener('click', onShowWatchedBtnClick);
