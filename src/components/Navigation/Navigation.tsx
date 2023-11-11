import { NavLink } from "react-router-dom";

const Navigation = (): React.ReactElement => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/monsters">home</NavLink>
        </li>
        <li>
          <NavLink to="/create">create</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
