import { instance } from ".";

const createMessage = async ({ id, name, email, subject, message }) => {
  try {
    const datab = {
      id: id,
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    const { data } = await instance.post(`messages`, datab, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { createMessage };
