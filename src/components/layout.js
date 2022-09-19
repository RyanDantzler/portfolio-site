import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
    console.log(location);

    return (
        <>
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />

                    <a className="skip-to-content" href="#content">
                        Skip to Content
                    </a>

                    <StyledContent>
                        <Nav />
                        <Social />
                        <Email />

                        <div id="content">
                            {children}
                            <Footer />
                        </div>
                    </StyledContent>

                </ThemeProvider>
            </div>
        </>
    );
};

export default Layout;