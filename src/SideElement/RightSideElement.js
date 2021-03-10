import React from "react";
import styled from "styled-components";

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
const RightSideElement = () => {
  return (
    <RightSideBarDiv>
      {" "}
      <RightSideBarDiv2>
        <a href="#">nwon2464@gmail.com</a>
      </RightSideBarDiv2>
    </RightSideBarDiv>
  );
};
export default RightSideElement;
