import React from "react";
import styled from "styled-components";

const Book = ({ image, title, authors, item, handleBookmark, bookmarkComponent }) => {
  const BookmarkComponent = bookmarkComponent;
  return (
    <BookList>
      <BookCard>
        <ImageContainer onClick={() => handleBookmark(item)}>
          <img src={image} alt={image} />
          <BookmarkComponent />
        </ImageContainer>
        <h4>{title}</h4>
        <p>{authors}</p>
      </BookCard>
    </BookList>
  );
};

export default Book;

const BookList = styled.div`
  text-align: center;
  /* background-color: blue; */
  @media only screen and (min-width: 769px) {
    padding: 1.2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    margin: 0.5rem auto;
  }
`;

const BookCard = styled.div`
  overflow: hidden;
  img {
    width: 50%;
    /* max-height: 300px; */
    border-radius: 10px;
    /* margin: 0.5rem 0; */
    transition: all 0.1s ease-in-out;
    :hover {
      cursor: pointer;
    }
  }
  h4 {
    margin: 0.5rem 0;
  }
  a {
    text-decoration: none;
    :hover {
      cursor: pointer;
      transition: all 0.1s ease-in-out;
    }
  }
  p {
    margin: 0.5rem 0;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  transition: transform 0.2s;
  text-align: center;
`;
