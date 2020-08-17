import React from "react";
import PropTypes from "prop-types";
import Headroom from "react-headroom";
import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  transition: transform 0.5s;

  button {
    border: none;
    background: #fff;
    cursor: pointer;
    margin-right: 16px;
  }
  @media (min-width: 780px) {
    display: none;
  }
`;

export default function Header({ handleMenuOpen, isMenuOpen }) {
  return (
    <Headroom>
      <Container isMenuOpen={isMenuOpen}>
        <button
          aria-label="Open sidebar"
          type="button"
          onClick={handleMenuOpen}
        >
          <GiHamburgerMenu size={23} />
        </button>
      </Container>
    </Headroom>
  );
}

Header.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
