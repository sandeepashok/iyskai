import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { Br, P, PageHeading, Para, ParaHeading } from "../../pages/about";
import SliderCorousel from "../SliderCorousel/index";

const Section = styled.section`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #181818;
`;

const Banner = styled.div`
  padding: 24px;
  height: 40vh;
  min-height: 350px;
  width: fit-content;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #181818;
  max-width: 1136px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Flex = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  left: 20px;
  @media (max-width: 500px) {
    left: unset;
    justify-content: center;
    bottom: 20px;
  }
`;

const WhyUsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const OtherImages = styled.img`
  border: 5px solid #181818;
  border-radius: 8px;
`;

const Paragraph = styled(Para)`
  margin: 0 24px 24px 24px;
  @media (max-width: 500px) {
    margin: 0 16px;
  }
`;

const Info = styled.div``;

const WeaponTraining = styled.div`
  margin-top: 8px;
  background-color: #181818;
  border-radius: 8px;
  color: white;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    margin: 8px;
  }
`;

const Features = styled.div``;

const ImgAndInfoOdd = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ParasOdd = styled(P)`
  margin: 24px 32px 32px 32px;
  @media (max-width: 500px) {
    margin: 16px 0;
  }
`;

const ImgAndInfoeven = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: start;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ParasEven = styled(P)`
  margin: 24px 32px 32px 0;
  @media (max-width: 500px) {
    margin: 16px 0;
  }
`;

const OtherSections = styled.div`
  margin-top: 32px;
  background-color: #181818;
  border-radius: 8px;
  color: white;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    margin: 8px;
  }
`;

const Heading = styled(PageHeading)`
  margin: 24px;
`;

const Paraheading = styled(ParaHeading)`
  margin: 24px;
  margin-left: 0;
`;

const Buttons = styled(Button)`
  margin: 8px;
`;

const PageContainter = styled.div`
  max-width: 920px;
  padding-top: 0;
  margin: auto;
  margin-top: 24px;
  @media (max-width: 500px) {
    max-width: 100vw;
  }
`;

const StyBannerImage = styled.img`
  @media (max-width: 500px) {
    max-width: 100vw;
  }
`;

const Home = () => {
  return (
    <>
      <Section>
        <Banner>
          <StyBannerImage src="/assets/hero.png" />
          <Flex>
            <a
              href="https://forms.gle/m4KN4HEKtNX7bxiz9"
              target="https://docs.google.com/forms/d/e/1FAIpQLSdRUPJaYhUZqRKNt7lBsHNtVvONSoLmQ7JMeVXsVK-z37WOMg/viewform?usp=sf_link"
            >
              <Buttons Outlined>Start now</Buttons>
            </a>
            <Link to="trainers">
              <Buttons Outlined>Find trainers</Buttons>
            </Link>
          </Flex>
        </Banner>
      </Section>
      <PageContainter>
        <WhyUsSection>
          <Heading>Why Us ?</Heading>
          <WeaponTraining>
            <Info>
              <Paragraph>
                <Paraheading>Weapons Training (Kobudo):</Paraheading>
                <Br />
                <P>
                  Kobudo literally meaning “ancient martial way,” refers to the
                  weapons art of the Okinawan people, These Okinawan people
                  trained in secret and learned to use everyday tools as
                  weapons. They learned to adapt almost anything they could in
                  to a weapon, including farm tools and household items. Many of
                  the weapons and practices of the ancient Okinawan Warriors
                  have been forgotten. We pride ourselves in keeping this system
                  and its customs alive to this day.
                </P>
                <Br />
                <P>
                  This weapon art teaches concentration, and hardens the hand
                  power Students have to learn history, kata and techniques for
                  various weapons such as the bo, nunchaku, sai, kama, tonfa and
                  eiku. Appropriate for ages 7 to adult.
                </P>
              </Paragraph>
            </Info>
            <SliderCorousel />
          </WeaponTraining>
          <Features>
            <OtherSections>
              <Paragraph>
                <Paraheading>Flexiblity :</Paraheading>
                <Br />
                <ImgAndInfoOdd>
                  <OtherImages src="/assets/flex.jpg" alt="flexiblity" />
                  <ParasOdd>
                    The flexible Karate student has clear advantages over the
                    not so flexible Karatekas. He or she will have a greater
                    ability to learn skills faster, lower risk of injuries,
                    ability to perform a greater variety of skills and usually
                    an improved aesthetic appeal (crucial for Kata performance.)
                  </ParasOdd>
                </ImgAndInfoOdd>
              </Paragraph>
            </OtherSections>
            <OtherSections>
              <Paragraph>
                <Paraheading>Body Conditioning :</Paraheading>
                <Br />
                <ImgAndInfoeven>
                  <OtherImages src="/assets/body.jpg" alt="body conditioning" />

                  <ParasEven>
                    Body conditioning is a broad term that refers to a wide
                    range of physical activities and exercises that train the
                    whole body. Body conditioning exercises include full-body
                    workout exercises that activate the entire body and
                    exercises that simultaneously use multiple major muscle
                    groups.
                  </ParasEven>
                </ImgAndInfoeven>
              </Paragraph>
            </OtherSections>
            <OtherSections>
              <Paragraph>
                <Paraheading>Meditation :</Paraheading>
                <Br />
                <ImgAndInfoOdd>
                  <OtherImages src="/assets/med.jpg" alt="meditation" />

                  <ParasOdd>
                    Meditation is an important element of many traditional
                    martial arts such as Karate. In Karate, mediation is often
                    referred to as Mokuso (Japanese for clearing one's mind). In
                    karate, a calm mind and control over the emotions are very
                    important since they are crucial factors in executing the
                    moves the right way.
                  </ParasOdd>
                </ImgAndInfoOdd>
              </Paragraph>
            </OtherSections>
            <OtherSections>
              <Paragraph>
                <Paraheading>Overseas Training :</Paraheading>
                <Br />
                <ImgAndInfoeven>
                  <OtherImages src="/assets/over.jpg" alt="overseas training" />

                  <ParasEven>
                    It is an act of a student pursuing karate opportunities in a
                    country other than it's own (ex. Japan). This can boost the
                    learning process rapidly.
                  </ParasEven>
                </ImgAndInfoeven>
              </Paragraph>
            </OtherSections>
          </Features>
        </WhyUsSection>
      </PageContainter>
    </>
  );
};

export default Home;
