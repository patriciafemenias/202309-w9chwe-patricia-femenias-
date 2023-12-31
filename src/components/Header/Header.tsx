import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <div className="logo-container">
        <img
          className="header-logo"
          src="/images/logo.webp"
          alt="Monster Squad logo"
          width="820"
          height="400"
        ></img>
      </div>
      <Navigation />
    </HeaderStyled>
  );
};
export default Header;
