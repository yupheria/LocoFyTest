import { FunctionComponent } from "react";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.typLogoContainer}>
        <img
          className={styles.typLogoPriMint}
          alt=""
          src="/typlogo-pri-mint.svg"
        />
        <img
          className={styles.typSecLogoSymbolPriMint}
          alt=""
          src="/typ-sec-logo-symbol--pri-mint.svg"
        />
      </div>
      <div className={styles.userProfileAction}>
        <b className={styles.kiaOraDave}>Kia Ora, Dave</b>
        <button className={styles.userActionButtonM}>
          <div className={styles.avatarMSize}>
            <div className={styles.sa}>DS</div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
