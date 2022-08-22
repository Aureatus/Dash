import useGetMessages from '../../hooks/useGetMessages';
import LoadingPage from '../LoadingPage/LoadingPage';
import MessageDisplay from './MessageDisplay';
import MessageSend from './MessageSend';
import { Attribution, Footer, HomeContainer, MessageContainer } from './StyledComponents';

const HomePage = () => {
  const [messages, loading, error] = useGetMessages();

  if (loading)
    return (
      <HomeContainer>
        <LoadingPage text={'Messages loading...'} />
      </HomeContainer>
    );
  if (error) return <HomeContainer>{error}</HomeContainer>;
  return (
    <HomeContainer>
      <MessageContainer>
        <MessageDisplay messages={messages} />
        <MessageSend />
      </MessageContainer>
      <Footer>
        <Attribution
          href="https://www.flaticon.com/free-icons/person"
          title="person icons"
        >
          Person icons created by Digby Garrett - Flaticon
        </Attribution>
      </Footer>
    </HomeContainer>
  );
};

export default HomePage;
