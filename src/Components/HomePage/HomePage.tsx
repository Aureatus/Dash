import useGetMessages from '../../hooks/useGetMessages';
import MessageDisplay from './MessageDisplay';
import MessageSend from './MessageSend';
import { HomeContainer } from './StyledComponents';

const HomePage = () => {
  const [messages, loading, error] = useGetMessages();

  if (loading) return <HomeContainer>Loading</HomeContainer>;
  if (error) return <HomeContainer>{error}</HomeContainer>;
  return (
    <HomeContainer>
      <MessageDisplay messages={messages} />
      <MessageSend />
    </HomeContainer>
  );
};

export default HomePage;
