import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { Br, P, PageHeading, Para, ParaHeading } from "../../pages/about";

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
  padding-top: 16px;
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

const Quote = styled.p`
  max-width: 80%;
  font-size: 29px;
`;

const WhyUsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Image = styled.img`
  height: 200px;
  width 200px;
  margin: 32px;
  border: 5px solid #fcfcfc;
  border-radius:16px;
`;

const OtherImages = styled.img`
  margin: 32px;
  margin-top: 4px;
  border: 5px solid #fcfcfc;
  border-radius: 16px;
`;

const B = styled.b``;

const Paragraph = styled(Para)`
  margin: 0 24px 24px 24px;
`;

const WeaponTraining = styled.div``;

const WeaponCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 8px;
`;

const OtherSections = styled.div`
  margin-top: 32px;
`;

const Heading = styled(PageHeading)`
  margin: 24px;
`;

const Paraheading = styled(ParaHeading)`
  margin: 24px;
`;

const PageContainter = styled.div`
  max-width: 1136px;
  padding-top: 0;
  margin: auto;
  margin-top: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #ffffff;
  border-radius: 16px;
  @media (max-width: 500px) {
    max-width: 100vw;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const center = {
  textAlign: "center",
};

const weaponDetails = [
  {
    id: 1,
    imgURL: "https://i.ibb.co/HXsnnS9/IMG-20221101-WA0000.jpg",
    title: "Sai",
    altText: "sai",
  },
  {
    id: 2,
    imgURL: "https://i.ibb.co/x5yx8f1/IMG-20221101-WA0000.jpg",
    title: "Nunchaku",
    altText: "nunchaku",
  },
  {
    id: 3,
    imgURL: "https://i.ibb.co/2cZwh6K/IMG-20221101-WA0004.jpg",
    title: "Bo",
    altText: "bo",
  },
  {
    id: 4,
    imgURL: "https://i.ibb.co/jHsHDqt/IMG-20221101-WA0002.jpg",
    title: "Tanfa",
    altText: "tanfa",
  },
  {
    id: 5,
    imgURL: "https://i.ibb.co/J5ywCv1/IMG-20221101-WA0003.jpg",
    title: "Kama",
    altText: "kama",
  },
];

const WeaponCards = () => {
  return (
    <WeaponCard>
      {weaponDetails.map(({ imgURL, title, altText }) => {
        // console.log(imgURL, title, altText, "here");
        return (
          <CardContainer>
            <Image src={imgURL} alt={altText} />
            <B>{title}</B>
          </CardContainer>
        );
      })}
    </WeaponCard>
  );
};

const Home = () => {
  return (
    <>
      <Section>
        <Banner>
          <Card>
            <Quote>It never gets easier.....</Quote>
            <Quote> You just get better</Quote>
            <Flex>
              <Button>Start now</Button>
              <Link to="trainers">
                <Button>Find trainers</Button>
              </Link>
            </Flex>
          </Card>
        </Banner>
      </Section>
      <PageContainter>
        <WhyUsSection>
          <Heading>Why Us ?</Heading>
          <WeaponTraining>
            <Paraheading>Weapons Training (Kobudo) :</Paraheading>
            <Paragraph>
              <Br />
              <P>
                Kobudo literally meaning “ancient martial way,” refers to the
                weapons art of the Okinawan people, These Okinawan people
                trained in secret and learned to use everyday tools as weapons.
                They learned to adapt almost anything they could in to a weapon,
                including farm tools and household items. Many of the weapons
                and practices of the ancient Okinawan Warriors have been
                forgotten. We pride ourselves in keeping this system and its
                customs alive to this day.
              </P>
              <Br />
              <P>
                This weapon art teaches concentration ,and hardens the hand
                power Students have to learn history, kata and techniques for
                various weapons such as the bo, nunchaku, sai, kama, tonfa and
                eiku. Appropriate for ages 7 to adult.
              </P>
            </Paragraph>
            <WeaponCards />
          </WeaponTraining>
          <OtherSections>
            <Paraheading>Flexiblity :</Paraheading>
            <Paragraph>
              <Br />
              <div style={center}>
                <OtherImages
                  src="https://i.ibb.co/19s0vj8/IMG-20221101-WA0006.jpg"
                  alt="flexiblity"
                />
              </div>
              <P>
                The flexible Karate student has clear advantages over the not so
                flexible Karatekas. He or she will have a greater ability to
                learn skills faster, lower risk of injuries, ability to perform
                a greater variety of skills and usually an improved aesthetic
                appeal (crucial for Kata performance.)
              </P>
            </Paragraph>
            <Paraheading>Body Conditioning :</Paraheading>
            <Paragraph>
              <Br />
              <div style={center}>
                <OtherImages
                  src="https://i.ibb.co/YjmTzq0/IMG-20221101-WA0007.jpg"
                  alt="body conditioning"
                />
              </div>
              <P>
                Body conditioning is a broad term that refers to a wide range of
                physical activities and exercises that train the whole body.
                Body conditioning exercises include full-body workout exercises
                that activate the entire body and exercises that simultaneously
                use multiple major muscle groups.
              </P>
            </Paragraph>
            <Paraheading>Meditation :</Paraheading>
            <Paragraph>
              <Br />
              <div style={center}>
                <OtherImages
                  src="https://i.ibb.co/K5qVPy0/IMG-20221101-WA0009.jpg"
                  alt="meditation"
                />
              </div>
              <P>
                Meditation is an important element of many traditional martial
                arts such as Karate. In Karate, mediation is often referred to
                as Mokuso (Japanese for clearing one's mind). In karate, a calm
                mind and control over the emotions are very important since they
                are crucial factors in executing the moves the right way.
              </P>
            </Paragraph>
            <Paraheading>Overseas Training :</Paraheading>
            <Paragraph>
              <Br />
              <div style={center}>
                <OtherImages
                  src="https://i.ibb.co/0M71QDY/IMG-20221101-WA0006.jpg"
                  alt="overseas training"
                />
              </div>
              <P>
                It is an act of a student pursuing karate opportunities in a
                country other than it's own (ex. Japan). This can boost the
                learning process rapidly.
              </P>
            </Paragraph>
          </OtherSections>
        </WhyUsSection>
      </PageContainter>
    </>
  );
};

export default Home;
