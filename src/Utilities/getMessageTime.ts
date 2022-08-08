const getMessageTime = (messageSeconds: number) => {
  const currentTime = Date.now();
  const timeDifference = currentTime / 1000 - messageSeconds;
  if (timeDifference > 86400) {
    const time = new Date(messageSeconds * 1000).toLocaleDateString();
    return time;
  } else {
    const time = new Date(messageSeconds * 1000).toISOString().substring(11, 16);
    return time;
  }
};

export default getMessageTime;
