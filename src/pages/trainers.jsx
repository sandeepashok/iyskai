import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useContext } from "react";
import { TrainersContext } from "../App";
import { fetchData } from "../fetch";
import { Link } from "react-router-dom";

const Select = styled.select`
  width: 300px;
  padding: 8px 4px;
  border-radius: 8px;
  margin: auto;
  margin-top: 24px;
  display: block;
`;

export const PageContainter = styled.div`
  max-width: 1136px;
  padding: 24px;
  padding-top: 0;
  margin: auto;
  @media (max-width: 500px) {
    padding: 12px;
  }
`;

const PillButtons = styled.button`
  position: relative;
  border: 1px solid #3c4852;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  min-height: 40px;
  color: #3c4852;
  user-select: none;
  background-color: #ffffff;
  margin-right: 8px;
  margin-bottom: 8px;
  transition: box-shadow 300ms ease-in-out 0s, transform 300ms ease-in-out 0s,
    background-color 300ms ease-in-out 0s;
  height: 40px;
  &:hover {
    box-shadow: 0px 16px 32px 0px var(--color-shadow);
    transform: translate(0px, -2px);
  }

  @media (max-width: 500px) {
    height: 40px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: center;
`;

const TrainersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  background: #ffffff;
  padding: 16px;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  border-radius: 12px;
  margin-bottom: 16px;
  margin-right: 16px;
`;

const Trainers = ({ setData }) => {
  const { trainers } = useContext(TrainersContext) || {};
  const [state, setState] = useState("select");
  const [district, setDistrict] = useState("All");

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

  useEffect(() => {
    setDistrict("All");
  }, [state]);

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSelectDistrict = (district) => {
    setDistrict(district);
  };

  const states =
    trainers &&
    trainers
      ?.map((trainer) => trainer.state)
      .filter((v, i, a) => a.indexOf(v) === i);

  const districts = trainers
    ?.filter((trainer) => trainer.state === state)
    ?.map((trainer) => trainer.district)
    ?.filter((v, i, a) => a.indexOf(v) === i);

  let trainersToDisplay = trainers?.filter(
    (trainer) => trainer.state === state
  );

  if (district !== "All") {
    trainersToDisplay = trainersToDisplay.filter(
      (trainer) => trainer.district === district
    );
  }

  return (
    <PageContainter>
      <div style={{ width: "100%" }}>
        <label
          htmlFor="select1"
          style={{
            display: "block",
            margin: "auto",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 500,
          }}
        >
          Select state
        </label>
      </div>
      <Select value={state} onChange={onChange}>
        <option value="select">Select a state</option>
        {states?.map((state) => (
          <option value={state}>{state}</option>
        ))}
      </Select>
      {state !== "select" && (
        <>
          <div>
            <img
              alt="map"
              src="https://www.burningcompass.com/countries/india/maps/karnataka-outline-map.jpg"
              width="300px"
              style={{
                display: "block",
                margin: "auto",
                borderRadius: "8px",
                marginTop: "16px",
              }}
            />
          </div>
          <ButtonContainer>
            <PillButtons
              onClick={() => onSelectDistrict("All")}
              style={{
                ...("All" === district
                  ? {
                      background: "#3c4852",
                      color: "white",
                    }
                  : {}),
              }}
            >
              All
            </PillButtons>
            {districts?.map((currDistrict) => (
              <PillButtons
                onClick={() => onSelectDistrict(currDistrict)}
                style={{
                  ...(currDistrict === district
                    ? {
                        background: "#3c4852",
                        color: "white",
                      }
                    : {}),
                }}
              >
                {currDistrict}
              </PillButtons>
            ))}
          </ButtonContainer>

          <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
            Trainers
          </h2>
          <TrainersContainer>
            {trainersToDisplay?.map((trainer) => (
              <Trainer trainer={trainer} key={trainer.id} />
            ))}
          </TrainersContainer>
        </>
      )}
    </PageContainter>
  );
};

const Trainer = ({ trainer }) => {
  return (
    <Link to={`/trainers/${trainer.id}`}>
      <Card>
        <div>
          <img
            src={trainer.imageLink}
            alt={trainer.name}
            style={{
              objectFit: "contain",
              height: "250px",
              width: "250px",
            }}
          />
        </div>
        <h3
          style={{
            margin: "auto",
            marginTop: "8px",
            marginBottom: "4px",
            fontWeight: 500,
            color: "#3c4852",
          }}
        >
          {trainer.name}
        </h3>
        <p style={{ textAlign: "center", fontSize: "14px", color: "#3c4852" }}>
          {trainer.district}
        </p>
      </Card>
    </Link>
  );
};

export default Trainers;
