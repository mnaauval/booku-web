import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <TitleWrapper>
      <h1>
        booku <span>app</span>
      </h1>
    </TitleWrapper>
  );
};

export default Navbar;

const TitleWrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
  background-color: #1c1a4e;
  h1 {
    font-size: 2rem;
    color: #fff;
  }
  span {
    color: #ffc500;
  }
`;
