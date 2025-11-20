import { Link } from "react-router";
import styles from "./styles.module.css";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/users" className={styles.navLink}>
        Users
      </Link>
    </div>
  );
}

export default Nav;
