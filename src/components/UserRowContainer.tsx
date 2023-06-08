import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./UserRowContainer.module.css";

type UserRowContainerType = {
  sA?: string;
  daveArthur?: string;
  daveacmeinternationalnz?: string;
  active?: string;
  full?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
  propPadding?: Property.Padding;
  propBoxSizing?: Property.BoxSizing;
  propColor?: Property.Color;
  propBorder?: Property.Border;
  propWidth?: Property.Width;
  propColor1?: Property.Color;
  propBackgroundColor1?: Property.BackgroundColor;
  propWidth1?: Property.Width;
};

const UserRowContainer: FunctionComponent<UserRowContainerType> = ({
  sA,
  daveArthur,
  daveacmeinternationalnz,
  active,
  full,
  propBackgroundColor,
  propPadding,
  propBoxSizing,
  propColor,
  propBorder,
  propWidth,
  propColor1,
  propBackgroundColor1,
  propWidth1,
}) => {
  const avatarSSizeStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propBackgroundColor, propPadding, propBoxSizing]);

  const sAStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const userStatusStyle: CSS.Properties = useMemo(() => {
    return {
      border: propBorder,
      width: propWidth,
    };
  }, [propBorder, propWidth]);

  const activeStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const roleTagStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      width: propWidth1,
    };
  }, [propBackgroundColor1, propWidth1]);

  return (
    <div className={styles.userRowContainer}>
      <div className={styles.userRowWrapper}>
        <div className={styles.userRowGroup1}>
          <div className={styles.userName}>
            <div className={styles.userInfo}>
              <div className={styles.avatarSSize} style={avatarSSizeStyle}>
                <div className={styles.sa} style={sAStyle}>
                  {sA}
                </div>
              </div>
              <div className={styles.daveArthur}>{daveArthur}</div>
            </div>
            <div className={styles.email}>
              <div className={styles.daveacmeinternationalnz}>
                {daveacmeinternationalnz}
              </div>
            </div>
          </div>
          <div className={styles.userRowGroup2}>
            <div className={styles.statusGroup}>
              <div className={styles.status}>
                <div className={styles.status1}>
                  <div className={styles.userStatus} style={userStatusStyle}>
                    <div className={styles.sa} style={activeStyle}>
                      {active}
                    </div>
                  </div>
                  <small className={styles.on20022022}>on 20/02/2022</small>
                </div>
              </div>
              <button className={styles.secButton}>
                <div className={styles.plusParent}>
                  <img className={styles.plusIcon} alt="" src="/plus2.svg" />
                  <div className={styles.button}>Resend</div>
                  <img className={styles.plusIcon} alt="" src="/plus2.svg" />
                </div>
              </button>
            </div>
            <div className={styles.roleTag} style={roleTagStyle}>
              <div className={styles.sa}>{full}</div>
            </div>
          </div>
        </div>
        <img
          className={styles.arrowRightIcon}
          alt=""
          src="/arrow-right-icon.svg"
        />
      </div>
    </div>
  );
};

export default UserRowContainer;
