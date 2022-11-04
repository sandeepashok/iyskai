import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import styled from "@emotion/styled";
import Drawer from "../Drawer";
import { useState } from "react";

const Navbar = styled.nav`
  background: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
  margin-bottom: 24px;
  position: relative;
`;

const NavbarContainer = styled.div`
  max-width: 1136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 12px;
`;

const BrandLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
`;

const StyMenu = styled(IoMenuOutline)`
  height: 28px;
  width: 28px;
  margin-left: 20px;
  cursor: pointer;
`;

const StyLinks = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: #3c4852;
  font-weight: 500;
`;

const Logo = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 8px;
`;

const LinksContainer = styled.div`
  padding: 2px 8px;
  display: flex;
  align-items: center;
`;

const Title = styled.b`
  font-size: 24px;
  align-items: center;
  padding: 0 4px;
  color: #ff1616;
`;

const DesktopLinks = styled(LinksContainer)`
  @media (max-width: 500px) {
    display: none;
  }
`;

const linkStyle = {
  textDecoration: "none",
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuState = () => {
    setShowMenu((flag) => !flag);
  };

  return (
    <>
      <Navbar>
        <NavbarContainer>
          <Link to="/" style={linkStyle}>
            <BrandLogo>
              <Logo
                src="https://i.ibb.co/tYsm4J5/Dark-Green-and-Marigold-Regular-Sports-Logo-1.png"
                alt="Logo"
              />
              <Title>IYSKAI</Title>
            </BrandLogo>
          </Link>
          <NavLinks>
            <LinksContainer>
              <DesktopLinks>
                <StyLinks to="/">Home</StyLinks>
                <StyLinks to="about">About</StyLinks>
              </DesktopLinks>
              <StyMenu onClick={toggleMenuState} />
            </LinksContainer>
          </NavLinks>
        </NavbarContainer>
        {showMenu && <Drawer onClose={toggleMenuState} />}
      </Navbar>
    </>
  );
};

export default Header;