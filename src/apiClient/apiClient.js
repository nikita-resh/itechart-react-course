import httpClient from "../httpClient/httpClient";

function initApiClient() {
  return {
    cards: {
      get: (id) => httpClient.get(`/posts/${id}`),
      create: (card) => httpClient.post(`/posts`, card),
    },
  };
}

export const apiClient = initApiClient();
