import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth } from "../contexts/FakeAuthContext";
import User from "./User";

function PageNav() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            {isAuthenticated ? (
              <User />
            ) : (
              <NavLink to="/login" className={styles.ctaLink}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
