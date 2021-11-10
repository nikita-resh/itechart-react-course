import httpClient from "../httpClient/httpClient";

const postCard = async (card) => {
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
};

export default postCard;
