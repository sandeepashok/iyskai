import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: #181818;
  text-align: center;
  height: 100vh;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  overflow: scroll;
  overflow-x: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding-top: 16px;
  &::-webkit-scrollbar {
    width: 1px;
  }
  @media (max-width: 429px) {
    width: 85vw;
  }
`;

const SubHeading = styled.div`
  padding: 8px 16px;
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  margin: 0.5rem 6rem;
`;

const StyLinks = styled(Link)`
  padding: 12px 16px;
  text-decoration: none;
  color: #ffffff;
  border-top: 0.01px solid rgba(0, 0, 0, 0);
  border-bottom: 0.01px solid rgba(0, 0, 0, 0);
  margin: 0.2rem 4rem;
  &:hover {
    background-color: #3f3f3f;
    border-radius: 10px 2px;
  }
  @media (max-width: 429px) {
    margin: 0.2rem 2rem;
  }
`;

const CloseBtnContainer = styled.div`
  text-align: end;
  margin: 0.5rem 0.5rem 32px 0;
  position: sticky;
  top: 8px;
  right: 0;
`;

const CloseBtn = styled(RiCloseCircleLine)`
  font-size: 24px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0.3;
  z-index: 98;
`;

const Drawer = ({ onClose }) => {
  return (
    <>
      <ModalContainer onClick={onClose} />
      <DrawerContainer>
        <CloseBtnContainer>
          <CloseBtn onClick={onClose} />
        </CloseBtnContainer>
        <StyLinks to="/" onClick={onClose}>
          Home
        </StyLinks>
        <StyLinks to="/about" onClick={onClose}>
          About Us
        </StyLinks>
        <br />
        <SubHeading>Events:</SubHeading>
        <StyLinks to="/camp" onClick={onClose}>
          Camp
        </StyLinks>
        <StyLinks to="/tournament" onClick={onClose}>
          Tournament
        </StyLinks>
        <SubHeading>Gallery:</SubHeading>
        <StyLinks to="/photo-gallery" onClick={onClose}>
          Photo Gallery
        </StyLinks>
        <StyLinks to="/video-gallery" onClick={onClose}>
          Video Gallery
        </StyLinks>
        <br />
        <StyLinks to="/dojo-etiquette" onClick={onClose}>
          Dojo Etiquette
        </StyLinks>
        <StyLinks to="/contact" onClick={onClose}>
          Contact
        </StyLinks>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
