import "./index.css";

export const Footer = () => {
  return (
    <div className="footer">
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
        <div className="footer-link">
          <a>Advertising</a>
          <a>Business</a>
          <a className="mobile-w">How Search works</a>
        </div>
        <div className="footer-link">
          <a>Privacy</a>
          <a>Terms</a>
          <a className="mobile-w">Settings</a>
        </div>
      </div>
    </div>
  );
};
