import httpClient from "../httpClient/httpClient";

export function apiClient() {
  return {
    cards: {
      get: (id) => httpClient.get(`/posts/${id}`),
      post: (card) => httpClient.post(`/posts`, card),
    },
  };
}
