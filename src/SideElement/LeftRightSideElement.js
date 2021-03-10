import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { social } from "../../data/data";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const LeftSideBarDiv = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 4rem;
  right: auto;
  z-index: 10;
  color: var(--color-text-light);
`;
const LeftSideBarUl = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  & li {
    padding: 1.5rem;
  }

  li > a {
    transition: all 0.25s var(--transition);
  }
  li > a:hover,
  li > a:active {
    color: var(--color-text-secondary);
    transform: translateY(-3px);
    transition: all 0.25s var(--transition);
  }
  & li a svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--color-text-light);
  }
  /* --light-slate#a8b2d1 */
`;

const RightSideBarDiv = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  right: 4rem;
  left: auto;
  z-index: 10;
  color: var(--color-text-light);
`;

const RightSideBarDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  & a {
    margin: 1.2rem auto;
    padding: 1rem;
    font-family: var(--font-mono);
    font-size: var(--font-18);
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    transition: all 0.25s var(--transition);
  }
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--color-text-light);
  }

  a:hover,
  a:active {
    color: var(--color-text-secondary);
    transform: translateY(-3px);
    transition: all 0.25s var(--transition);
  }
`;
const LeftRightSideElement = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <LeftSideBarDiv>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={2000}>
              <LeftSideBarUl>
                {social &&
                  social.map(({ url, name, icon }, i) => (
                    <li key={i}>
                      <a href={url} aria-label={name}>
                        {icon}
                      </a>
                    </li>
                  ))}
              </LeftSideBarUl>
            </CSSTransition>
          )}
        </TransitionGroup>
      </LeftSideBarDiv>

      <RightSideBarDiv>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={2000}>
              <RightSideBarDiv2>
                <a href="#">nwon2464@gmail.com</a>
              </RightSideBarDiv2>
            </CSSTransition>
          )}
        </TransitionGroup>
      </RightSideBarDiv>
    </>
  );
};
export default LeftRightSideElement;
