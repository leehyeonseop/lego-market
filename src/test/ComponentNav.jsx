import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ComponentNav = () => {
  return (
    <NavBar>
      <ListWrapper>
        <ListItems>
          <ListAnchor to="/">Splash</ListAnchor>
        </ListItems>
        <ListItems>
          <ListAnchor to="/home">home 피드</ListAnchor>
        </ListItems>
        <ListItems>
          <ListAnchor to="/joinpage">회원가입</ListAnchor>
        </ListItems>
        <ListItems>
          <ListAnchor to="/postuploadpage">게시글작성</ListAnchor>
        </ListItems>
      </ListWrapper>
    </NavBar>
  );
};

const NavBar = styled.header`
  background-color: tomato;
  padding: 20px;
`;

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const ListItems = styled.li`
  list-style: none;
  padding-right: 15px;
`;

const ListAnchor = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default ComponentNav;
