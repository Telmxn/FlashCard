import { instance } from ".";

const fetchFlashCards = async () => {
  try {
    const { data } = await instance.get(`cards?_sort=order`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const createFlashCard = async ({
  text,
  question,
  image,
  answer,
  description,
  answerImage,
  dateTime,
  status,
}) => {
  try {
    const datab = {
      text: text,
      question: question,
      image: image,
      answer: answer,
      description: description,
      answerImage: answerImage,
      dateTime: dateTime,
      status: status,
    };
    await instance.post(`cards`, datab, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await instance.get(`cards`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateFlashCard = async ({
  id,
  text,
  question,
  image,
  answer,
  description,
  answerImage,
  dateTime,
  status,
}) => {
  try {
    const datab = {
      id: id,
      text: text,
      question: question,
      image: image,
      answer: answer,
      description: description,
      answerImage: answerImage,
      dateTime: dateTime,
      status: status,
    };
    await instance.put(`cards/${id}`, datab, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await instance.get(`cards`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateStatusOfFlashCard = async ({ id, status }) => {
  try {
    const datab = {
      status: status,
    };
    await instance.patch(`cards/${id}`, datab, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await instance.get(`cards`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateOrderOfFlashCard = async ({ id, order }) => {
  try {
    const datab = {
      order: order,
    };
    await instance.patch(`cards/${id}`, datab, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await instance.get(`cards`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const removeFlashCard = async ({ id }) => {
  try {
    await instance.delete(`cards/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await instance.get(`cards`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  fetchFlashCards,
  createFlashCard,
  updateFlashCard,
  removeFlashCard,
  updateStatusOfFlashCard,
  updateOrderOfFlashCard,
};
