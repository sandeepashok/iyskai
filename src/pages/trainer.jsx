import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TrainersContext } from "../App";
import { fetchData } from "../fetch";
import { PageContainter } from "./about";

const Card = styled.div`
  display: flex;
  padding-top: 24px;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const ImageWrapper = styled.div`
  marginright: 24px;
  @media (max-width: 500px) {
    margin: auto;
    margin-bottom: 16px;
  }
`;

const Image = styled.img`
  max-width: 350px;
  @media (max-width: 500px) {
    max-width: 250px;
    display: block;
    margin: auto;
  }
`;

const Trainer = ({ setData }) => {
  const { id } = useParams();
  const { trainers } = useContext(TrainersContext) || {};
  const loadData = async () => {
    const response = await fetchData();
    setData(response);
  };
  useEffect(() => {
    if (!trainers) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainers]);

  // eslint-disable-next-line eqeqeq
  const currentTrainer = trainers?.find((trainer) => trainer.id == id);

  console.log({ currentTrainer });

  return (
    <PageContainter
      style={{ background: "#181818", paddingTop: "16px", borderRadius: "8px" }}
    >
      <h2 style={{ textAlign: "center" }}>{currentTrainer?.name}</h2>
      <Card>
        <ImageWrapper>
          <Image
            src={currentTrainer?.imageLink}
            alt={currentTrainer?.name}
          ></Image>
        </ImageWrapper>
        <div style={{ margin: "0 16px" }}>
          {
            <div>
              {currentTrainer?.content?.split("\n").map((data) => (
                <div>{data}</div>
              ))}
            </div>
          }
        </div>
      </Card>
    </PageContainter>
  );
};

export default Trainer;
