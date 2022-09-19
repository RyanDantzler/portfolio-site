import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config';
import sr from '../../utils/sr';
import headshot from '../../images/me.png';

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--orange);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--orange);
    &:hover,
    &:focus {
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--orange);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig());
      }, []);

    const skills = ['JavaScript (ES6+)', 'C#', 'React', '.NET Core', 'Node.js', 'SQL Server'];

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
        <h2 className="numbered-heading">About Me</h2>

        <div className="inner">
            <StyledText>
            <div>
                <p>
                Hello! My name is Ryan and I enjoy creating things that live on the internet. My
                interest in web development started back in 2011 when I got the opportunity to try building
                a small business website from scratch — turns out hacking together some basic webpages taught me a lot
                about HTML &amp; CSS!
                </p>

                <p>
                Fast-forward to today, and I’ve had the privilege of working at{' '}
                <a href="https://filterdigital.com/" rel="noreferrer">a professional services agency</a>,{' '}
                <a href="https://merkle.com/" rel="noreferrer">a marketing firm</a>,{' '}
                <a href="https://www.dentsu.com/" rel="noreferrer">a huge corporation</a>, and{' '}
                <a href="https://debtmaster.edu/" rel="noreferrer">a small software company</a>. My
                main focus these days is building accessible, inclusive business solutions and digital
                experiences at <a href="https://dentsu.com/" rel="noreferrer">Dentsu</a>.
                </p>

                <p>
                I also recently launched a{' '}
                <a href="https://www.ryandantzler.com/snake/multiplayer">
                    real-time multiplayer game
                </a>{' '}
                that's built with Node
                &amp; socket.io.
                </p>

                <p>Here are a few technologies I’ve been working with recently:</p>
            </div>

            <ul className="skills-list">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
            </StyledText>

            <StyledPic>
            <div className="wrapper">
                <img 
                className="img"
                src={headshot}
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
                />
            </div>
            </StyledPic>
        </div>
        </StyledAboutSection>
    );
};

export default About;