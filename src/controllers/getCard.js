import httpClient from "../httpClient/httpClient";

const getCard = async () => {
  const randNum = Math.ceil(Math.random() * 100);
  const { data: card } = await httpClient.get(`/posts/${randNum}`);
  return card;
};

export default getCard;
