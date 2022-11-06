import styled from "@emotion/styled";
import { PageContainter, PageHeading } from "./about";

const Pagecontainter = styled(PageContainter)`
  max-width: 1136px;
  height: unset;
  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const ImageContainer = styled.div`
  background: #181818;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Image = styled.img`
  border: 5px solid #181818;
  @media (max-width: 500px) {
    max-width: 95vw;
    padding: 0;
  }
`;

const Camp = ({ info }) => {
  return (
    <Pagecontainter>
      <PageHeading>{info.title}</PageHeading>
      <ImageContainer>
        <Image src={info.image} alt="ad" />
      </ImageContainer>
    </Pagecontainter>
  );
};

export default Camp;
