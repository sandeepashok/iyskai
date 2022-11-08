import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { TrainersContext } from "../App";
import { fetchData } from "../fetch";
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

const PhotoGallery = ({ setData }) => {
  const { gallery } = useContext(TrainersContext) || {};
  const loadData = async () => {
    const response = await fetchData();
    setData(response);
  };
  useEffect(() => {
    if (!gallery) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gallery]);

  return (
    <Pagecontainter>
      <PageHeading>Photo Gallery</PageHeading>
      <GalleryContainer>
        {gallery?.map((image, index) => {
          return <Image src={image} alt="gallery image" key={index} />;
        })}
      </GalleryContainer>
    </Pagecontainter>
  );
};

export default PhotoGallery;
