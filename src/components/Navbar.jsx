import styled from "styled-components";

import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <Container>
            <HomeLink to="/">
                <p>Home</p>
            </HomeLink>
            <Nav>
                <StyleLink to="/about">About</StyleLink>
                <StyleLink to="/projects">Projects</StyleLink>
            </Nav>
        </Container>
    );
}

export default Navbar;
const Container = styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: space-between;

    width: 100%;
`;
const HomeLink = styled(NavLink)`
    width: 60px;
    height: 40px;
    border-radius: 8px;
    background-color: lightcoral;
    align-items: center;
    justify-content: center;
    display: flex;
    font-weight: bold;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    font-size: large;
    color: black;
`;

const Nav = styled.div`
    display: flex;
    font-size: 18px;
    line-height: 28px;
    gap: 28px;
    z-index: 100;
`;
const StyleLink = styled(NavLink)`
    color: black;
    &.active {
        color: #4299e1;
    }
`;
