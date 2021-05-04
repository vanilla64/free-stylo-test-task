const VIDEOS_KEY = 'videos';
const CARD_KEY = 'card';

export const saveCardInLS = (data) => {
  localStorage.setItem(CARD_KEY, JSON.stringify(data));
}

export const getCardsFromLS = () => JSON.parse(localStorage.getItem(CARD_KEY));

export const removeCardFromLS = () => {
  localStorage.removeItem(CARD_KEY)
}

export const saveSearchVideosInLS = (data) => {
  localStorage.setItem(VIDEOS_KEY, JSON.stringify(data));
}

export const getSearchVideosFromLS = () => JSON.parse(localStorage.getItem(VIDEOS_KEY));

export const removeSearchVideosFromLS = () => {
  localStorage.removeItem(VIDEOS_KEY)
}
