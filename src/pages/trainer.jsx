import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TrainersContext } from "../App";
import { fetchData } from "../fetch";
import { P, PageContainter } from "./about";

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

const Ptag = styled(P)`
  font-size: 16px;
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
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Name: </b>
            <Ptag style={{ display: "inline" }}>{currentTrainer.name}</Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>City: </b>
            <Ptag style={{ display: "inline" }}>{currentTrainer.city}</Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>District: </b>
            <Ptag style={{ display: "inline" }}>{currentTrainer.district}</Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Contact No: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.contactNo}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Mail Id: </b>
            <Ptag style={{ display: "inline" }}>{currentTrainer.mailId}</Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Year Of Joining Karate: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.yearOfJoiningKarate}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Year Of Black Belt: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.yearOfOfBlackBelt}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Present Dan: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.presentDan}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Coach Liscence: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.coachLiscence}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>
              Referee And Judge Certification:
            </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.refreeAndJudgeCertification}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Events Organised: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.eventsOrganised}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Awards If Any: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.awardsIfAny}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Achievements: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.achievements}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Speciality In: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.specialityIn}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>Classes Handling & Timings: </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.classesHandlingTimings}
            </Ptag>
          </div>
          <div style={{ margin: "8px" }}>
            <b style={{ display: "inline" }}>
              If Practising Any Other Martial Arts, Name Them:{" "}
            </b>
            <Ptag style={{ display: "inline" }}>
              {currentTrainer.ifPractisingAnyOtherMartialArtsNameThem}
            </Ptag>
          </div>
        </div>
      </Card>
    </PageContainter>
  );
};

export default Trainer;
