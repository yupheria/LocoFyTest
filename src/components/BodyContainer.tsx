import { FunctionComponent, useEffect, useState } from "react";
import UserRowContainer from "./UserRowContainer";
import styles from "./BodyContainer.module.css";

const BodyContainer: FunctionComponent = () => {

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const url = "https://typ-fakeapi.azurewebsites.net/api/directory/getemployees"
    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          setApiData(json);
      } catch (error) {
          console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.mainPageTitle}>
        <h2 className={styles.manageUsers}>Manage Users</h2>
      </div>
      <main className={styles.userTableArea}>
        <div className={styles.actionsArea}>
          <div className={styles.iconLinkButtonGroup}>
            <div className={styles.iconLinkButtonContainer}>
              <div className={styles.iconButtonWrapper}>
                <button className={styles.iconButton}>
                  <div className={styles.hamburgerMenuWrapper}>
                    <img
                      className={styles.employeeIcon}
                      alt=""
                      src="/employee-icon.svg"
                    />
                  </div>
                  <div className={styles.iconText}>All Employees</div>
                </button>
                <small className={styles.allEmployees}>All Employees</small>
              </div>
            </div>
            <div className={styles.iconLinkButtonContainer}>
              <div className={styles.iconButtonWrapper}>
                <button className={styles.iconButton}>
                  <div className={styles.hamburgerMenuWrapper}>
                    <img
                      className={styles.userActivitiesIcon}
                      alt=""
                      src="/user-activities-icon.svg"
                    />
                  </div>
                  <div className={styles.iconText}>All Employees</div>
                </button>
                <small className={styles.allEmployees}>User Activities</small>
              </div>
            </div>
            <div className={styles.iconLinkButtonContainer}>
              <div className={styles.iconButtonWrapper}>
                <button className={styles.iconButton}>
                  <div className={styles.hamburgerMenuWrapper}>
                    <img
                      className={styles.employeeIcon}
                      alt=""
                      src="/download-icon.svg"
                    />
                  </div>
                  <div className={styles.iconText}>All Employees</div>
                </button>
                <small className={styles.allEmployees}>Export CSV</small>
              </div>
            </div>
          </div>
          <div className={styles.iconLinkButtonContainer}>
            <button className={styles.priButton}>
              <div className={styles.priButtonContentContainer}>
                <img className={styles.plusIcon} alt="" src="/plus1.svg" />
                <div className={styles.button}>Add Users</div>
                <img className={styles.plusIcon1} alt="" src="/plus1.svg" />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.userTableContainer}>
          <div className={styles.userTable}>
            <div className={styles.userRowContainer}>
              <div className={styles.titleContainer}>
                <div className={styles.titleWrapperUser}>
                  <summary className={styles.users}>Users:</summary>
                  <h3 className={styles.h3}>3</h3>
                  <img
                    className={styles.plusIcon}
                    alt=""
                    src="/sorting-icon.svg"
                  />
                </div>
                <div className={styles.titleWrapperStatusParent}>
                  <div className={styles.titleWrapperUser}>
                    <summary className={styles.users}>Status</summary>
                    <img
                      className={styles.plusIcon}
                      alt=""
                      src="/sorting-icon1.svg"
                    />
                  </div>
                  <div className={styles.titleWrapperUser}>
                    <summary className={styles.users}>Role</summary>
                    <img
                      className={styles.plusIcon}
                      alt=""
                      src="/sorting-icon2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            {apiData.map(user => (
            <UserRowContainer
              sA="DA"
              daveArthur={user.firstName}
              daveacmeinternationalnz={user.email}
              active="Active"
              full="Full"
              propBackgroundColor="#beeede"
              propColor="#1a1e52"
              propBorder="1px solid var(--mint-a300)"
              propWidth="51px"
              propColor1="#00796b"
              propBackgroundColor1="#283593"
              propWidth1="35px"
            />))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BodyContainer;
