import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import styled from "@emotion/styled";
import Drawer from "../Drawer";
import { useState } from "react";

const Navbar = styled.nav`
  background: #181818;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
  color: #ffffff;
  font-weight: 500;
`;

const Logo = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 8px;
  border-radius: 50%;
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
  color: #00aed9;
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
              <Logo src="/assets/logo.png" alt="Logo" />
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
