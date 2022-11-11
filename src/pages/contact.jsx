import styled from "@emotion/styled";
import { PageContainter, PageHeading, P } from "./about";

const ContactContainter = styled.div`
  background-color: #181818;
  min-width: 310px;
  padding: 16px;
  text-align: center;
  border-radius: 16px;
  min-height: unset;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled(P)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Image = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <PageContainter>
      <PageHeading>Contact</PageHeading>
      <ContactContainter>
        <Paragraph>
          <div style={{ marginTop: "28px" }}>
            <b style={{ display: "inline" }}>Email: </b>
            <a
              href="mailto:iyskaido@gmail.com"
              style={{ display: "inline", color: "white" }}
            >
              IYSKAIDO@GMAIL.COM
            </a>
          </div>
          <br />
          <div>
            <b style={{ display: "inline" }}>Phone no: </b>
            <a
              style={{ display: "inline", color: "white" }}
              href="tel:+918217610257"
            >
              8217610257
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "16px",
            }}
          >
            <a
              target="_blank"
              href="https://www.instagram.com/"
              rel="noreferrer"
            >
              <Image src="/assets/social/instagram.png" alt="instagram" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/"
              rel="noreferrer"
            >
              <Image src="/assets/social/facebook.png" alt="facebook" />
            </a>
            <a target="_blank" href="https://www.youtube.com/" rel="noreferrer">
              <Image src="/assets/social/youtube.png" alt="youtube" />
            </a>
            <a target="_blank" href="https://twitter.com/" rel="noreferrer">
              <Image src="/assets/social/twitter.png" alt="twitter" />
            </a>
            <a
              target="_blank"
              href="mailto:iyskaido@gmail.com"
              rel="noreferrer"
            >
              <Image src="/assets/social/gmail.png" alt="mail" />
            </a>
          </div>
        </Paragraph>
      </ContactContainter>
    </PageContainter>
  );
};

export default Contact;
