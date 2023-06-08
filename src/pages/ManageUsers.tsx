import { FunctionComponent } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BodyContainer from "../components/BodyContainer";
import styles from "./ManageUsers.module.css";
const ManageUsers: FunctionComponent = () => {
  return (
    <div className={styles.manageUsers}>
      <div className={styles.navigation}>
        <Header />
        <Navbar />
        <div className={styles.dividerNavbar} />
      </div>
      <section className={styles.bodySection}>
        <BodyContainer />
      </section>
    </div>
  );
};

export default ManageUsers;
