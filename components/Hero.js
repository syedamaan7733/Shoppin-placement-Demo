import { CiMicrophoneOn, CiSearch } from "react-icons/ci";
import { SlSocialGoogle } from "react-icons/sl";
import styles from "./index.module.css";
export const Hero = () => {
  const languages = ["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "मराठी"];
  return (
    <div className={styles.landing_cont}>
      <img
        className={styles.logo}
        src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      />
      <div className={styles.InputName}>
        <CiSearch style={{ fontSize: "20px" }} className={styles.search} />
        <input type="text" className={styles.logo} placeholder="" />
        <CiMicrophoneOn style={{ fontSize: "20px" }} className={styles.mic} />
        <SlSocialGoogle style={{ fontSize: "20px" }} className={styles.lens} />
      </div>
      <div style={{ display: "flex", gap: "1em" }}>
        <button className={styles.buttons}>Google Search</button>
        <button className={styles.buttons}>I'm Feeling Lucky</button>
      </div>
      {/* Language Links */}
      <div className={styles.lang_link}>
        <p>Google offered in: </p>

        <div style={{ display: "flex", gap: "1em" }}>
          {languages.map((links) => {
            return <a className={styles.links}>{links}</a>;
          })}
        </div>
      </div>
    </div>
  );
};
