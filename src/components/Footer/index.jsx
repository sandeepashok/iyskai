import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  height: 100px;
  background-color: #ffffff;
  margin-top: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
  position: fixed;
  width: 100vw;
  bottom: 0;
`;

const FooterContents = styled.div`
  max-width: 1136px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const BrandName = styled.div`
  font-weight: bold;
  margin: 32px;
`;

const PoweredBy = styled.img`
  height: 35px;
  width: auto;
  object-fit: contain;
  margin: 32px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <BrandName>@IYSKAI, India</BrandName>
        <PoweredBy src="/assets/2lo.png" alt="powered by" />
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;
