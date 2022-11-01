import styled from "@emotion/styled";

const StyButton = styled.button`
  position: relative;
  border: none;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  min-height: 42px;
  color: #ffffff;
  user-select: none;
  background-color: #3c4852;
  transition: box-shadow 300ms ease-in-out 0s, transform 300ms ease-in-out 0s,
    background-color 300ms ease-in-out 0s;
  width: 146px;
  height: 40px;
  margin-top: 32px;
  &:hover {
    box-shadow: 0px 16px 32px 0px var(--color-shadow);
    transform: translate(0px, -2px);
  }

  @media (max-width: 500px) {
    width: 120px;
    height: 40px;
  }
`;

const Button = ({ children }) => <StyButton>{children}</StyButton>;

export default Button;
