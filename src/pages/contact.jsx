import styled from "@emotion/styled";
import { PageContainter, PageHeading, Para, P } from "./about";

const ContactContainter = styled.div`
  background-color: #181818;
  min-width: 310px;
  padding: 16px;
  text-align: center;
  border-radius: 16px;
  min-height: unset;
`;

const Contact = () => {
  return (
    <PageContainter>
      <PageHeading>Contact</PageHeading>
      <ContactContainter>
        <Para>
          <div style={{ marginTop: "28px" }}>
            <b style={{ display: "inline" }}>Email: </b>
            <P style={{ display: "inline" }}>IYSKAIDO@GMAIL.COM</P>
          </div>
          <br />
          <div>
            <b style={{ display: "inline" }}>Phone no: </b>
            <P style={{ display: "inline" }}>8217610257</P>
          </div>
        </Para>
      </ContactContainter>
    </PageContainter>
  );
};

export default Contact;
