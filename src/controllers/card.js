import httpClient from "../httpClient/httpClient";

export async function getCard() {
  const randNum = Math.ceil(Math.random() * 100);
  const { data: card } = await httpClient.get(`/posts/${randNum}`);
  return card;
}

export async function postCard(card) {
  httpClient
    .post("/posts", {
      userId: 1,
      id: 101,
      title: card.title,
      body: card.text,
    })
    .then((res) => console.log("Request status: ", res.status))
    .catch((e) => {
      throw new Error(e.message);
    });
}
