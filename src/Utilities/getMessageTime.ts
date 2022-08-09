const getMessageTime = (messageSeconds: number) => {
  const messageMilliseconds = messageSeconds * 1000;
  const messageDate = new Date(messageMilliseconds);
  const currentDate = new Date();
  const yesterday = new Date(currentDate);

  yesterday.setDate(yesterday.getDate() - 1);

  if (messageDate.toDateString() === yesterday.toDateString()) {
    const date = new Date(messageMilliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const time = hours + ':' + minutes;
    return { prefix: 'Yesterday at ', time: time };
  }

  if (messageDate.toDateString() === currentDate.toDateString()) {
    const date = new Date(messageMilliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const time = hours + ':' + minutes;
    return { prefix: 'Today at ', time: time };
  } else {
    const time = new Date(messageMilliseconds).toLocaleDateString();
    return { prefix: '', time: time };
  }
};

export default getMessageTime;
