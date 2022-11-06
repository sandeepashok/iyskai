import styled from "@emotion/styled";
import { PageContainter, PageHeading } from "./about";

const Pagecontainter = styled(PageContainter)`
  max-width: 1136px;
  object-fit: contain;
`;

const GalleryContainer = styled.div`
  background: #181818;
  padding: 16px;
  border-radius: 8px;
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
  "https://cdn.pixabay.com/photo/2017/09/05/10/55/karate-2717178_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/09/24/21/09/karate-7477212__340.jpg",
  "https://cdn.pixabay.com/photo/2017/09/05/10/55/karate-2717178_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/09/24/21/09/karate-7477212__340.jpg",
  "https://cdn.pixabay.com/photo/2017/09/05/10/55/karate-2717178_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/09/24/21/09/karate-7477212__340.jpg",
  "https://cdn.pixabay.com/photo/2017/09/05/10/55/karate-2717178_960_720.jpg",
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
