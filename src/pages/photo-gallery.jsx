import styled from "@emotion/styled";
import { PageContainter, PageHeading } from "./about";

const Pagecontainter = styled(PageContainter)`
  max-width: 1136px;
  min-height: 100vh;
  object-fit: contain;
`;

const GalleryContainer = styled.div`
  background: #ffffff;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Image = styled.img`
  height: 250px;
  width: 250px;
  margin: 4px;
  object-fit: contain;
`;

const photos = [
  "http://jkaconn.com/fcamp04d.jpg",
  "https://cdn.pixabay.com/photo/2022/09/24/21/09/karate-7477212__340.jpg",
  "http://jkaconn.com/fcamp04d.jpg",
  "https://cdn.pixabay.com/photo/2022/09/24/21/09/karate-7477212__340.jpg",
  "http://jkaconn.com/fcamp04d.jpg",
  "https://cdn.pixabay.com/photo/2022/09/24/21/09/karate-7477212__340.jpg",
  "http://jkaconn.com/fcamp04d.jpg",
  "https://cdn.pixabay.com/photo/2022/09/24/21/09/karate-7477212__340.jpg",
];

const PhotoGallery = () => {
  return (
    <Pagecontainter>
      <PageHeading>Photo Gallery</PageHeading>
      <GalleryContainer>
        {photos.map((image, index) => {
          return <Image src={image} alt="gallery image" key={index} />;
        })}
      </GalleryContainer>
    </Pagecontainter>
  );
};

export default PhotoGallery;
