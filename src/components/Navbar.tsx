import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
const Navbar: FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuItemContainer}>
        <button className={styles.hamburgerMenuIcon}>
          <img
            className={styles.hamburgerMenuIcon1}
            alt=""
            src="/hamburger-menu.svg"
          />
        </button>
        <div className={styles.itemButtons}>
          <button className={styles.employerGhostM}>
            <div className={styles.dashboardParent}>
              <img
                className={styles.dashboardIcon}
                alt=""
                src="/dashboard.svg"
              />
              <div className={styles.button}>Dashboard</div>
              <img className={styles.plusIcon} alt="" src="/plus.svg" />
            </div>
          </button>
          <button className={styles.employerGhostM}>
            <div className={styles.dashboardParent}>
              <img
                className={styles.payrollAdminIcon}
                alt=""
                src="/payroll-admin-icon.svg"
              />
              <div className={styles.button}>Payroll</div>
              <img className={styles.plusIcon} alt="" src="/plus.svg" />
            </div>
          </button>
          <button className={styles.employerGhostM}>
            <div className={styles.dashboardParent}>
              <img
                className={styles.dashboardIcon}
                alt=""
                src="/my-spaces-icon.svg"
              />
              <div className={styles.button}>My Spaces</div>
              <img className={styles.plusIcon} alt="" src="/plus.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.accountName}>
        <button className={styles.iconButton}>
          <div className={styles.hamburgerMenuWrapper}>
            <img
              className={styles.accountIcon}
              alt=""
              src="/account-icon.svg"
            />
          </div>
          <div className={styles.iconText}>Icon text</div>
        </button>
        <strong className={styles.acmeInternationalLogistics}>
          Acme International Logistics Ltd 19180
        </strong>
      </div>
    </nav>
  );
};

export default Navbar;
