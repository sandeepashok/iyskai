import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import styled from "@emotion/styled";

const Navbar = styled.nav`
  background: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
  margin-bottom: 24px;
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
  color: initial;
`;

const Logo = styled.img`
  height: 52px;
  width: 52px;
  padding: 0 4px;
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

const linkStyle = {
  textDecoration: "none",
};

const Header = () => {
  return (
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
            <StyLinks to="/">Home</StyLinks>
            <StyLinks to="about">About</StyLinks>
            <StyMenu />
          </LinksContainer>
        </NavLinks>
      </NavbarContainer>
    </Navbar>
  );
};

export default Header;
