import React from "react";
import styled from "styled-components";

const RemoveBookmark = () => {
  return (
    <Container>
      <span className="mr-2">Remove Bookmark </span>
      <svg width="2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </Container>
  );
};

export default RemoveBookmark;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 50px;
  width: 50%;
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  text-align: center;
  background: rgba(28, 26, 78, 0.9);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
  @media only screen and (max-width: 991px) {
    opacity: 1;
  }
`;
