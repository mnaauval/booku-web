import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction, getCategoryResetAction, getBooksAction } from "../redux/actions/bookAction";
import { Container } from "./pageStyled";
import Book from "./Book";
import AddBookmark from "./AddBookmark";
import RemoveBookmark from "./RemoveBookmark";
import { allCategory } from "../dbtest/category";

const Search = () => {
  // state
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [bookmark, setBookmark] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  // redux
  const dispatch = useDispatch();
  const { dataGetCategory, isLoadingGetCategory, isSuccessGetCategory, isFailGetCategory, dataGetBooks, isLoadingGetBooks } = useSelector((state) => state.getCategoryReducer);

  useEffect(() => {
    if (dataGetCategory.length === 0) {
      dispatch(getCategoryAction());
    }
    if (isSuccessGetCategory) {
      if (category !== "") {
        dispatch(getBooksAction({ id: category, page: 0, limit: 14 }));
      }
    }
  }, [dispatch, dataGetCategory, isSuccessGetCategory, category]);

  useEffect(() => {
    if (isSuccessGetCategory) dispatch(getCategoryResetAction());
    if (isFailGetCategory) {
      alert("Error get category");
      dispatch(getCategoryResetAction());
    }
  }, [dispatch, isSuccessGetCategory, isFailGetCategory]);

  useEffect(() => {
    const bookmarkedBooks = JSON.parse(localStorage.getItem("booku-bookmark"));
    if (bookmarkedBooks) {
      setBookmark(bookmarkedBooks);
    }
  }, []);

  // search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredBooks = dataGetBooks?.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()) || book.authors.toString().toLowerCase().includes(search.toLowerCase()));

  // bookmark
  const saveToLocalStorage = (item) => {
    localStorage.setItem("booku-bookmark", JSON.stringify(item));
  };

  const addBookmark = (book) => {
    const newBookmark = [...bookmark, book];
    setBookmark(newBookmark);
    console.log("Bookmark Added");
    saveToLocalStorage(newBookmark);
  };

  const removeBookmark = (book) => {
    const newBookmark = bookmark.filter((item) => item.id !== book.id);
    setBookmark(newBookmark);
    console.log("Bookmark Removed");
    saveToLocalStorage(newBookmark);
  };

  // pagination
  const pages = [];
  for (let i = 1; i <= Math.ceil(filteredBooks.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const renderPagesNumber = pages.map((page) => {
    return (
      <li key={page} id={page} className={currentPage === page ? "active" : null} onClick={handleClick}>
        {page}
      </li>
    );
  });

  // item each page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  // additional
  const changeHandler = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <SearchWrapper>
      <SelectContainer>
        <h1>Available Category</h1>
        <select onChange={changeHandler}>
          {isLoadingGetCategory ? (
            <option>Loading...</option>
          ) : (
            allCategory?.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))
          )}
        </select>
      </SelectContainer>
      <FormControl action="">
        <SearchInput type="text" placeholder="Search Books" onChange={handleChange} />
      </FormControl>
      <BookContainer>
        {isLoadingGetBooks ? (
          <Container>Loading. . .</Container>
        ) : (
          currentItems.map((item, index) => {
            return <Book key={index} image={item.cover_url} title={item.title} authors={item.authors} item={item} handleBookmark={addBookmark} bookmarkComponent={AddBookmark} />;
          })
        )}
      </BookContainer>
      <BookContainer>
        <PageNumber>{renderPagesNumber}</PageNumber>
      </BookContainer>

      <HeadingBookmark>Bookmark</HeadingBookmark>
      <BookContainer>
        {bookmark.map((item, index) => {
          return <Book key={index} image={item.cover_url} title={item.title} authors={item.authors} item={item} handleBookmark={removeBookmark} bookmarkComponent={RemoveBookmark} />;
        })}
      </BookContainer>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  text-align: center;
  /* background-color: green; */
`;

const SelectContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  h1 {
    margin: 2rem 0.5rem 0.5rem;
  }
  select {
    outline: 0;
    font: inherit;
    height: 2em;
    padding: 0 4em 0 1em;
    border-radius: 0.25em;
    cursor: pointer;
  }
  @media screen and (max-width: 350px) {
    select {
      width: 100%;
      max-width: 300px;
    }
  }
`;

const FormControl = styled.form`
  display: flex;
  justify-content: center;
  .icon {
    text-align: center;
    margin-top: 30px;
    margin-left: 2rem;
  }
`;

const SearchInput = styled.input`
  padding-left: 1rem;
  /* margin: 1.5rem auto; */
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  height: 40px;
  border-radius: 15px;
  max-width: 300px;
  width: 100%;
  @media screen and (min-width: 769px) {
    /* width: 100%; */
  }
`;

const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const HeadingBookmark = styled.h1`
  margin: 4rem auto 0.5rem;
`;

const PageNumber = styled.ul`
  list-style: none;
  display: flex;
  li {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  li::before {
    content: "";
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  li:hover {
    transform: scale(1.2) translateY(-5px);
  }
  li.active {
    background-color: #ffc500;
    border-radius: 100%;
    /* color: black; */
  }
`;
