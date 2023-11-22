import styled, { ThemeProvider } from 'styled-components';

import qrCode from './assets/images/image-qr-code.png';

const theme = {
  mobileSize: '375px',
  desktopSize: '1024px',

  white: 'hsl(0 0% 100%)',
  lightGrey: 'hsl(212 45% 89%)',
  grayBlue: 'hsl(220 15% 55%)',
  darkBlue: 'hsl(218 44% 22% / 0.2)',

  textMedium: '15px',

  outfit: '"Outfit", sans-serif',

  normal: '400',
  semiBold: '700',
};

const Main = styled.main`
  background-color: ${(props) => props.theme.lightGrey};

  font-family: ${(props) => props.theme.outfit};
  font-weight: ${(props) => props.theme.normal};

  min-height: 90vh;
  padding: 3rem;
`;

const Wrapper = styled.article`
  max-width: 320px;

  background-color: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;
  padding-bottom: 40px;
  border-radius: 16px;
  margin: 0 auto;

  box-shadow: 0 4px 64px ${(props) => props.theme.darkBlue};
`;

const QrCode = styled.img`
  width: 100%;
  aspect-ratio: 1;

  border-radius: 12px;
`;

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  font-size: 15px;

  text-align: center;

  padding: 16px;
  padding-bottom: 0;
`;

const Title = styled.h1`
  font-weight: ${(props) => props.theme.semiBold};
`;

const Caption = styled.p`
  font-size: ${(props) => props.theme.textMedium};
  color: ${(props) => props.theme.grayBlue};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Wrapper>
          <div className='image-container'>
            <QrCode src={qrCode}></QrCode>
          </div>
          <CaptionContainer className='caption-container'>
            <Title>Improve your front-end skills by building projects</Title>
            <Caption>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Caption>
          </CaptionContainer>
        </Wrapper>
      </Main>
    </ThemeProvider>
  );
}

export default App;
