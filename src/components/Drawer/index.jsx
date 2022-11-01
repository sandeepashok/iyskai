import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: #ffffff;
  text-align: center;
  height: 100vh;
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  overflow: scroll;
  overflow-x: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &::-webkit-scrollbar {
    width: 1px;
  }
  @media (max-width: 429px) {
    width: 100vw;
  }
`;

const SubHeading = styled.div`
  padding: 8px 16px;
  text-decoration: none;
  color: #3c4852;
  font-size: 20px;
  font-weight: 500;
  border-top: 0.01px solid #f8f8f8;
  border-bottom: 0.01px solid #f8f8f8;
  margin: 0.5rem 6rem;
`;

const StyLinks = styled(Link)`
  padding: 12px 16px;
  text-decoration: none;
  color: #3c4852;
  border-top: 0.01px solid #f8f8f8;
  border-bottom: 0.01px solid #f8f8f8;
  margin: 0.2rem 4rem;
  &:hover {
    border-top: 1px solid #80808047;
    border-bottom: 1px solid #80808047;
  }
`;

const CloseBtnContainer = styled.div`
  text-align: end;
  margin: 0.5rem 0.5rem 0 0;
  position: sticky;
  top: 0;
  right: 0;
`;

const CloseBtn = styled(RiCloseCircleLine)`
  font-size: 24px;
  cursor: pointer;
`;

const Drawer = () => {
  return (
    <DrawerContainer>
      <CloseBtnContainer>
        <CloseBtn />
      </CloseBtnContainer>
      {/* <Menu>Menu</Menu> */}
      <StyLinks to="/">Home</StyLinks>
      <StyLinks to="/about">About Us</StyLinks>
      <br />
      <SubHeading>Events:</SubHeading>
      <StyLinks to="/camp">Camp</StyLinks>
      <StyLinks to="/tournament">Tournament</StyLinks>
      <SubHeading>Gallery:</SubHeading>
      <StyLinks to="/photo-gallery">Photo Gallery</StyLinks>
      <StyLinks to="/video-gallery">Video Gallery</StyLinks>
      <br />
      <StyLinks to="/dojo-atiquette">Dojo Atiquette</StyLinks>
      <StyLinks to="/contact">Contact</StyLinks>
    </DrawerContainer>
  );
};

export default Drawer;
