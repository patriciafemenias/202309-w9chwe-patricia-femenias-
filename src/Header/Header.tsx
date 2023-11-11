import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header-logo"
        src="/images/logo.webp"
        alt="Monster Squad logo"
        width="820"
        height="400"
      ></img>
    </HeaderStyled>
  );
};
export default Header;
