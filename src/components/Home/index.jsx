import styled from "@emotion/styled";
import Button from "../UI/Button";

const Section = styled.section`
  background: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
`;

const Banner = styled.div`
  background: url("https://i.ibb.co/GHjpdxG/single-continuous-line-drawing-young-sportive-man-wearing-kimono-practice-aikido-fighting-stance-pos.png");
  padding: 24px;
  height: 40vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: right;
  max-width: 1136px;
  margin: auto;
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  height: 75%;
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 16px;
  flex-direction: column;
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
            <Button>Find trainers</Button>
          </Flex>
        </Card>
      </Banner>
    </Section>
  );
};

export default Home;
