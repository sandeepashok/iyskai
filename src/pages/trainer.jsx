import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TrainersContext } from "../App";
import { fetchData } from "../fetch";
import { PageContainter } from "./about";

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

  return (
    <PageContainter>
      <h2>{currentTrainer?.name}</h2>
    </PageContainter>
  );
};

export default Trainer;
