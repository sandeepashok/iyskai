import styled from "@emotion/styled";

export const PageContainter = styled.div`
  max-width: 900px;
  padding: 24px;
  padding-top: 0;
  margin: auto;
`;

export const PageHeading = styled.h2`
  text-align: center;
  margin-bottom: 32px;
`;

export const Para = styled.section`
  margin-bottom: 24px;
`;

export const ParaHeading = styled.h3`
  margin-bottom: 16px;
`;

export const P = styled.p`
  font-size: 14px;
  margin-bottom: 6px;
  line-height: 150%;
  text-align: justify;
`;

export const Br = styled.div`
  height: 12px;
`;

const Li = styled.li`
  font-size: 14px;
  margin-bottom: 6px;
  line-height: 150%;
  text-align: justify;
`;

const About = () => {
  return (
    <PageContainter>
      <PageHeading>About</PageHeading>
      <ParaHeading>KARATE:</ParaHeading>
      <Para>
        <b>1. What is karate ?</b>
        <Br />
        <P>KARA-empty ;TE-hand</P>
        <P>Its an empty hand martial art .</P>
      </Para>
      <Para>
        <b>2. What is martial Art?</b>
        <Br />
        <P>
          <b>Martial arts</b> are codified systems and traditions of combat
          practices, which are practiced for a number of reasons: as
          self-defense, military and law enforcement applications, mental and
          spiritual development.
        </P>
        <Br />
        <b>Important facts about Karate</b>
        <Br />
        <ul>
          <Li>
            The place where Karate training is carried out is called the "dojo".
            This translates to "the place of the way".
          </Li>
          <Li>
            The traditional white uniform you wear in the dojo is called a "gi",
            simply meaning "uniform" in Japanese.
          </Li>
          <Li>
            The loud yell made during explosive techniques is called a "kiai"
            (key-i). This is Japanese for "unification of will".
          </Li>
          <Li>
            The kiai serves two purposes, to empty the body of excess wind
            incase you are hit in the stomach by a counter attack and to focus
            all positive energy ("chi") on the technique.
          </Li>
          <Li>
            Karate is one of the most popular martial arts practiced today.
          </Li>
          <Li>
            Karate is for just about everyone, for all ages and is a great
            physical workout, no matter what age or physical condition you are
            in when you start.
          </Li>
          <Li>
            Karate is a way to a better life, not just a method of fighting.
          </Li>
          <Li>
            Karate is great for the mind (concentration) and the spirit
            (emotional stability).
          </Li>
          <Li>
            There is no such thing as the Great martial art. Nor is there any
            art that is better than another or all the rest. The art is not
            better, only the practitioner. But, remember that on any day,
            anywhere, anyone can beat anyone!
          </Li>
        </ul>
      </Para>
    </PageContainter>
  );
};

export default About;
