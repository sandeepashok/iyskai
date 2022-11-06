import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  height: 100px;
  background-color: #131313;
  margin-top: 24px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
