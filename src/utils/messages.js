const wait = async () => {
  return new Promise((resolve) => setTimeout(resolve, 4000));
};

export const getMessages = async () => {
  //await wait();
  const response = await fetch("http://localhost:8000/messages");
  if (!response.ok) {
    throw new Error("Messages count not be fetch");
  }
  const data = await response.json();
  return data;
};

export const sendMessage = async (newMessage) => {
  await wait();
  const response = await fetch("http://localhost:8000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMessage),
  });
  if (!response.ok) {
    throw new Error("Messages couldn't not be created");
  }
  const data = await response.json();
  return data;
};
