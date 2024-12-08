import { FaFlask } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import styles from "./index.module.css";
export const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div
          style={{
            display: "flex",
            gap: "1em",
            alignItems: "center",
            fontWeight: 500,
          }}
        >
          <a className={styles.mobile_w}>About</a>
          <a className={styles.mobile_w}>Store</a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1em",
            alignItems: "center",
          }}
        >
          <a>Gmail</a>
          <a>Images</a>
          <a>
            <FaFlask />
          </a>
          <a>
            <IoGridOutline />
          </a>
          <div
            style={{
              height: "45px",
              width: "45px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                marginRight: ".6em",
                objectFit: 'cover'
              }}
              src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
              alt="demo"
            />
          </div>
        </div>
      </div>
    </>
  );
};
