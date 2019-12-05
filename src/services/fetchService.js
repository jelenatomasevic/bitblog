class FetchService {
  fetch(url) {
    return fetch(url).then(response => response.json());
  }
}

export const fetchService = new FetchService();
