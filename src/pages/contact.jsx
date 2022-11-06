import styled from "@emotion/styled";
import { PageContainter, PageHeading } from "./about";

const ContactContainter = styled.div`
  background-color: #181818;
`;

const Contact = () => {
  return (
    <PageContainter>
      <PageHeading>Contact</PageHeading>
      <ContactContainter></ContactContainter>
    </PageContainter>
  );
};

export default Contact;
