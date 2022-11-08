import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { TrainersContext } from "../App";
import { fetchData } from "../fetch";
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
  max-width: 700px;
  @media (max-width: 500px) {
    max-width: 95vw;
    padding: 0;
  }
`;

const Tournament = ({ setData }) => {
  const { tournament } = useContext(TrainersContext) || {};
  const loadData = async () => {
    const response = await fetchData();
    setData(response);
  };
  useEffect(() => {
    if (!tournament) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tournament]);

  return (
    <Pagecontainter>
      <PageHeading>Tournament</PageHeading>
      {!tournament ||
        (tournament?.length < 1 ? (
          <>No Tournaments currently</>
        ) : (
          tournament?.map((img, index) => (
            <ImageContainer key={index}>
              <Image src={img} alt="ad" />
            </ImageContainer>
          ))
        ))}
    </Pagecontainter>
  );
};

export default Tournament;
