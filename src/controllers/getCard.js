import requestInstance from "../requestInstance/requestInstance";

const getCard = async () => {
  const randNum = Math.ceil(Math.random() * 100);
  const { data: card } = await requestInstance.get(`/posts/${randNum}`);
  return card;
};

export default getCard;
