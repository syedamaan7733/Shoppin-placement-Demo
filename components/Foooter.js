import styles from "./index.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div
        style={{
          marginBottom: ".4em",
          borderBottom: "1px solid rgb(148, 148, 148)",
          paddingBottom: ".2em",
        }}
      >
        <p>India</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.footer_link}>
          <a>Advertising</a>
          <a>Business</a>
          <a className={styles.mobile_w}>How Search works</a>
        </div>
        <div className={styles.footer_link}>
          <a>Privacy</a>
          <a>Terms</a>
          <a className={styles.mobile_w}>Settings</a>
        </div>
      </div>
    </div>
  );
};
