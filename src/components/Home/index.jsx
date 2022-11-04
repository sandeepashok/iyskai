import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Section = styled.section`
  background: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
`;

const Banner = styled.div`
  background: url("https://i.ibb.co/GHjpdxG/single-continuous-line-drawing-young-sportive-man-wearing-kimono-practice-aikido-fighting-stance-pos.png");
  padding: 24px;
  height: 40vh;
  min-height: 350px;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: right;
  max-width: 1136px;
  margin: auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const Card = styled.div`
  height: 75%;
  width: 350px;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 16px;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <Section>
      <Banner>
        <Card>
          <div></div>
          <Flex>
            <Button>Start now</Button>
            <Link to="trainers">
              <Button>Find trainers</Button>
            </Link>
          </Flex>
        </Card>
      </Banner>
      <p></p>
    </Section>
  );
};

export default Home;
