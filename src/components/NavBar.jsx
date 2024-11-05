import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/mailboxes">
            Mailboxes
          </Link>
        </li>
        <li>
          <Link className="links" to="/new-mailbox">
            New Mailbox
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
