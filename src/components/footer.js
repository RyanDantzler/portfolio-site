import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <a href="https://github.com/ryandantzler/portfolio-site">
                <div>Designed &amp; Built by Ryan Dantzler</div>
            </a>
        </StyledFooter>
    );
}

export default Footer;