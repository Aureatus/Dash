import useGetMessages from '../../hooks/useGetMessages';
import MessageDisplay from './MessageDisplay';
import MessageSend from './MessageSend';
import { HomeContainer, MessageContainer } from './StyledComponents';

const HomePage = () => {
  const [messages, loading, error] = useGetMessages();

  if (loading) return <HomeContainer>Loading</HomeContainer>;
  if (error) return <HomeContainer>{error}</HomeContainer>;
  return (
    <HomeContainer>
      <MessageContainer>
        <MessageDisplay messages={messages} />
        <MessageSend />
      </MessageContainer>
    </HomeContainer>
  );
};

export default HomePage;
