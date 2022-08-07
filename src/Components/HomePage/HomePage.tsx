import useGetMessages from '../../hooks/useGetMessages';
import MessageDisplay from './MessageDisplay';
import MessageSend from './MessageSend';

const HomePage = () => {
  const [messages, loading, error] = useGetMessages();

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <MessageDisplay messages={messages} />
      <MessageSend />
    </div>
  );
};

export default HomePage;
