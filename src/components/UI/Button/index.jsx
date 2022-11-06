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
  background-color: #00aed9;
  transition: box-shadow 300ms ease-in-out 0s, transform 300ms ease-in-out 0s,
    background-color 300ms ease-in-out 0s;
  width: 146px;
  height: 40px;
  margin-top: 8px;
  letter-spacing: initial;
  &:hover {
    box-shadow: 0px 16px 32px 0px var(--color-shadow);
    transform: translate(0px, -2px);
    background-color: #006983;
  }

  @media (max-width: 500px) {
    width: 120px;
    height: 40px;
  }
`;

const StyButtonOutlined = styled(StyButton)`
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #00aed9;
  color: #ffffff;
  &:hover {
    border: none;
    color: #008eb0;
    background-color: white;
  }
`;

const Button = ({ children, Filled, Outlined, ...rest }) => {
  return Filled ? (
    <StyButton {...rest}>{children}</StyButton>
  ) : Outlined ? (
    <StyButtonOutlined {...rest}>{children}</StyButtonOutlined>
  ) : (
    <StyButton {...rest}>{children}</StyButton>
  );
};

export default Button;
