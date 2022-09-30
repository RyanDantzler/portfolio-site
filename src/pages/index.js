import styled from 'styled-components';
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Jobs from '../components/sections/jobs';
import Contact from '../components/sections/contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;