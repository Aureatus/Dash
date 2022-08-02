import { useEffect, useState } from 'react';

import { Container, LoadingText, SpinningLogo } from './StyledComponents';

const LoadingPage = () => {
  const [pageContent, setPageContent] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageContent(
        <Container>
          <SpinningLogo src="bolt-svgrepo-com.svg" />
          <LoadingText>Loading...</LoadingText>
        </Container>,
      );
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return pageContent;
};

export default LoadingPage;
