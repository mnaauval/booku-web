import React from "react";
import styled from "styled-components";

const AddBookmark = () => {
  return (
    <Container>
      <span className="mr-2">Add Bookmark</span>
      <svg width="2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
      </svg>
    </Container>
  );
};

export default AddBookmark;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 50px;
  width: 50%;
  transition: 0.5s ease;
  opacity: 0;
  text-align: center;
  bottom: 0;
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
