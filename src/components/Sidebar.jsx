import Footer from "./Footer";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* similar to {Children} element */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
