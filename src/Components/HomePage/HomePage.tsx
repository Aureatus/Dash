import useGetMessages from '../../hooks/useGetMessages';
import MessageDisplay from './MessageDisplay';
import MessageSend from './MessageSend';
import { Attribution, Footer, HomeContainer, MessageContainer } from './StyledComponents';

const HomePage = () => {
  const [messages, loading, error] = useGetMessages();

  if (loading) return null;
  if (error) return <HomeContainer>{error}</HomeContainer>;
  return (
    <HomeContainer>
      <MessageContainer>
        <MessageDisplay messages={messages} />
        <MessageSend />
      </MessageContainer>
      <Footer>
        <Attribution href="https://www.flaticon.com/free-icons/user" title="user icons">
          User icons created by kmg design - Flaticon
        </Attribution>
      </Footer>
    </HomeContainer>
  );
};

export default HomePage;
