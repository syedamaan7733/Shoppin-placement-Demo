import { CiMicrophoneOn, CiSearch } from "react-icons/ci";
import { SlSocialGoogle } from "react-icons/sl";
import "./index.css";
export const Hero = () => {
  const languages = ["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "मराठी"];
  return (
    <div className="landing-cont">
      <img
        className="logo"
        src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      />
      <div className="InputName">
        <CiSearch style={{ fontSize: "20px" }} className="search" />
        <input type="text" className="logo" placeholder="" />
        <CiMicrophoneOn style={{ fontSize: "20px" }} className="mic" />
        <SlSocialGoogle style={{ fontSize: "20px" }} className="lens" />
      </div>
      <div style={{ display: "flex", gap: "1em" }}>
        <button className="buttons">Google Search</button>
        <button className="buttons">I'm Feeling Lucky</button>
      </div>
      {/* Language Links */}
      <div className="lang-link">
        <p>Google offered in: </p>

        <div style={{ display: "flex", gap: "1em" }}>
          {languages.map((links) => {
            return <a className="links">{links}</a>;
          })}
        </div>
      </div>
    </div>
  );
};
